<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Motion Graphics</i> y cabezote

    .bg-img-2
      .row.justify-content-center.align-items-center
        .col-lg-10(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img48.svg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0(data-aos="fade-down") A continuación, veremos cómo crear nuestros propios diseños de formas directamente en <i>Blender</i>, y estos cómo los podemos animar, integrándose con sonidos y videos, para la realización de un cabezote sencillo pero llamativo. A continuación, puedes ver el resultado final del producto audiovisual que realizaremos. En el siguiente video puedes observar el resultado final del Cabezote que se realizará como ejemplo. 

          figure.my-5.pb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/X-HAyBJi1MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

    Separador 
    #t_2_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.1 #[i Motion Graphics]   
    .bg-img-6
      .row.justify-content-center.align-items-center.mt-5.pt-5
        .col-lg-6 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img50.png', alt='') 
        .col-lg-6
          p(data-aos="fade-down") Los #[i Motion Graphics] o grafismos en movimiento, es un estilo de animación que combina múltiples disciplinas como el diseño gráfico, la fotografía, la ilustración, el 3D, VFX, música, video, etc.; con el fin de añadir movimiento a elementos estáticos y producir una composición dinámica. Estos elementos pueden ser fotografías, fotos, frases, imágenes, logos. Figuras geométricas básicas como cuadrados, triángulos, círculos, líneas; se les puede cambiar el tamaño, color, o transformarlos en otro elemento modificando su forma (<i>morphing</i>) etc., teniendo cuidado con las transiciones, de manera que el movimiento se vea coordinado y fluido. Para ello, es importante tener en cuenta algunos de los principios de la animación como el <i>squash & stretch</i>, el <i>timing</i>, la anticipación y demás principios necesarios para lograr una animación más natural; que capte la atención del espectador y le permita percibir adecuadamente el mensaje que se quiere transmitir.

          p(data-aos="fade-down") Los elementos básicos para el diseño y producción de un #[i motion graphics] son:  

      .bg-img-7
        LineaTiempoD.color-secundario
          .row.justify-content-center.align-items-center(numero="1" titulo="<i>Líneas</i>")
            .col-lg-12.pb-4
              p Muchos de los objetos usados para realizar un #[i motion graphics] se construyen sobre componentes lineales, generalmente direccionales, que sugieren un movimiento natural, dirigiendo la vista y la atención de los espectadores a lo largo de la pieza. 
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5     
                  .titulo-sexto.color-secundario
                    h5 Figura 6.
                    span Línea                 
                  img.img-a.img-t(src='@/assets/curso/temas/img51.png', alt='') 

          .row.justify-content-center.align-items-center(numero="2" titulo="<i>Forma</i>")
            .col-lg-12.pb-4
              p Se trata de la dimensión o área delimitada del elemento o figura geométrica con la que estemos trabajando, la cual podemos alterar realizándole diferentes variaciones isotópicas modificando su grosor y relleno
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5     
                  .titulo-sexto.color-secundario
                    h5 Figura 7.
                    span Forma                 
                  img.img-a.img-t(src='@/assets/curso/temas/img53.png', alt='')                 
              p.mt-5 En el siguiente video se realizará el diseño de formas que vamos a utilizar para el proceso de #[i Motion Graphics.]
              figure.mt-5
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/z85Urth3gj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

          .row.justify-content-center.align-items-center(numero="3" titulo="<i>Valores</i>")
            .col-lg-12.pb-4
              p Los valores son determinados por el tipo de luz, por ello podemos ver un valor oscuro y uno claro, creando entre ellos un nivel de iluminación entre 0 donde es negro totalmente y 1 es un valor de iluminacion total.
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5     
                  .titulo-sexto.color-secundario
                    h5 Figura 8.
                    span Valores                 
                  img.img-a.img-t(src='@/assets/curso/temas/img54.png', alt='') 

          .row.justify-content-center.align-items-center(numero="4" titulo="<i>Color</i>")
            .col-lg-12.pb-4
              p El color es fundamental para darle vida a los diseños realizados, en el que hay que tener en cuenta los diferentes tonos y valores del color, lo que nos permite resaltar y enfatizar algún elemento, si quisiéramos hacerlo, podemos manejar tonalidades grises, pero el elemento que quedamos destacar le asignamos un tono totalmente pigmentado.
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5     
                  .titulo-sexto.color-secundario
                    h5 Figura 9.
                    span Color                 
                  img.img-a.img-t(src='@/assets/curso/temas/img55.png', alt='')
              p.mt-5 En el siguiente video podemos observar, cómo podemos realizar en Blender la inclusión de color para nuestros elementos previamente realizados.
              figure.mt-5
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/OGY4-c_d4Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                    

          .row.justify-content-center.align-items-center(numero="5" titulo="<i>Textura</i>")
            .col-lg-12.pb-4
              p Las texturas transmiten sensaciones táctiles al espectador, por lo cual es conveniente pensar en cómo y cuándo usar elementos con curvas y superficies suaves y cuándo es mejor utilizar elementos angulares o dentados y con superficies rugosas dependiendo de lo que se quiera transmitir, también es importante tener cierta consistencia en la textura o de lo contrario, el trabajo puede generar demasiado ruido visual haciendo que se vea sobrecargado y pesado. 
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5     
                  .titulo-sexto.color-secundario
                    h5 Figura 10.
                    span Textura                 
                  img.img-a.img-t(src='@/assets/curso/temas/img56.png', alt='') 

          .row.justify-content-center.align-items-center(numero="6" titulo="<i>Espacio</i>")
            .col-lg-12.pb-4
              p Hace referencia al lugar que va a ocupar cada uno de nuestros elementos; se divide básicamente en dos, espacio negativo y espacio positivo, lo cual es útil para enmarcar nuestra pieza o composición y establecer qué detalles son importantes y cuáles no lo son tanto; pues en el espacio positivo ubicamos aquello que deseamos resaltar y que consideramos que tiene mayor importancia.
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-5      
                  .titulo-sexto.color-secundario
                    h5 Figura 11.
                    span Espacio                 
                  img.img-a.img-t(src='@/assets/curso/temas/img57.png', alt='') 

    Separador 
    #t_2_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.2  Cabezote
    .bg-img-8(data-aos="fade-left")  
      img.img-a.img-t.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img59.png', alt='') 
      p(data-aos="fade-down").mt-5 Es una apertura cuyo objetivo es presentar una pequeña introducción al espectador de lo que viene a continuación, sirviendo de antelación a lo que se desea dar a conocer ya sea que se trate de la presentación de una persona o empresa, la promoción de un audiovisual, el reconocimiento de productos o personajes, entre otros. Para ello se hace uso de la animación y un diseño audiovisual, partiendo de las características puntuales del objeto en cuestión que permitan el desarrollo de un diseño conceptual enfocado en la individualidad y exclusividad, con el fin de presentar asertivamente aquello que se quiere comunicar de manera que logre captar la atención e impactar positivamente en el público.
    .bg-img-8(data-aos="fade-left")  
      .row.justify-content-center.align-items-center.mt-5.py-5
        .col-lg-12      
          SlyderA(data-aos="fade-down") 
            .row.justify-content-center.align-items-center
              .col-lg-10
                p A continuación, veremos una serie de videos, para culminar con la realización de nuestro cabezote final. Prepararemos el escenario, ubicando la cámara y creando guías de composición, Animaremos los gráficos previamente realizados en el video <b>diseño de formas</b>  y por último editaremos el cabezote final. A continuación, veremos un tutorial de cómo organizar nuestro espacio de trabajo para diseñar nuestro cabezote final. 
                figure.mt-5
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/NTQqp1RpEKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

            .row.justify-content-center.align-items-center
              .col-lg-10
                p A continuación, observarás como animar los elementos dentro de <i>Blender</i>, para la realización del #[i Motion Graphics] que hace parte de nuestro cabezote final.
                figure.mt-5
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/twZSbaWenpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

            .row.justify-content-center.align-items-center
              .col-lg-10
                p Por último, editaremos el cabezote realizado, uniéndolo con otros elementos, como un video en #[b Mp4], y el ajuste del sonido final.
                figure.mt-5
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/bZCKDbHlPSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    Separador 

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
