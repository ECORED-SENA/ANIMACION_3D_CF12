<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Sonido
      
    .bg-img-2
      .row.justify-content-center.align-items-center.py-5
        .col-lg-10     
          .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-left") 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                h4.mb-0(data-aos="fade-down")  Según SAMUEL GUERRA (2021) <br>El sonido crea ambiente
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  i.fas.fa-quote-left.color-quote
                  p(data-aos="fade-down").px-3 Es fundamental cuadrar las imágenes en un panorama sonoro adecuado que incite a continuar saboreando el producto creado. El ambiente de la película provoca interacción con el público por ello es importante que el mismo sea perfecto, que estén equilibrados todos los elementos incluyendo el sonido. 
                  .row.justify-content-end.align-items-center
                    .col-lg-1                 
                       i.fas.fa-quote-right.color-quote

      .row.justify-content-end.align-items-center.row-grad-1.p-5(data-aos="slide-left")
        .col-lg-7
          p(data-aos="fade-down").mb-0 Todo aquello que está en movimiento, genera diferentes vibraciones u ondas sonoras (producción de sonido) que se desplazan a través de un medio que puede ser sólido, líquido o gaseoso, por ejemplo, el aire, el agua, o un metal (capacidad de propagación); las cuales, son captadas por nuestros oídos (órgano perceptor) y convertidas en impulsos eléctricos que nuestro cerebro interpreta como diversos sonidos que nos generan gran variedad de sensaciones y emociones. Algunas de sus principales características son:                      
      .row.justify-content-start.align-items-center
        .col-lg-5.img-top-1.d-none.d-lg-block  
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg',    alt='') 

    .botones-hover.mt-5
      Botones(data-aos="fade-down")

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-acento-contenido.p-5
          p(data-aos="fade-down")  A continuación, se presenta una figura que resume las cualidades del sonido.        
          .row.justify-content-center.align-items-center.mt-5
            .col-lg-5(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido
                h5 Figura 1.
                span Cualidades del sonido     
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img10.svg',alt='') 

    Separador 
    #t_1_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.1 Música en el cine 3D 

    .row.justify-content-start.align-items-center.row-grad-2.p-5
      .col-lg-7
        p(data-aos="fade-down")  La música en el cine 3D es en parte fundamental para efectos narrativos, que puede ser compuesta, arreglada o recopilada. La cual en sincronía va sujeta a cada momento del proyecto audiovisual.
        p(data-aos="fade-down")  La imagen a continuación es un ejemplo de la película animada <i>Toy Story</i> en la cual se puede ver la ambientación de la escena.                
    .row.justify-content-end.align-items-center
      .col-lg-5.img-top-2.d-none.d-lg-block 
        .row.justify-content-end.align-items-center.mt-5
          .col-lg-8(data-aos="fade-left")
            .titulo-sexto.color-secundario
              h5 Figura 2.
              span <i>Toy Story</i> en escena
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img11.png',    alt='')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down")       
          .col-lg-3.p-0.m-0.bg-card-row-color.d-none.d-lg-block  
            img.p-0.mx-0(src='@/assets/curso/temas/img12.svg', alt='')       
          .col-lg-6.bg-card-row-color
            h4.pt-4 Woody conoce a Buzz Lightyear <i>“Toy Story”</i>
            p(data-aos="fade-down") Para afianzar sus conocimientos e identificar la animación en 3D le invitamos a visitar el siguiente video de YouTube en la url.
            .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
              .col-lg-9        
                a.mb-3.anexo.bg-a-1(href="https://www.youtube.com/watch?v=nEDvRoEw1PQ" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link-1.svg")
                  .anexo__texto
                    p.text-a #[b.text-a Video]. Youtube fuente escena, Woody conoce a Buzz Lightyear <i>“Toy Story”</i>     
          .col-lg-3.p-0.m-0.bg-card-row-color.d-none.d-lg-block  
            img.p-0.mx-0(src='@/assets/curso/temas/img13.svg', alt='')  

    p(data-aos="fade-down").mt-5 La música entonces, es funcional, va de la mano con la imagen a la que acompaña contextualizando el proyecto, dotándolo de:
    .bg-img-3.p-5
      .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-left")
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-contenido.border-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img12.jpg')})`}")
                h3.text-center.p-flip_img.p-yellow Características físicas             
              .tarjeta-flip__contenido.p-3
                p Musicalizando el paso a paso de un personaje de animación como se hacía con Mickey Mouse o sonando una samba para acentuar gráficamente que los sucesos están ocurriendo en Brasil, o música barroca para acentuar los sucesos en una época temporal como el siglo XVI, así como también la recreación de eventos meteorológicos como lluvia, nieve brisa etc. 

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario.border-flip(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img13.jpg')})`}")
                h3.text-center.p-flip_img.p-yellow Características psicológicas              
              .tarjeta-flip__contenido.p-3.text-white
                p Generar el estado de ánimo de la escena, así como también enfatizar las emociones de los personajes en momentos determinados, a su vez generar estados de ánimo al espectador, informar al espectador de cosas que están sucediendo en la escena, pero no se ven, como pasos acercándose, predispone al espectador a momentos álgidos de euforia o miedo.

        .col-sm-6.col-xl-4.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-acento-contenido.border-flip(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img14.jpg')})`}")
                h3.text-center.p-flip_img.text-white Características técnicas               
              .tarjeta-flip__contenido.p-3
                p Sirve de conexión entre escenas, haciendo la transición entre ellas de manera fluida, genera continuidad en todo el proyecto audiovisual utilizando coherencia con sonidos que pueden repetirse y complementarse.   

      .row.justify-content-center.align-items-stretch.mt-3(data-aos="fade-left")
        .col-sm-6.col-xl-6.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario.border-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img15.jpg')})`}")
                h3.text-center.p-flip_img.text-white Ambientación sonora               
              .tarjeta-flip__contenido.p-3.text-white
                p Es la que sugiere el tipo de atmósfera que se debe manejar para cada escenario, por ejemplo, en el escenario de Silent Hill, en la imagen a continuación lo que se escucharía en dicho ambiente serían sonidos de alarma, al cambiar el mundo pesadilla, transmitiendo un aire de intranquilidad.

        .col-sm-6.col-xl-6.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-acento-contenido.border-flip(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img16.jpg')})`}")
                h3.text-center.p-flip_img.text-white Efectos de audio especiales               
              .tarjeta-flip__contenido.p-3
                p Brindan información importante al espectador ya sea a través del diálogo con otros personajes, o por la producción de algún sonido específico, por ejemplo, el sonido lejano de alguien pidiendo ayuda, los pesados pasos de un monstruo que se acerca, que, aun sin verlo, su sonido nos sugiere que se trata de algo de gran tamaño generandonos temor al imaginar con quien nos tendremos que enfrentar; es decir, mejoran la inmersión.                  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .cajon.color-primario.p-5.cajon-sh(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-0(data-aos="fade-down") Por ende, podemos decir que el sonido crea los ambientes, hacen que la atención se acentúe, enfatizando los momentos de la producción audiovisual, y así transmite sensaciones al espectador.
            .col-lg-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg',alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.jpg',alt='')
      .col-lg-7.my-2
        .cajon-b.color-secundario
          P(data-aos="fade-down") Uno de los elementos más importantes que se debe tener en cuenta al crear la atmósfera para un proyecto audiovisual es el sonido, ya que es el que apoya y le da fuerza a cada escena, ayudando a que el público se sienta inmerso dentro del mismo, brindando una experiencia más realista, a través de una buena calidad acústica, capaz de transmitir diferentes sensaciones y emociones ya sean de tristeza, alegría, temor, frustración, tranquilidad, entre otras, que enriquecen la experiencia
            br
            span El sonido se debe analizar desde tres elementos generales: la música o banda sonora, que es básicamente la que empodera la historia, le brinda diferentes estados de ánimo dependiendo del contexto de cada escena, y ayuda a marcar el ritmo del proyecto audiovisual.
            br
            br
            span Cada uno de estos debe ser acorde con los demás elementos que hacen parte de la atmósfera como: 

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-4.p-0
        p.mb-0.ps-5.title-color.p-3.text-white Tres elementos generales del sonido 
      .col-1.p-0.d-none.d-lg-block  
        img.img-t(src='@/assets/curso/temas/img20.svg',alt='')

    .row.justify-content-center.align-items-stretch.mt-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.tarjeta--boton.color-secundario.text-white--hover.c-br-card.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img21.svg', alt='Texto que describa la imagen')

          h5.text-center(data-aos="fade-down") La iluminación y la paleta de colores
          p.text-small(data-aos="fade-down") Influyen en la psique del jugador, por ejemplo, si se usan colores cálidos y una buena iluminación se pueden usar melodías y efectos de sonido más alegres y optimistas; mientras que si se usa una paleta de colores fríos y una iluminación más tenue se pueden usar sonidos y melodias relacionadas con el misticismo, la calma o la tensión, todo depende de lo que se quiera reflejar en escena.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0.tarjeta--boton.color-secundario.text-white--hover.c-br-card.p-5(data-aos="fade-down")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img22.svg', alt='Texto que describa la imagen')

          h5.text-center(data-aos="fade-down") El clima y los efectos atmosféricos
          p.text-small(data-aos="fade-down") Por ejemplo, si hay lluvia se usarán efectos que ésta golpeando el suelo y música de calma dependiendo del contexto en que se esté desarrollando la escena; la neblina se asocia con una melodía alusiva al misterio, o si hay rayos se usarán efectos de trueno y una musicalidad en concordancia con el tema del escenario.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0.tarjeta--boton.color-secundario.text-white--hover.c-br-card.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img23.svg', alt='Texto que describa la imagen')

          h5.text-center(data-aos="fade-down") Efectos visuales especiales
          p.text-small(data-aos="fade-down") Por ejemplo, si se trata de una batalla post apocalíptica con armas láser se usarán efectos especiales de como sonaría un disparo de rayos láser; o si se trata de una escena donde hay fuego es necesario reproducir el efecto chisporroteante del fuego al arder; o si se lanza algún hechizo o conjuro se debe usar un efecto místico o mágico. Estos efectos sonoros se deben utilizar teniendo en cuenta su duración e intensidad pues deben encajar perfectamente con los efectos visuales presentados en escena de manera que mantengan la atención del espectador logrando emocionar, desconcertar, asustar, etc.

    p.mt-5(data-aos="fade-down") Entonces, a la hora de elegir la banda sonora, los efectos de audio especiales y la ambientación sonora se debe tener en cuenta que encajen bien con el tema y con los elementos que conforman la atmósfera de cada escena del proyecto audiovisual, procurando que estos no interfieran entre sí, a través del uso correcto de las cualidades del sonido, por ejemplo, que la intensidad de la música de fondo no sea demasiado fuerte ya que opacaría los efectos sonoros utilizados en un mismo nivel pues no se podría oír lo que pasa alrededor, o que los efectos especiales de sonido sean demasiado largos y se mezclen con el diálogo de los personajes generando “ruido”, dificultando la diferenciación entre unos y otros.       

    Separador 
    #t_1_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.2  Formatos de sonido

    p(data-aos="fade-down") Los formatos de sonido son decodificadores que transmiten la señal junto al video, los más usados por la industria de los videojuegos son:
    .bg-img-3.p-5 
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          .tarjeta-avatar-b.mb-5(data-aos="fade-left")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/img24.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h5 Dolby Digital
                p.mb-0 Es el más utilizado a lo largo de la historia, gracias a que presenta mayor compatibilidad con un gran número de equipos, aunque se puede sufrir cierta pérdida en la calidad al comprimir el sonido. En los últimos años, ha venido trabajando con otros formatos Dolby Digital Plus, Dolby Digital TRUE HD, y Dolby ATOMS, que evitan comprimir el audio, conservando la fidelidad de los sonidos.     

          .tarjeta-avatar-b.mb-5(data-aos="fade-right")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/img25.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h5 Digital Sourround (DTS)
                p.mb-0 Es la competencia directa de Dolby Digital, se caracteriza por conservar un sonido fuerte y nítido, aunque al comprimirse también se presenta una pérdida en la calidad, pero menor que la presentada por Dolby Digital, y al igual que esta ha venido trabajando en su formato DTS – HD sin compresión con el fin de conservar la alta definición del sonido.                 

      .row.justify-content-center.align-items-center
        .col-lg-10
          .cajon.color-primario.p-5.cajon-sh(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-9
                p.mb-0(data-aos="fade-down") Adicionalmente, se utilizan otros formatos de archivo sin compresión en la programación de videojuegos como el #[b #[i WAV y AIFF]]; que son similares, aunque tienen ciertas diferencias de encapsulado. Mientras que el formato de archivo con compresión más utilizado en la programación de videojuegos es el #[b #[i MP3]]; y aunque el #[b #[i AAC]] de Apple y el #[b #[i WMA]] de Microsoft ofrecen versiones mejoradas al #[i #[b MP3]], en el mundo de la programación para videojuegos no se suelen usar debido a su falta de compatibilidad. 
              .col-lg-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg',alt='')

          .tarjeta-avatar-b.mt-5(data-aos="fade-left")
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/img27.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h5 Foley
                p.mb-0 Su origen se da en 1927 gracias a Jack Foley quien desarrolló esta técnica, para la película #[i ShowBoat] realizando para ella efectos de sonido en tiempo real. 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-stretch.my-5(data-aos="fade-down")       
          .col-lg-3.p-0.m-0.bg-card-row-color.d-none.d-lg-block  
            img.p-0.mx-0(src='@/assets/curso/temas/img12.svg', alt='')       
          .col-lg-6.bg-card-row-color
            h4.pt-4 #[i Show Boat-Film] 1936- #[i Universal]
            p(data-aos="fade-down") Película donde se utiliza el formato Foley utilizando efectos de sonido en tiempo real. 
            .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
              .col-lg-9        
                a.mb-3.anexo.bg-a-1(href="https://www.youtube.com/watch?v=CypQYjF1cxg" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link-1.svg")
                  .anexo__texto
                    p.text-a #[b.text-a Video]. Youtube fuente #[i Show Boat-Film] 1936- #[i Universal]    
          .col-lg-3.p-0.m-0.bg-card-row-color.d-none.d-lg-block  
            img.p-0.mx-0(src='@/assets/curso/temas/img13.svg', alt='') 

      .row.justify-content-start.align-items-center.row-grad-4.p-4(data-aos="slide-left")
        .col-lg-6
          p(data-aos="fade-down") son aquellos sonidos, que vienen a representar los sonidos que generan las cosas cotidianas, como pasos, sonido de cosas cayéndose, ráfagas de viento, vidrios rompiéndose, el choque de elementos, el crujir de la leña en el fuego, el sonido generado por una puerta al cerrarse, entre otros, que sea dicho de paso, ayudan a la inmersión de cualquier proyecto audiovisual, dotándolo de realismo y cierto ritmo agregándole en la postproducción de la misma.

          p(data-aos="fade-down").mb-0 Los sonidos Foley pueden conseguirse desde muchas fuentes, diferentes tipos de material, pisos, líquidos etc. Realizándose pruebas para conseguir el sonido ideal para cada situación que lo amerite, hay algunos tips que se utilizan frecuentemente para generar sonidos específicos, entre los cuales podemos destacar:                     
      .row.justify-content-end.align-items-center
        .col-lg-6.img-top-3.d-none.d-lg-block  
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img28.png',    alt='') 

    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Sillas viejas" :icono="require('@/assets/curso/temas/img29.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 Sillas viejas
            p Se crean sonidos crujientes, para los cuales se tiene control de la intensidad y de la duración.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg',alt='')

      .py-4.py-md-5(titulo="Fracturas" :icono="require('@/assets/curso/temas/img30.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 Fracturas
            p Se suele emplear el crujir de un tallo de apio partiéndose.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg',alt='')  

      .py-4.py-md-5(titulo="Libros cayendo" :icono="require('@/assets/curso/temas/img31.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 Libros cayendo
            p Sobre una mesa, se utilizan golpes secos sobre el cuerpo.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img38.svg',alt='')     

      .py-4.py-md-5(titulo="El aire" :icono="require('@/assets/curso/temas/img32.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 El aire
            p Se utiliza el movimiento de una rama de trigo.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img39.svg',alt='')     

      .py-4.py-md-5(titulo="La lluvia" :icono="require('@/assets/curso/temas/img33.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 La Lluvia
            p Se emplea arroz sobre un recipiente y se deja resbalar.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img40.svg',alt='')     

      .py-4.py-md-5(titulo="Terrenos" :icono="require('@/assets/curso/temas/img34.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 Terrenos
            p Se utiliza nieve o fango seco.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img41.svg',alt='')     

      .py-4.py-md-5(titulo="Alas de un ave" :icono="require('@/assets/curso/temas/img35.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h3 Alas de un ave
            p Se utilizan guantes de aseo y se agitan rítmicamente.
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img42.svg',alt='')     

    p.mt-5(data-aos="fade-down") En la siguiente imagen podemos observar cómo es un espacio de trabajo para la creación de sonidos foley.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-secundario
          h5 Figura 3.
          span Foley, el sonido de las cosas
    .row.justify-content-center.align-items-center
      .col-lg-10        
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img43.jpg',alt='')
    .row.justify-content-center.align-items-center
      .col-lg-7        
        figcaption.figcaption Nota tomada de  
          a(href="https://informefracto.com/arte-ciencia/foley-el-sonido-de-las-cosas/" target="_blank") https://informefracto.com/arte-ciencia/foley-el-sonido-de-las-cosas/
            i.fas.fa-external-link-alt   

    Separador 
    #t_1_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.3 La postproducción de audio
    .bg-img-5
      .row.justify-content-center.align-items-center
        .col-lg-5
          p(data-aos="fade-down") Una vez listos los elementos auditivos, hay que proceder a sincronizarlos con la parte visual, para ello se utiliza un programa de edición que pueda manejar varias pistas dentro de la línea de tiempo junto a los clips de vídeo que vamos a editar. Luego se recortan las partes del clip que no se necesitan o que quedan sobrantes, anexar los audios de tipo Foley acompañando la secuencia a la que corresponde. Una vez tenemos posicionados los audios de diálogos, se procede a sumar los sonidos de fondo ambientales y de efectos especiales, para por último incluir las pistas musicales que se encargan de conectar escenas o darles ritmo a secuencias. En la siguiente imagen veremos un ejemplo de interfaz de usuario en la cual se editan sonidos foley y se integran a video.
        .col-lg-7
          .row.justify-content-center.align-items-cente.pt-5
            .col-lg-5(data-aos="fade-left")      
              .titulo-sexto.color-primario
                h5 Figura 4.
                span Edición de audio    
          img.img-top-4(data-aos="zoom-in")(src='@/assets/curso/temas/img45.png',alt='')  

      .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
        .col-lg-3.p-0
          p.mb-0.ps-5.title-color1.p-3.text-white Masterización
        .col-1.p-0.d-none.d-lg-block  
          img.img-t(src='@/assets/curso/temas/img46.svg',alt='')

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-7
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img47.png',alt='')            
        .col-lg-5
          p(data-aos="fade-down") La masterización en el audio es el último paso que se da, para poner en equilibrio todos los elementos que en ella se combinan, y a su vez, optimizarlos mediante la ecualización, compresión eliminación de ruido entre otros. De allí parten todas las copias de dicho audio finalizadas para diferentes formatos o plataformas, como también da consistencia y uniformidad entre las diferentes pistas que componen el producto, dotándolo de claridad y coherencia.

          p(data-aos="fade-down") La premisa principal es que masterizar dota de características al audio, para que suene de la mejor manera posible en cualquier plataforma, así las pistas del audio, si no estuviesen masterizadas, incurrirán a no tener correlación, básicamente no parecería que pertenecieran a un mismo proyecto.
      
    Separador 
</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema1',
  components: {
    Botones,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
