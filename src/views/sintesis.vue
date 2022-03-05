<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .cajon.color-acento-botones.p-4.mt-5
      .row.justify-content-center.align-items-center
        .col-lg-7    
          h5(data-aos="fade-down") Síntesis
          p(data-aos="fade-down") Podemos decir que el proceso de edición de audio y video comprende las fases finales de la producción audiovisual, donde se integran todos los elementos desarrollados y se les da jerarquías y peso en cuanto a su importancia, desde la elección, preparación y edición de los sonidos que servirán de ambientación y efectos, pasando por la sincronización del sonido con las imágenes, para ajustarlas a la producción y crear el cabezote de presentación, para finalmente realizar los ajustes necesarios en la corrección de color y preparar el archivo para su posterior exportación. 
        .col-lg-5 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img72.svg', alt='')
    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-3.p-0
        h5.mb-0.ps-5.title-color-red.p-3.text-white Mapa conceptual
    .bg-img-12.mt-5
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img70.svg', alt='')


</template>

<script>
export default {
  name: 'Sintesis',
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
