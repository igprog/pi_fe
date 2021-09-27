<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm" >
      <div class="container-fluid">
        <a class="navbar-brand" href="../"><img src="../assets/logo.png" class="logo" alt="program ishrane" /></a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation" @click="openNav()" >
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" style="font-size: 28px"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li v-for="(x, idx) in menu_" :key="idx" class="nav-item">
              <router-link :to="'/' + x.link" :title="x.title">
                <span class="nav-link text-dark">
                  <icon :name="x.ico"></icon>
                  {{ x.title }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="mySidenav" class="sidenav text-uppercase">
      <div>
        <a href="javascript:void(0)" title="Izbornik" class="font-weight-bold text-light" @click="closeNav()">Menu</a>
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()" title="Zatvori" ><strong>&times;</strong></a>
        <hr class="m-0 mx-4 mb-2 bg-light" />
      </div>
      <div v-for="(x, idx) in menu_" :key="idx" @click="closeNav()">
        <router-link :to="'/' + x.link" :title="x.title">
          <span class="nav-link">
            <icon :name="x.ico"></icon>
            {{ x.title }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  data() {
    return {
      menu: [
        { link: "", title: "Naslovna", ico: null, isVisible: true },
        { link: "o-nama", title: "O nama", ico: null, isVisible: false },
        { link: "usluge", title: "Usluge", ico: null, isVisible: false },
        { link: "cene", title: "Cene", ico: null, isVisible: true },
        { link: "kontakt", title: "Kontakt", ico: null, isVisible: true },
        { link: "test", title: "Test", ico: null, isVisible: false },
      ],
    };
  },
  computed: {
    menu_: function () {
      return this.menu.filter((a) => a.isVisible);
    },
  },
  methods: {
    openNav() {
      if (document.getElementById("mySidenav").style.width == "250px") {
        document.getElementById("mySidenav").style.width = "0";
      } else {
        document.getElementById("mySidenav").style.width = "250px";
      }
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>
