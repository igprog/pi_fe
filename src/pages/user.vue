<template>
  <div class="container text-left">
    <form>
      <div class="form-group">
        <label>Ime:</label>
        <input v-model="d.firstName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Prezime:</label>
        <input v-model="d.lastName" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Datum rođenja:</label>
        <input v-model="d.accessdate" type="date" class="form-control">
      </div>
      <div class="text-right">
        <button type="submit" class="btn btn-primary" @click="save(d)">Spremi</button>
      </div>
      <json :data="d"/>
    </form>
  </div>
</template>

<script>
import json from "../components/json.vue";
import { mixin } from '../mixins/mixin.js'
export default {
  mixins: [mixin],
  components: {
    json
  },
  data() {
    return {
      msg: "Test kontroler ok",
      d: {
        id: null,
        firstName: null,
        lastName: null,
        accessdate: null,
        gl: this.$globalVariable
      }
    };
  },
  created() {
    debugger;
    this.d.accessdate = new Date();
  },
  methods: {
    save(d) {
      alert("Spremi: " + d.firstName);
    }
  }
};
</script>

<style scoped>
h1 {
  color: #c07228;
}
</style>
