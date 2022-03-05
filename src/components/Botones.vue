<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-center
    .col-md-5.mb-4.mb-md-0
      .botones
        img.img-a.img-t(src='@/assets/curso/temas/img6.svg', alt='caracteristicas de los sonidos')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-6.col-lg-6.tarjeta-white.p-3(:style="{'z-index':'2'}")      
      .tarjeta.color-primario.p-4(v-if="selected === 0")
        .h5 Duración y envolvente:
        .hr-1.mb-2
        p Se refiere al tiempo que tarda en extinguirse completamente un sonido hasta llegar al silencio total, y sobre cómo éste crece y decrece con el tiempo.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.jpg', alt='')            

      .tarjeta.color-secundario.p-4(v-else-if="selected === 1")
        .h5 Frecuencia:
        .hr-2.mb-2 
        p Se refiere al número de vibraciones que produce un cuerpo por segundo y que afecta el tono,  pues a mayor frecuencia (mayor número de oscilaciones) más agudo será el sonido, mientras que a menor frecuencia será más grave.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.jpg', alt='')             

      .tarjeta.color-acento-botones.p-4(v-else-if="selected === 2")
        .h5 Timbre:
        .hr-4.mb-2   
        p Nos permite diferenciar un  sonido de otro, por ejemplo, la voz de un niño de la de un adulto, o el sonido de un violín a la de un piano, o el canto de un pájaro de la alarma de un auto.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.jpg', alt='')          

      .tarjeta.color-acento-contenido.p-4(v-else-if="selected === 3")   
        .h5 Amplitud:
        .hr-3.mb-2 
        p Es la cantidad de energía (intensidad) que posee una onda sonora; entre más energía tenga, su volumen será más alto y viceversa, a menor cantidad de energía o intensidad se escuchara más bajo, indicando si se trata de un sonido fuerte o débil.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.svg', alt='')  

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        img: require('@/assets/curso/temas/1.svg'),
        pos_x: '1%',
        pos_y: '1%',
        size: '13%',
      },
      {
        img: require('@/assets/curso/temas/2.svg'),
        pos_x: '86%',
        pos_y: '1%',
        size: '13%',
      },

      {
        img: require('@/assets/curso/temas/3.svg'),
        pos_x: '1%',
        pos_y: '85%',
        size: '13%',
      },
      {
        img: require('@/assets/curso/temas/4.svg'),
        pos_x: '86%',
        pos_y: '85%',
        size: '13%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative

.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out

@media (max-width: $bp-max-md)
  .tarjeta-botones:before
    display: none
</style>
