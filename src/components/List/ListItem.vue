<template>
  <div class="list-item" :class="{ 'list-item_active': isOpen }" v-if="city.points.length > 0">
    <div class="list-item__header" @click="toggleContent">
      <span>{{ city.name }}</span>
      <svg
        width="15"
        height="11"
        viewBox="0 0 10 6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M1.175 0L5 3.712 8.825 0 10 1.148 5 6 0 1.148 1.175 0z" />
      </svg>
    </div>
    <div class="list-item__content" ref="content">
      <div
        v-for="point in city.points"
        class="list-item__item"
        :class="{ current: point.name === currentPoint.name }"
        :key="point.name"
      >
        <PointInfo :point="point" @click="selectPoint(point)" />
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
    },
    currentPoint: {
      type: Object
    }
  },
  data() {
    return {
      isOpen: this.city.name === this.currentPoint.city
    }
  },
  methods: {
    toggleContent() {
      if (this.isOpen) {
        this.collapse()
      } else {
        this.expand()
      }
    },
    collapse() {
      this.isOpen = false
      const content = this.$refs.content
      content.style.height = 0
    },
    expand() {
      this.isOpen = true

      const content = this.$refs.content
      content.style.height = content.scrollHeight + 'px'
    },
    selectPoint(point) {
      this.$emit('select-point', point)
    }
  },
  watch: {
    currentPoint(newPoint, oldPoint) {
      if (typeof oldPoint.city !== 'undefined' || Object.keys(oldPoint).length == 0) {
        this.isOpen = newPoint.city !== this.city.name
        this.toggleContent()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 28px 0;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.05);
}

.list-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 17px;
  font-weight: bold;
  padding: 0 28px;
  cursor: pointer;

  svg {
    transition: transform ease 0.25s;
  }
}

.list-item__content {
  transition: 0.25s;
  height: 0;
  overflow: hidden;
  cursor: pointer;
}

.list-item__item {
  padding: 28px 28px 10px;
  border: 1px solid transparent;
}

.current {
  border-color: $active-color;
}

.list-item_active {
  .list-item__header {
    color: $active-color;

    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
