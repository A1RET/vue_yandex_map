<template>
  <div class="point-info">
    <div class="name">{{ point.name }}</div>
    <div class="director" v-if="point.director">{{ point.director }}</div>
    <div class="phones" v-if="point.phones.length > 0">
      <span v-for="phone in point.phones" :key="phone">{{ phone }}</span>
    </div>
    <div class="email" v-if="point.email">
      <a :href="`mailto:${point.email}`">{{ point.email }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    point: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.point-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.name {
  color: $primary-color;
  font-weight: bold;
}
.director {
  color: $black-color;
}

.phones {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
