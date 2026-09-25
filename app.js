/*
  MAIN WEBSITE LOGIC
*/

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getBook(id) {
  return BOOKS.find(book => book.id === id);
}

function getText(book, id) {
  return book?.texts?.find(text => text.id === id);
}


/* =========================
   HOMEPAGE
   ========================= */

function renderHome() {
  const container = document.querySelector("#books");

  if (!container) return;

  container.innerHTML = BOOKS.map(book => `
    <a
      class="book-card"
      href="book.html?book=${encodeURIComponent(book.id)}"
      aria-label="Ver ${esc(book.title)}"
    >
      <div class="book-cover">
        <img
          src="${esc(book.cover)}"
          alt="${esc(book.title)}"
        >
      </div>

      <div class="book-card-info">
        <p>${esc(book.author)}</p>
        <h2>${esc(book.title)}</h2>
      </div>
    </a>
  `).join("");
}


/* =========================
   BOOK PAGE
   ========================= */

function renderBookPage() {
  const container = document.querySelector("#book-page");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("book");

  const book = getBook(bookId);

  if (!book) {
    container.innerHTML = `
      <main class="error-page">
        <h1>Libro no encontrado</h1>
        <a href="index.html">Volver a los libros</a>
      </main>
    `;
    return;
  }

  document.title = `${book.title} · Carles Esteban`;

  document.documentElement.style.setProperty(
    "--book-theme",
    book.theme
  );

  container.innerHTML = `
    <main class="book-page-content">

      <a class="back-link" href="index.html">
        ← Volver a los libros
      </a>

      <div class="book-detail">

        <div class="book-detail-cover">
          <img
            src="${esc(book.cover)}"
            alt="${esc(book.title)}"
          >
        </div>

        <div class="book-detail-info">

          <p class="eyebrow">
            ${esc(book.author)}
          </p>

          <h1>
            ${esc(book.title)}
          </h1>

          <div class="reading-options">

            <h2>Opciones de lectura</h2>

            ${book.texts.map(text => `
              <a
                class="reading-option"
                href="read.html?book=${encodeURIComponent(book.id)}&text=${encodeURIComponent(text.id)}"
              >
                ${esc(text.title)}
                <span>→</span>
              </a>
            `).join("")}

          </div>

          <a
            class="amazon-button"
            href="${esc(book.amazon)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar en Amazon ↗
          </a>

        </div>

      </div>

    </main>
  `;
}


/* =========================
   READING PAGE
   ========================= */

function renderReadingPage() {
  const container = document.querySelector("#reading-page");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);

  const bookId = params.get("book");
  const textId = params.get("text");

  const book = getBook(bookId);
  const text = getText(book, textId);

  if (!book || !text) {
    container.innerHTML = `
      <main class="error-page">
        <h1>Texto no encontrado</h1>
        <a href="index.html">Volver a los libros</a>
      </main>
    `;
    return;
  }

  document.title = `${text.title} · ${book.title}`;

  container.innerHTML = `
    <main class="reading-content">

      <a
        class="back-link"
        href="book.html?book=${encodeURIComponent(book.id)}"
      >
        ← Volver al libro
      </a>

      <article class="reading-article">

        <p class="eyebrow">
          ${esc(book.title)}
        </p>

        <h1>
          ${esc(text.title)}
        </h1>

        ${
          text.content
            ? `
              <div class="reading-text">
                ${esc(text.content).replace(/\n/g, "<br>")}
              </div>
            `
            : `
              <div class="empty-reading">
                <p>
                  El contenido de este texto se añadirá próximamente.
                </p>
              </div>
            `
        }

      </article>

    </main>
  `;
}


/* =========================
   START
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderHome();

  renderBookPage();

  renderReadingPage();

});
