<template>
  <div class="list">
    <div class="list__header">
      <span
        v-for="(value, key) in points"
        :class="{ active: key === countryId }"
        :key="key"
        @click="selectCountry(key)"
      >
        {{ key }}
      </span>
    </div>
    <div class="list__items">
      <template v-for="(cityPoints, cityName) in currentCountryPoints" :key="cityName">
        <ListItem
          :city="{ name: cityName, points: cityPoints }"
          :currentPoint="currentPoint"
          @select-point="selectPoint"
        />
      </template>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/List/ListItem.vue'
export default {
  components: {
    ListItem
  },
  props: {
    points: {
      type: Object,
      default() {
        return {}
      }
    },
    countryId: {
      type: String,
      default() {
        return ''
      }
    },
    currentPoint: {
      type: Object
    }
  },
  computed: {
    currentCountryPoints() {
      if (!this.points[this.countryId]) {
        return {}
      }

      return this.points[this.countryId]
    }
  },
  methods: {
    selectCountry(countryId) {
      this.$emit('select-country', countryId)
    },
    selectPoint(point) {
      this.$emit('select-point', point)
    }
  }
}
</script>

<style lang="scss">
.list {
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.17));
  background-color: #fafafa;
}
.list__header {
  display: flex;
  span {
    font-size: 11px;
    line-height: 24px;
    color: $gray-color;
    text-align: center;
    flex-grow: 1;
    padding: 12px;
    border: 1px solid $gray-color;
    cursor: pointer;

    &.active {
      color: $white-color;
      background-color: $active-color;
      border-color: $active-color;
      cursor: initial;
    }
  }
}
</style>
