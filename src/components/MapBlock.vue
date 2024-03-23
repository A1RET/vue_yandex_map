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
    <yandex-map-default-features-layer />
    <yandex-map-default-scheme-layer :settings="{ customization }" />
    <yandex-map-marker
      v-for="point in points"
      :key="point.name"
      :settings="{ coordinates: point.coordinates }"
    >
      {{ point.name }}
    </yandex-map-marker>
  </yandex-map>
</template>

<script>
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  getLocationFromBounds,
  getBoundsFromCoords
} from 'vue-yandex-maps'

export default {
  components: {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultSchemeLayer,
    YandexMapMarker
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
  },
  methods: {
    selectPoint(point) {
      this.$emit('select-point', point)
    },
    setLocation() {
      if (this.map && this.points.length > 0) {
        const coordinates = []
        this.points.forEach((point) => coordinates.push(point.coordinates))

        getLocationFromBounds({
          bounds: getBoundsFromCoords(coordinates),
          map: this.map,
          roundZoom: true,
          comfortZoomLevel: true
        }).then((res) => {
          this.location = res
        })
      }
    }
  },
  watch: {
    points(newPoints, oldPoints) {
      if (JSON.stringify(newPoints) !== JSON.stringify(oldPoints)) {
        this.setLocation()
      }
    },
    map(_, old) {
      if (old === null) {
        this.setLocation()
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
