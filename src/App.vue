<template>
  <div id="app">
    <navbar />
    <!-- <div class="text-center">
        <h1>{{ $route.name }}</h1>
      </div> -->
    <router-view />

    <!-- <div v-if="!authenticated" class="text-center p-3">
      <h1>{{appname}}</h1>
      <hr/>
    </div>
    <navbar v-if="authenticated" />
    <div class="row">
      <sidebar v-if="authenticated" />
      <div class="col pt-5">
        <div class="container">
          <router-view @authenticated="setAuthenticated" />
        </div>
      </div>
    </div>-->

    <footer class="container-fluid py-3">
      <div ng-cloak class="text-center">
        <hr />
        <span class="small"
          >Copyright © {{ year }}
          <a href="https://www.igprog.hr" title="igprog.hr">IG PROG</a></span
        >
      </div>
    </footer>
  </div>
</template>

<script>
// import Vue from "vue";
require("@/assets/styles/main.css");
// require("@/assets/styles/custom.scss");
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";
import { mixin } from "./mixins/mixin.js";
export default {
  mixins: [mixin],
  name: "App",
  metaInfo: {
    title: "Plan Ishrane",
    htmlAttrs: {
      lang: 'sr'
    }
  },
  components: {
    navbar,
    sidebar,
  },
  data() {
    return {
      authenticated: false,
      year: new Date().getFullYear(),
    };
  },
  created() {
    // this.gethttp("static/config.json").then((d) => {
    //   debugger;
    //   Vue.prototype.$backend = d.backend;
    //   Vue.prototype.$apiurl = d.apiurl;
    // });
  },
  mounted() {
    // this.$http.get('static/config.json').then((resp) => {
    //       debugger;
    //   const d = resp.body;
    //   Vue.prototype.$backend = d.backend;
    //   Vue.prototype.$apiurl = d.apiurl;
    // });
    // this.gethttp("static/config.json").then((d) => {
    //   debugger;
    //   Vue.prototype.$backend = d.backend;
    //   Vue.prototype.$apiurl = d.apiurl;
    // });
    // if (!this.authenticated) {
    //   this.$router.replace({ name: "login" });
    // }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<!--<style lang="scss">
// @import './assets/styles/custom.scss';
</style>-->


<style scoped src="@/assets/styles/main.css">
</style>

<!--
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  height: 30px;
}
.btn-primary {
  background-color: #5fa0a2;
  border: 1px solid #5fa0a2;
}
.btn-primary:hover {
  background-color: #6cb7b9;
  border: 1px solid #5fa0a2;
}
</style>-->
