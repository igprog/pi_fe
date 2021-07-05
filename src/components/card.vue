<template>
  <div class="card my-4">
    <div class="row no-gutters">
      <div class="col-sm-5" style="background: #868e96">
          <a :href="require(`@/assets/img/${img}`)">
        <img
          :src="require(`@/assets/img/${img}`)"
          class="card-img-top h-100"
          :alt="img"
        />
        </a>
      </div>
      <div class="col-sm-7">
        <div class="card-body">
          <h2 class="card-title">{{ title }}</h2>
          <p class="card-text">{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
</style>
