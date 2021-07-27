<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-5">
          <h2>Kontakt</h2>
          <label>IG PROG, obrt za računalno programiranje</label>
          <p><icon name="home" /> Ludvetov breg 5, 51000 Rijeka, Hrvatska</p>
          <p><icon name="phone" /> +385 98 330 966</p>
          <p><icon name="envelope" /> info@programprehrane.com</p>
          <p>
            <a href="https://www.programprehrane.com/" title="programprehrane.com"
              ><icon name="globe" /> www.programprehrane.com</a
            >
            | <a href="https://www.igprog.hr" title="IG PROG"> www.igprog.hr</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/program_prehrane/"
              title="instagram"
              >@program_prehrane</a
            >
          </p>
        </div>
        <div class="col-lg-7">
          <loading :val="loading" title="" />
          <div v-if="d" class="text-center">
            <div v-if="!d.resp.isSent" class="container-fluid">
              <div class="row">
                <div class="col-sm-12">
                  <div class="md-float-material form-material">
                    <div class="auth-box card">
                      <div class="card-block">
                        <div class="row">
                          <div class="col-md-12">
                            <h1 class="text-center contact-us">
                              Kontaktirajte nas
                            </h1>
                            <h6 class="text-center respond">
                              (Odgovorićemo Vam u roku od 24h)
                            </h6>
                            <loading :val="loading" title="Slanje..." />
                            <json :data="d" />
                            <div v-if="alert" class="alert alert-danger mt-3">
                              <h5>{{ alert }}</h5>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group form-primary">
                              <input
                                v-model="d.name"
                                type="text"
                                class="form-control text-left"
                                placeholder="Ime"
                                required=""
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group form-primary">
                              <input
                                v-model="d.email"
                                type="email"
                                class="form-control text-left"
                                placeholder="Email"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group form-primary">
                          <textarea
                            v-model="d.msg"
                            class="form-control text-left"
                            placeholder="Poruka"
                            required=""
                          >
                          </textarea>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <button
                              type="button"
                              class="
                                btn btn-secondary btn-md btn-block
                                waves-effect
                                text-center
                                m-b-20
                              "
                              @click="send(d)"
                            >
                              <i class="fa fa-phone"></i> Pošaljite poruku
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container py-5 px-2">
              <div v-if="d.resp.msg" class="card">
                <div :class="classAlert" class="pt-3">
                  <h3 v-if="d.resp.msg">{{ d.resp.msg }}</h3>
                  <p v-if="d.resp.msg1">{{ d.resp.msg1 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../components/json.vue";
import loading from "../components/loading.vue";
import { mixin } from "../mixins/mixin.js";
import axios from "axios";
export default {
  mixins: [mixin],
  components: {
    json,
    loading,
  },
  data() {
    return {
      d: null,
      loading: false,
      alert: null,
    };
  },
  created() {
    const service = "mail/init";
    const api = `${process.env.ROOT_API}/${service}`;
    this.loading = true;
    axios.get(api).then((response) => {
      this.d = response.data;
      this.loading = false;
    });
  },
  mounted() {},
  computed: {
    classAlert: function () {
      return {
        "text-success": this.d.resp.isSent,
        "text-danger": !this.d.resp.isSent,
      };
    },
  },
  methods: {
    send(d) {
      this.alert = null;
      if (
        this.isNullOrWhitespace(d.name) ||
        this.isNullOrWhitespace(d.email) ||
        this.isNullOrWhitespace(d.msg)
      ) {
        this.alert = "Sva polja su obavezna!";
      }
      const service = "mail/send";
      const api = `${process.env.ROOT_API}/${service}`;
      this.loading = true;
      axios.post(api, d).then((response) => {
        this.d = response.data;
        console.log("axios post", response.data);
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped>
.login-block {
  margin: 30px auto;
  min-height: 93.6vh;
}

.login-block .auth-box {
  margin: 20px auto 0;
  max-width: 569px !important;
}

.contact-us {
  font-size: 24px;
  font-weight: 300;
}

.respond {
  font-size: 15px !important;
  font-weight: 200;
  margin-top: -6px;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1),
    0 11px 6px -7px rgba(43, 43, 43, 0.1);
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1),
    0 11px 6px -7px rgba(43, 43, 43, 0.1);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card .card-block {
  padding: 1.25rem;
}

.f-56 {
  font-size: 56px;
}

.form-group {
  margin-bottom: 1.25em;
}

.form-material .form-control {
  display: inline-block;
  height: 43px;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #ccc;
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px;
}

.btn-primary {
  background-color: #4099ff;
  border-color: #4099ff;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all ease-in 0.3s;
  transition: all ease-in 0.3s;
}

.btn {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
}

.m-b-20 {
  margin-bottom: 20px;
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px;
}
</style>