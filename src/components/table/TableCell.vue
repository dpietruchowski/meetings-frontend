<template>
  <div class="gtcell">
    <div v-if="clickable" class="btn stretched-link" @click="$emit('clicked')">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: {
    clickable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.gtcell {
    text-align: center;
    display: table-cell;
    position: relative;
}
</style>