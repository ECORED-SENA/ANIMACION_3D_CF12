export default {
  global: {
    componenteFormativo: 'Edición de audio y video',
    descripcionCurso:
      'En este componente formativo se verán los conceptos de Sonido, Foley, Masterización, Sincronización y Edición de video para una producción de animación en 3D, así como también las herramientas en blender para crear el cabezote de entrada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Música en el cine 3D',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formatos de sonido',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Postproducción de audio',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Motion Graphics</i> y cabezote',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<i>Motion Graphics</i>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cabezote',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Edición de audio, video y corrección de color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sincronización',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Secuencias',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Titulación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Corrección de color ',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Blender Manual. (2021). Retrieved 11 September 2021, from ',
      link:
        'https://docs.blender.org/manual/en/latest/compositing/introduction.html#getting-started',
    },
    {
      referencia:
        'Fernandez Ruiz, M. F. (2014). La iluminación en el videojuego. Aproximación a las claves que guían las interacciones del jugador en los entornos tridimensionales lúdicos. Icono 14, 293 - 318.',
    },
    {
      referencia:
        'FOLEY ARTIST - Definición y sinónimos de foley artist en el diccionario inglés. (2021). ',
      link: 'https://educalingo.com/es/dic-en/foley-artist',
    },
    {
      referencia:
        'Franch, Albert T. (2014). Introducción al diseño de los videojuegos. Universitat Oberta de Catalunya (UOC).',
    },
    {
      referencia:
        'GUERRA, S. (2021). La importancia del sonido en una producción audiovisual. Retrieved 14 September',
    },
    {
      referencia:
        'Gutman, D., & Risso, H. (2013). El sonido: Conceptos básicos. Buenos Aires (Argentina): CePIA.',
    },
    {
      referencia:
        'imgvideogames.   (12   de   04   de   2016).	imgvideogame.wordpress.com. Obtenido de ',
      link:
        'https://imgvideogame.wordpress.com/2016/04/12/la-iluminacion-en-los-videojuegos/',
    },
    {
      referencia: 'LANDR (2021). Retrieved 14 September 2021, from ',
      link:
        'https://www.landr.com/es/que-es-la- masterizacion?irclickid=wzxwJ7xnpxyIRI- 1X0XSAUFUUkBQAHU%3AdzAlRE0&utm_campaign=affiliate&utm_source=adgoal%20Gm bH&utm_medium=cpc&irgwc=1',
    },
    {
      referencia:
        'Labrador, E. (2020). El uso del color en los videojuegos. Sevilla (España): Héroes de Papel.',
    },
    {
      referencia:
        'León Gutiérrez, G. D., & Acero Ortega, H. (2020). Fundamentos de sonido: conociendo el sonido y sus aplicaciones. Catálogo Editorial, 1(3). Recuperado a partir de ',
      link:
        'https://journal.poligran.edu.co/index.php/libros/article/view/2270',
    },
    {
      referencia:
        'Studio, P. (2021). | Levector. Retrieved 14 September 2021, from ',
      link:
        'https://levector.com/post/7eQBNmzvkO2Gxkoy7G9HnX/foley-arte-crear-sonidos-especiales- para-cine',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'Es la cantidad de energía (intensidad) que posee una onda sonora.',
    },
    {
      termino: 'Cabezote',
      significado:
        'Es una apertura cuyo objetivo es presentar una pequeña introducción al espectador de lo que viene a continuación.',
    },
    {
      termino: 'Decibel',
      significado:
        'Es la unidad de medición en cuanto a la intensidad que tiene un sonido.',
    },
    {
      termino: 'Foley',
      significado:
        'Son aquellos ecos, que vienen a representar los sonidos que generan las cosas cotidianas, como pasos, sonido de cosas etc.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Se refiere al número de vibraciones que produce un cuerpo por segundo y que afecta el tono.',
    },
    {
      termino: 'Masterización',
      significado:
        'Equilibrar todos los elementos de audio, y a su vez, optimizarlos mediante la ecualización, compresión eliminación de ruido entre otros.',
    },
    {
      termino: '<em>Motion Graphics</em>',
      significado:
        'Es un estilo de animación que combina múltiples disciplinas como el diseño gráfico, la fotografía, la ilustración, el 3D, VFX, música, video, etc.; con el fin de añadir movimiento a elementos estáticos y producir una composición dinámica.',
    },
  ],
  complementario: [
    {
      texto: 'Cannan (2020) 2D Motion Graphics [Futurebass.',
      tipo: 'Video',
      link: 'https://vimeo.com/395388043',
    },
    {
      texto: 'ESPN (2021) (Fantasy Football TV Commercial, Big + Wig. ',
      tipo: 'Video',
      link: 'https://www.ispot.tv/ad/Oe43/espn-fantasy-football-big-wig',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Andrés Gómez Pico',
        cargo: 'Experto Temático',
        centro: 'Centro	de Servicios	y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto Temático',
        centro: 'Centro	de Servicios	y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Velasquez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
