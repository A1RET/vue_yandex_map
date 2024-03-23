<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: location
    }"
    width="100%"
    height="auto"
    class="map"
  >
    <yandex-map-default-scheme-layer />
  </yandex-map>
</template>

<script>
import { shallowRef } from 'vue'
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps'

export default {
  components: {
    YandexMap,
    YandexMapDefaultSchemeLayer
  },
  props: {
    points: {
      type: Array,
      default() {
        return []
      }
    }
  },
  emits: ['select-point'],
  data() {
    return {
      map: shallowRef(null),
      location: {
        center: [37.617644, 55.755819],
        zoom: 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  flex-grow: 1;
}
</style>
