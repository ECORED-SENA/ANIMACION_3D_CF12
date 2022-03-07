<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-img-1
      .row.justify-content-center.align-items-center.py-5
        .col-lg-10 
          .cajon-b.color-primario.p-3.pt-5         
            p(data-aos="fade-down") En esta unidad vamos a comprender las nociones básicas de audio, en el que entendemos el sonido, como pieza fundamental del audiovisual, y algunas características de los sonidos. Además, crearemos un cabezote con la técnica de Motion Graphics, acompañado de un audio. Así mismo veremos como editar un audio y video directamente en Blender, y por último la realización de la corrección de color del producto final. Por lo anterior se invita a observar el siguiente video.
          
          figure.my-5.pb-5(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/fSbIAd3jxIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.cajon-b::before
  top: 50%
  left: 60%
  right: 0
  bottom: 0
</style>
