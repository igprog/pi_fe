<template>
  <div class="container text-left">
    <control v-model="d.search" type="search"/>
    <table class="table table-sm">
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Name</th>
      </tr>
      <tr>
        <td>Name1</td>
        <td>Phone1</td>
        <td>Name1</td>
      </tr>
      <tr>
        <td>Name2</td>
        <td>Phone2</td>
        <td>Name2</td>
      </tr>
    </table>
    <json :data="d"/>
  </div>
</template>

<script>
import json from "../components/json.vue";
import control from "../components/control.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  components: {
    json,
    control
  },
  data() {
    return {
      msg: "Test kontroler ok",
      d: {
        search: null,
        id: null,
        firstName: null,
        lastName: null,
        birthDate: null,
        phone: null,
        email: null,
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
