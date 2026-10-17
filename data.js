const BOOKS = [
  {
    id: "book-1",
    author: "Carles Esteban",
    title: "Desconocidos",
    cover: "/assets/covers/book-1.png",
    theme: "#efe4e4",
    description: "Un profesor de Historia de arte que finalmente se reconcilia con la pintura abstracta gracias a un pintor muy peculiar; dos personas que a través de la filosofía han descubierto una excepcional manera de amar; el vuelco inesperado que da el elaborado interrogatorio de un inspector; o dos escritores que han recibido el encargo de escribir, mano a mano, un thriller donde los personajes tienen un papel decisivo, son algunos de los relatos de Desconocidos, que en la misma línea que los dos trabajos anteriores del autor –La mujer de sus sueños y El espíritu de las ilusiones ocultas– nos sumergen desde la cotidianeidad en un mundo irreal, absurdo e insólito a través de historias que gravitan entre lo sorprendente, lo desconcertante y lo conmovedor.",
    amazon: "https://www.amazon.es/Desconocidos-Carlos-Esteban/dp/B0H9HTM8BR/ref=mp_s_a_1_1?crid=3M5COF67LVJXR&dib=eyJ2IjoiMSJ9.fKmUagLvFzdD8M4pWX3XrFOh6DqyI4CVoh7v1vJaUB14ZoQ_2QuH25baMnIGLWThQ7dM8fvg2qw3dnRcA_kgbYx_IYHsVnOTEJaE_kIirH933itipwVnHr_Uz9U2D5ofUWRXNhsmE4vSaLryKuZk5N247QjnfBTyUhHHxLiYltzk-QONysu_gbaObSMHD5RYyw162k4vY84yc46e6leUww.sjVL8MSooXM6XNUHBslQ0WVz0xLhpEtF_o-JFivz2sc&dib_tag=se&keywords=carlos+esteban&qid=1790324829&sprefix=carlos+esteban%2Caps%2C79&sr=8-1",
    texts: [
      {
        id: "text-1",
        title: "Leer páginas al azar",
        content: "",
        pdf: "/pdfs/Texto%201%20%28leer%20al%20azar%20para%20DESCONOCIDOS%29.pdf"
      },
      {
        id: "text-2",
        title: "Leer un capítulo",
        content: "",
        pdf: "/pdfs/Texto%202%20%28leer%20un%20cap%C3%ADtulo%29%20DESCONOCIDOS.pdf"
      }
    ]
  },
  {
    id: "book-2",
    author: "Carles Esteban",
    title: "La mujer de sus sueños",
    cover: "/assets/covers/book-2.png",
    theme: "#dceef4",
    description: "La mujer de sus sueños es un libro de relatos de carácter extraordinario con los que el autor pretende introducir al lector en situaciones inverosímiles y sorprenderlo con un final tan insólito como inesperado. En La mujer de sus sueños, relato que da título al libro, el personaje principal sueña reiteradamente con una mujer, de manera que los sueños se encadenan sin solución de continuidad, como si fueran episodios de una misma narración. Pasado un tiempo, en el transcurso de una visita a una exposición de pintura descubre el rostro de una mujer que coincide exactamente con el de la mujer de sus sueños. Ella, al sentirse observada, se vuelve hacia él y se dirige a su encuentro para confesarle algo que él nunca se hubiera imaginado.",
    amazon: "https://www.amazon.es/mujer-sus-sue%C3%B1os-Carles-Esteban/dp/B0BQY8V94C/ref=mp_s_a_1_2?crid=3M5COF67LVJXR&dib=eyJ2IjoiMSJ9.fKmUagLvFzdD8M4pWX3XrFOh6DqyI4CVoh7v1vJaUB14ZoQ_2QuH25baMnIGLWThQ7dM8fvg2qw3dnRcA_kgbYx_IYHsVnOTEJaE_kIirH933itipwVnHr_Uz9U2D5ofUWRXNhsmE4vSaLryKuZk5N247QjnfBTyUhHHxLiYltzk-QONysu_gbaObSMHD5RYyw162k4vY84yc46e6leUww.sjVL8MSooXM6XNUHBslQ0WVz0xLhpEtF_o-JFivz2sc&dib_tag=se&keywords=carlos+esteban&qid=1790324829&sprefix=carlos+esteban%2Caps%2C79&sr=8-2",
    texts: [
      {
        id: "text-1",
        title: "Leer páginas al azar",
        content: "",
        pdf: "/pdfs/Texto%201%20%28leer%20al%20azar%29%2C%20para%20LA%20MUJER%20DE%20SUS%20SUE%C3%91OS.pdf"
      },
      {
        id: "text-2",
        title: "Leer un capítulo",
        content: "",
        pdf: "/pdfs/Texto%202%20%28leer%20un%20cap%C3%ADtulo%29%20LA%20MUJER%20DE%20SUS%20SUE%C3%91OS.pdf"
      }
    ]
  },
  {
    id: "book-3",
    author: "Carles Esteban",
    title: "El espíritu de las ilusiones ocultas",
    cover: "/assets/covers/book-3.png",
    theme: "#eeeeee",
    description: "¿Dónde se halla la frontera que separa ilusión y realidad? Con su segundo libro de relatos, El espíritu de las ilusiones ocultas, el autor nos invita e entrar, al igual que hizo con La mujer de sus sueños, en un espacio acotado por lo insólito, lo extraordinario, donde los sueños, la “locura”, o lo sobrenatural son el telón de fondo de historias increíbles, pero no por eso inverosímiles. Este es el escenario por el que transitan los personajes de estos cuentos inauditos, donde a veces el azar, los malentendidos y los sobrentendidos, parecen conjurarse para hacerles vivir experiencias que difícilmente podrán olvidar",
    amazon: "https://www.amazon.es/El-esp%C3%ADritu-las-ilusiones-ocultas/dp/B0CSX4D2V3/ref=mp_s_a_1_3?crid=3M5COF67LVJXR&dib=eyJ2IjoiMSJ9.fKmUagLvFzdD8M4pWX3XrFOh6DqyI4CVoh7v1vJaUB14ZoQ_2QuH25baMnIGLWThQ7dM8fvg2qw3dnRcA_kgbYx_IYHsVnOTEJaE_kIirH933itipwVnHr_Uz9U2D5ofUWRXNhsmE4vSaLryKuZk5N247QjnfBTyUhHHxLiYltzk-QONysu_gbaObSMHD5RYyw162k4vY84yc46e6leUww.sjVL8MSooXM6XNUHBslQ0WVz0xLhpEtF_o-JFivz2sc&dib_tag=se&keywords=carlos+esteban&qid=1790324829&sprefix=carlos+esteban%2Caps%2C79&sr=8-3",
    texts: [
      {
        id: "text-1",
        title: "Leer páginas al azar",
        content: "",
        pdf: "/pdfs/Texto%201%20%28leer%20al%20azar%29%20para%20EL%20ESP%C3%8DRITU%20DE%20LAS....pdf"
      },
      {
        id: "text-2",
        title: "Leer un capítulo",
        content: "",
        pdf: "/pdfs/Texto%202%20%28leer%20un%20cap%C3%ADtulo%29%20EL%20ESP%C3%8DRITU%20DE%20LAS%20ILUSIONES%20OCULTAS.pdf"
      }
    ]
  }
];
