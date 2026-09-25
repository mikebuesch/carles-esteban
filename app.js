const esc = (value) => String(value ?? "")
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');


const params = new URLSearchParams(window.location.search);

const bookId = params.get('book');
const textId = params.get('text');

const book = BOOKS.find(item => item.id === bookId);


/* =========================================
   HOMEPAGE
   ========================================= */

function renderHome() {

  const target = document.querySelector('#books');

  if (!target) return;

  target.innerHTML = BOOKS.map(book => `
    
    <a
      class="book-card"
      href="book.html?book=${encodeURIComponent(book.id)}"
      aria-label="Abrir ${esc(book.title)}"
    >

      <img
        src="${esc(book.cover)}"
        alt="Portada de ${esc(book.title)}"
      >

    </a>

  `).join('');


  const year = document.querySelector('#year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* =========================================
   BOOK PAGE
   ========================================= */

function renderBook() {

  const target = document.querySelector('#book-page');

  if (!target || !book) return;


  document.title = `${book.title} · Carles Esteban`;


  document.body.style.setProperty(
    '--book-theme',
    book.theme
  );


  target.innerHTML = `

    <div class="book-shell">

      <a
        class="back-link"
        href="index.html"
      >
        ← Volver a los libros
      </a>


      <section class="book-layout">


        <!-- BOOK COVER -->

        <div class="cover-wrap">

          <img
            class="detail-cover"
            src="${esc(book.cover)}"
            alt="Portada de ${esc(book.title)}"
          >

        </div>


        <!-- BOOK INFORMATION -->

        <div class="book-options">

          <p class="eyebrow">
            ${esc(book.author || "Carles Esteban")}
          </p>


          <h1>
            ${esc(book.title)}
          </h1>


          <p class="book-description">
            Descubre los textos disponibles de este libro.
          </p>


          <div class="reading-options">

            <h2>Leer</h2>

            ${book.texts.map(text => `

              <a
                class="option"
                href="read.html?book=${encodeURIComponent(book.id)}&text=${encodeURIComponent(text.id)}"
              >

                <span>
                  ${esc(text.title)}
                </span>

                <span
                  class="option-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </a>

            `).join('')}

          </div>


          <a
            class="amazon-button"
            href="${esc(book.amazon)}"
            target="_blank"
            rel="noopener noreferrer"
          >

            <span>
              Comprar el libro
            </span>

            <span aria-hidden="true">
              ↗
            </span>

          </a>


        </div>

      </section>

    </div>

  `;
}


/* =========================================
   READING PAGE
   ========================================= */

function renderReading() {

  const target = document.querySelector('#reading-page');

  if (!target || !book) return;


  const text =
    book.texts.find(item => item.id === textId)
    || book.texts[0];


  if (!text) return;


  document.title =
    `${text.title} · ${book.title}`;


  target.innerHTML = `

    <article class="reading-shell">


      <nav class="reading-nav">

        <a
          href="book.html?book=${encodeURIComponent(book.id)}"
        >
          ← ${esc(book.title)}
        </a>

      </nav>


      <header class="reading-header">

        <p class="eyebrow">
          ${esc(book.title)}
        </p>

        <h1>
          ${esc(text.title)}
        </h1>

      </header>


      <div class="reading-content">

        ${
          text.content
            ? esc(text.content).replace(/\n/g, '<br>')
            : `
              <p class="empty-text">
                Este texto estará disponible próximamente.
              </p>
            `
        }

      </div>


    </article>

  `;
}


/* =========================================
   START
   ========================================= */

renderHome();

renderBook();

renderReading();


/* =========================================
   ERROR
   ========================================= */

if (
  (
    document.querySelector('#book-page')
    ||
    document.querySelector('#reading-page')
  )
  &&
  !book
) {

  const target =
    document.querySelector('#book-page')
    ||
    document.querySelector('#reading-page');


  target.innerHTML = `

    <div class="not-found">

      <h1>
        Libro no encontrado
      </h1>

      <a href="index.html">
        Volver a los libros
      </a>

    </div>

  `;
}
