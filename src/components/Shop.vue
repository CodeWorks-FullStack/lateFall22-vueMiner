<template>
  <section class="row px-3 bg-warning">
    <div v-for="item in upgrades" class="col-md-6 p-2 rounded elevation-2 text-center"
      :class="{ 'bg-primary': item.type == 'click', 'bg-warning': item.type == 'auto' }">
      <!-- it only uses on of these classes if their condition is true -->

      <!-- NOTE {{}} is for interpolation in-BETWEEN tags 'content' -->
      <h4>{{ item.name }}</h4>
      <!-- disabled is only included if it's condition is true -->
      <button :disabled="(vuePoints <= item.price)" class="btn btn-light" @click="buyUpgrade(item.id)">buy {{
          item.price
      }} - {{ item.multiplier }} on {{
    item.type
}}</button>
      <div>{{ item.quantity }}</div>
    </div>
  </section>
</template>




<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { pointsService } from '../services/pointsService.js';
export default {
  setup() {
    return {
      upgrades: computed(() => AppState.upgrades),
      vuePoints: computed(() => AppState.vuePoints),
      buyUpgrade(itemId) {
        pointsService.buyUpgrade(itemId)
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
