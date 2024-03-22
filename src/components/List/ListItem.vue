<template>
  <div class="list-item" v-if="city.points.length > 0">
    <div class="list-item__header">
      {{ city.name }}
    </div>
    <div class="list-item__content">
      <div v-for="point in city.points" class="list-item__item" :key="point.name">
        <PointInfo :point="point" />
      </div>
    </div>
  </div>
</template>

<script>
import PointInfo from '@/components/PointInfo.vue'
export default {
  components: {
    PointInfo
  },
  props: {
    city: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.list-item {
  padding: 28px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.05);
}

.list-item__header {
  font-size: 17px;
  font-weight: bold;
}

.list-item__item {
  padding: 28px 0 10px;
}
</style>
