<template>
  <div>
    <form>
      <div class="row">
        <div class="col-sm-6 mx-auto p-4 shadow">
          <div class="text-center">
            <h2>{{d.page}}</h2>
          </div>
          <control v-model="d.userName" title="User Name" />
          <control v-model="d.password" title="Password" type="password" />
          <control @click="login(d)" title="Login" type="submit" css="primary" ico="sign-in-alt" />
        </div>
      </div>
    </form>
    <json :data="d" />
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
      d: {
        page: "Login",
        id: null,
        userName: null,
        password: null
      }
    };
  },
  created() {
    this.d.accessdate = new Date();
    this.$emit("authenticated", false);
  },
  methods: {
    login(d) {


      // TODO: Web service login
      // this.post("Admin", "Login", { username: d.userName, password: d.password }).then(d => {
      // console.log(d);
      //  if (d == true) {
      //     this.$emit("authenticated", true);
      //     this.$router.replace({ name: "home" });
      //   } else {
      //     alert("wrong password!");
      //   }
      // });

      if (d.userName === "igor" && d.password === "1") {
        this.$emit("authenticated", true);
        this.$router.replace({ name: "home" });
      } else {
        alert("wrong password!");
      }
    }
  }
};
</script>