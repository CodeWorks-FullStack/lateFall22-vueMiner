<template>
  <div class="home bg-dark flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1>vuePoints: {{ vuePoints }}</h1>
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        alt="CodeWorks Logo" @click="mineVuePoints">
      <!-- v-on:click is the old version of @click -->
    </div>
  </div>
  <section class="container">
    <Shop />
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { AppState } from '../AppState.js'
import { pointsService } from '../services/pointsService.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    // NOTE things like variables and functions can be created in or out of the return, but only things in the return are accessible by the template
    // function mineVuePoints() {
    //   pointsService.mineVuePoints()
    // }
    // const vuePoints = computed(() => AppState.vuePoints)
    onMounted(() => {
      // NOTE onMounted is the vue lifecycle hook that fires when a component is loaded to the DOM
      pointsService.startPointInterval()
    })
    return {
      // first rule of vue, for the template to access data in the script is must be in the return
      // second rule, for reactivity to take place, you must use vue's reactive stuff
      // vuePoints: ref(0) data established here should only be for data that exists exclusively here
      vuePoints: computed(() => AppState.vuePoints),
      // mineVuePoints,
      mineVuePoints() {
        pointsService.mineVuePoints()
      },
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
