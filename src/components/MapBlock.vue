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
    <yandex-map-default-scheme-layer :settings="{ customization }" />
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
      },
      customization: shallowRef([
        {
          tags: {
            any: ['water']
          },
          elements: 'geometry',
          stylers: [
            {
              color: '#BEBEBE'
            }
          ]
        },
        {
          tags: {
            any: ['landscape', 'admin', 'land', 'transit']
          },
          elements: 'geometry',
          stylers: [
            {
              color: '#F5F5F5'
            }
          ]
        },
        {
          tags: {
            any: ['road']
          },
          elements: 'geometry',
          stylers: [
            {
              color: '#AEADAD'
            }
          ]
        },
        {
          tags: {
            any: ['building']
          },
          elements: 'geometry',
          stylers: [
            {
              color: '#757474'
            }
          ]
        }
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  flex-grow: 1;
}
</style>
