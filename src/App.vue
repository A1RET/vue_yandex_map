<template>
  <div class="content container">
    <div class="content__sidebar">
      <list
        :points="sortedPoints"
        :countryId="currentCountry"
        :currentPoint="currentPoint"
        @select-country="(countryId) => (currentCountry = countryId)"
        @select-point="(point) => (currentPoint = point)"
      />
    </div>
    <div class="content__content">
      <map-block
        :points="filteredPointsByCountry"
        :currentPoint="currentPoint"
        @select-point="(point) => (currentPoint = point)"
      />
    </div>
  </div>
</template>

<script>
import { getPoints } from '@/services/api'

import List from '@/components/List/List.vue'
import MapBlock from '@/components/MapBlock.vue'

export default {
  components: {
    List,
    MapBlock
  },
  data() {
    return {
      currentCountry: 'Россия',
      currentPoint: {},
      points: []
    }
  },
  created() {
    getPoints().then((r) => {
      this.points = r
    })
  },
  computed: {
    sortedPoints() {
      if (this.points.length === 0) {
        return this.points
      }

      const points = {}
      this.points.forEach((point) => {
        const pointCountry = point.country.trim()
        const pointCity = point.city.trim()

        if (!points[pointCountry]) {
          points[pointCountry] = {}
        }

        if (!points[pointCountry][pointCity]) {
          points[pointCountry][pointCity] = []
        }

        points[pointCountry][pointCity].push(point)
      })

      return points
    },
    filteredPointsByCountry() {
      if (this.points.length === 0) {
        return this.points
      }

      return this.points.filter((point) => point.country === this.currentCountry)
    }
  },
  watch: {
    currentCountry(newCountry, prevCountry) {
      if (newCountry !== prevCountry) {
        this.currentPoint = {}
      }
    }
  }
}
</script>
