<template>
  <div class="container text-left">
    <form>
      <control v-model="d.firstName" title="First Name" />
      <control v-model="d.lastName" title="Last Name" />
      <control v-model="d.birthDate" title="Birth Date" type="date" />
      <control v-model="d.phone" title="Phone" />
      <control v-model="d.email" title="E-mail" />
      <control @click="save(d)" title="Save" type="submit" css="primary" ico="save" />
      <json :data="d" />
    </form>
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
