// ============================================================
// Configuración — cambiar credenciales y token aquí
// ============================================================
const CONFIG = {
  username: 'pacotoni',
  password: 'Campello2026',
  github_token: 'PEGAR_TOKEN_AQUI',
  github_repo: 'adrianirles10-cyber/perelcampello',
  github_branch: 'main'
};

// ============================================================
// GitHub API
// ============================================================
const GH = {
  async request(method, path, body = null) {
    const url = `https://api.github.com/repos/${CONFIG.github_repo}/contents/${path}`;
    const opts = {
      method,
      headers: {
        'Authorization': `token ${CONFIG.github_token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(url, opts);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Error ${res.status}`);
    }
    return res.json();
  },

  async listFolder(folder) {
    try {
      return await this.request('GET', folder);
    } catch {
      return [];
    }
  },

  async createFile(path, content, message) {
    const encoded = btoa(unescape(encodeURIComponent(content)));
    return this.request('PUT', path, {
      message,
      content: encoded,
      branch: CONFIG.github_branch
    });
  },

  async deleteFile(path, sha, message) {
    return this.request('DELETE', path, { message, sha, branch: CONFIG.github_branch });
  }
};

// ============================================================
// Utilidades
// ============================================================
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60);
}

function buildFrontmatter(data) {
  const title = data.title.replace(/"/g, '\\"');
  const excerpt = data.excerpt.replace(/"/g, '\\"');
  const author = (data.author || 'Paco Toni').replace(/"/g, '\\"');
  return `---
title: "${title}"
date: ${data.date}
author: "${author}"
excerpt: "${excerpt}"
---

${data.body}`;
}

function formatDate(isoDate) {
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const d = new Date(isoDate + 'T12:00:00');
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

// ============================================================
// LOGIN PAGE
// ============================================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  // Ya estaba autenticado → ir al panel
  if (sessionStorage.getItem('admin_auth') === 'ok') {
    window.location.href = 'panel.html';
  }

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    const err  = document.getElementById('loginError');

    if (user === CONFIG.username && pass === CONFIG.password) {
      sessionStorage.setItem('admin_auth', 'ok');
      sessionStorage.setItem('admin_user', user);
      window.location.href = 'panel.html';
    } else {
      err.classList.remove('hidden');
      document.getElementById('password').value = '';
    }
  });
}

// ============================================================
// PANEL PAGE
// ============================================================
let currentCategory = 'escritos';
let mdeEditor = null;

if (document.getElementById('sectionEscritos')) {
  // Verificar autenticación
  if (sessionStorage.getItem('admin_auth') !== 'ok') {
    window.location.href = 'index.html';
  }

  // Mostrar usuario
  const user = sessionStorage.getItem('admin_user') || CONFIG.username;
  document.getElementById('sidebarUser').textContent = `Usuario: ${user}`;

  // Cargar listas al iniciar
  loadPostList('escritos');
  loadPostList('prensa');

  // Inicializar editor markdown
  mdeEditor = new EasyMDE({
    element: document.getElementById('postBody'),
    placeholder: 'Escribe aquí el contenido del artículo...',
    spellChecker: false,
    autosave: { enabled: false },
    toolbar: ['bold', 'italic', 'heading-2', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'preview'],
    minHeight: '280px',
    status: false
  });

  // Fecha por defecto: hoy
  document.getElementById('postDate').value = todayISO();

  // Submit del formulario
  document.getElementById('postForm').addEventListener('submit', async e => {
    e.preventDefault();
    await publishPost();
  });
}

// ============================================================
// Navegación entre secciones
// ============================================================
function showSection(category) {
  currentCategory = category;

  document.getElementById('sectionEscritos').classList.toggle('hidden', category !== 'escritos');
  document.getElementById('sectionPrensa').classList.toggle('hidden', category !== 'prensa');
  document.getElementById('sectionEditor').classList.add('hidden');

  document.getElementById('navEscritos').classList.toggle('active', category === 'escritos');
  document.getElementById('navPrensa').classList.toggle('active', category === 'prensa');
}

function showEditor(category) {
  currentCategory = category;
  const label = category === 'prensa' ? 'Nueva nota de prensa' : 'Nuevo escrito';
  document.getElementById('editorTitle').textContent = label;

  document.getElementById('sectionEscritos').classList.add('hidden');
  document.getElementById('sectionPrensa').classList.add('hidden');
  document.getElementById('sectionEditor').classList.remove('hidden');

  // Limpiar formulario
  document.getElementById('postTitle').value = '';
  document.getElementById('postDate').value = todayISO();
  document.getElementById('postAuthor').value = 'Paco Toni';
  document.getElementById('postExcerpt').value = '';
  mdeEditor.value('');
  document.getElementById('publishStatus').textContent = '';
  document.getElementById('publishStatus').className = 'status-msg';
  document.getElementById('btnPublish').disabled = false;
  document.getElementById('btnPublish').textContent = 'Publicar';
}

function backToList() {
  showSection(currentCategory);
}

function logout() {
  sessionStorage.removeItem('admin_auth');
  sessionStorage.removeItem('admin_user');
  window.location.href = 'index.html';
}

// ============================================================
// Cargar lista de posts
// ============================================================
async function loadPostList(category) {
  const container = document.getElementById(`list${category.charAt(0).toUpperCase() + category.slice(1)}`);

  try {
    const files = await GH.listFolder(`_posts/${category}`);
    const mdFiles = files.filter(f => f.name.endsWith('.md')).reverse();

    if (mdFiles.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <strong>No hay entradas todavía</strong>
          <p>Crea la primera usando el botón de arriba.</p>
        </div>`;
      return;
    }

    container.innerHTML = mdFiles.map(f => {
      const nameNoExt = f.name.replace('.md', '');
      const datePart = nameNoExt.substring(0, 10);
      const titlePart = nameNoExt.substring(11).replace(/-/g, ' ');
      const displayDate = datePart ? formatDate(datePart) : '';

      return `
        <div class="post-item">
          <div class="post-item-info">
            <div class="post-item-title">${titlePart}</div>
            <div class="post-item-meta">${displayDate} &nbsp;·&nbsp; ${f.name}</div>
          </div>
          <div>
            <button class="btn-delete" onclick="deletePost('_posts/${category}/${f.name}', '${f.sha}', '${titlePart}', '${category}', this)">
              Eliminar
            </button>
          </div>
        </div>`;
    }).join('');

  } catch (err) {
    container.innerHTML = `<div class="empty-state"><strong>Error al cargar</strong><p>${err.message}</p></div>`;
  }
}

// ============================================================
// Publicar post
// ============================================================
async function publishPost() {
  const title   = document.getElementById('postTitle').value.trim();
  const date    = document.getElementById('postDate').value || todayISO();
  const author  = document.getElementById('postAuthor').value.trim() || 'Paco Toni';
  const excerpt = document.getElementById('postExcerpt').value.trim();
  const body    = mdeEditor.value().trim();

  if (!title || !excerpt || !body) {
    setStatus('Rellena todos los campos obligatorios.', 'error');
    return;
  }

  const btn = document.getElementById('btnPublish');
  btn.disabled = true;
  btn.textContent = 'Publicando...';
  setStatus('', '');

  try {
    const slug     = slugify(title);
    const filename = `${date}-${slug}.md`;
    const path     = `_posts/${currentCategory}/${filename}`;
    const content  = buildFrontmatter({ title, date, author, excerpt, body });

    await GH.createFile(path, content, `Nuevo post: ${title}`);

    setStatus('¡Publicado correctamente! Aparecerá en el sitio en ~1 minuto.', 'success');
    btn.textContent = 'Publicado ✓';

    // Recargar lista
    await loadPostList(currentCategory);

  } catch (err) {
    setStatus(`Error al publicar: ${err.message}`, 'error');
    btn.disabled = false;
    btn.textContent = 'Publicar';
  }
}

// ============================================================
// Eliminar post
// ============================================================
async function deletePost(path, sha, title, category, btn) {
  if (!confirm(`¿Eliminar "${title}"?\n\nEsta acción no se puede deshacer.`)) return;

  // Remove from DOM immediately
  const item = btn.closest('.post-item');
  item.style.transition = 'opacity .2s';
  item.style.opacity = '0';
  setTimeout(() => item.remove(), 200);

  try {
    const filename = path.split('/').pop();
    const files = await GH.listFolder(`_posts/${category}`);
    const fresh = files.find(f => f.name === filename);
    const currentSha = fresh ? fresh.sha : sha;

    await GH.deleteFile(path, currentSha, `Eliminar post: ${title}`);

    // If list is now empty show empty state
    const container = document.getElementById(`list${category.charAt(0).toUpperCase() + category.slice(1)}`);
    if (!container.querySelector('.post-item')) {
      container.innerHTML = `<div class="empty-state"><strong>No hay entradas todavía</strong><p>Crea la primera usando el botón de arriba.</p></div>`;
    }
  } catch (err) {
    // Restore list on error
    await loadPostList(category);
    alert(`Error al eliminar: ${err.message}`);
  }
}

// ============================================================
// Helpers UI
// ============================================================
function setStatus(msg, type) {
  const el = document.getElementById('publishStatus');
  el.textContent = msg;
  el.className = `status-msg ${type}`;
}
