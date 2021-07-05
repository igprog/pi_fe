<template>
  <div v-if="val" class="text-center text-primary">
    <icon name="spinner" pulse scale="3"></icon>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    val: Boolean,
    title: String
  }
};
</script>

<style scoped>
</style>
