<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: currentLocation
    }"
    width="100%"
    height="auto"
    class="map"
  >
    <yandex-map-default-features-layer />
    <yandex-map-default-scheme-layer :settings="{ customization }" />
    <yandex-map-clusterer zoom-on-cluster-click :key="JSON.stringify(points)">
      <yandex-map-marker
        v-for="point in points"
        :key="point.name"
        :settings="{ coordinates: point.coordinates }"
      >
        <div
          class="marker"
          :class="{ active: point.name === currentPoint.name }"
          @click="selectPoint(point)"
        ></div>
        <div class="marker-popup" v-if="point === currentPoint">
          <span class="marker-popup-close" @click="selectPoint({})">&times;</span>
          <point-info :point="point" :class="'inverse'" />
        </div>
      </yandex-map-marker>
      <template #cluster="{ length }">
        <div class="cluster">
          {{ length }}
        </div>
      </template>
    </yandex-map-clusterer>
  </yandex-map>
</template>

<script>
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  YandexMapClusterer,
  getLocationFromBounds,
  getBoundsFromCoords
} from 'vue-yandex-maps'

import PointInfo from './PointInfo.vue'

export default {
  components: {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultSchemeLayer,
    YandexMapMarker,
    YandexMapClusterer,
    PointInfo
  },
  props: {
    points: {
      type: Array,
      default() {
        return []
      }
    },
    currentPoint: {
      type: Object
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
  computed: {
    currentLocation() {
      let location = this.location

      if (this.currentPoint.coordinates) {
        this.map.setLocation({
          center: this.currentPoint.coordinates,
          zoom: 13
        })
      }

      return location
    }
  },
  methods: {
    selectPoint(point) {
      this.$emit('select-point', point)
    },
    async setLocation() {
      if (this.map && this.points.length > 0) {
        const coordinates = []
        this.points.forEach((point) => coordinates.push(point.coordinates))

        this.map.setLocation({
          ...(await getLocationFromBounds({
            bounds: getBoundsFromCoords(coordinates),
            map: this.map,
            roundZoom: true,
            comfortZoomLevel: true
          })),
          duration: 300
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

.marker,
.cluster {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: $primary-color;
  border: 2px solid $white-color;
  cursor: pointer;

  &.active {
    &:after {
      content: '';
      position: absolute;
      top: -1px;
      display: block;
      border: 12px solid transparent;
      border-top-color: $primary-color;
      border-bottom: none;
    }
  }
}

.marker-popup {
  color: $white-color;
  white-space: nowrap;
  padding: 20px 100px 20px 30px;
  background-color: $primary-color;
  transform: translate(-25px, calc(-100% - 24px));
}

.marker-popup-close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.cluster {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white-color;
  width: 40px;
  height: 40px;
}
</style>
