<template>
  <div class="content container">
    <div class="content__sidebar">
      <List
        :points="sortedPoints"
        :countryId="currentCountry"
        @selectCountry="(countryId) => (currentCountry = countryId)"
      />
    </div>
    <div class="content__content">карта</div>
  </div>
</template>

<script>
import { getPoints } from '@/services/api'

import List from '@/components/List/List.vue'

export default {
  components: {
    List
  },
  data() {
    return {
      currentCountry: 'Россия',
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
        const pointCountry = point.country
        const pointCity = point.city

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
    filteredPointByCountry() {
      if (this.points.length === 0) {
        return this.points
      }

      return this.points.filter((point) => point.country === this.currentCountry)
    }
  }
}
</script>
