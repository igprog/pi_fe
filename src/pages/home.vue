<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-lg-6 pt-5 text-center">
          <img
            src="../assets/img/ppweb_mockup.png"
            class="img-fluid"
            style="max-height: 70%"
            alt="veb aplikacija program ishrane"
          />
        </div>
        <div class="col-lg-6 pt-5">
          <h1>Program Ishrane <em class="small">Veb</em></h1>
          <p class="lead">Programsko rešenje za nutricioniste</p>
          <hr class="my-4" />
          <h2 class="text-justify h5">
            Već više od 13 godina najpopularnije programsko rešenje za izradu
            uravnoteženih jelovnika u regionu.
          </h2>
          <div class="row">
            <div class="col-sm-6">
              <a
                class="btn btn-outline-secondary btn-block btn-lg m-1"
                href="https://www.programprehrane.com/app"
                role="button"
                title="Ulaz za korisnike"
                ><icon name="user" scale="2"></icon> Ulaz za korisnike</a
              >
            </div>
            <div class="col-sm-6">
              <a
                class="btn btn-secondary btn-block btn-lg m-1"
                href="https://www.programprehrane.com/registracija"
                role="button"
                title="Postani korisnik"
                ><icon name="user-plus" scale="2"></icon> Postani korisnik</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div class="container text-center">
        <div class="row p-2">
          <div class="col-sm-3 p-2">
            <icon name="calculator" scale="3"></icon>
            <h2 class="lead">Izračun</h2>
            <h3 class="small">
              Izračun energetske potrošnje i preporučenog energetskog unosa
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="bicycle" scale="4"></icon>
            <h2 class="lead">Fizička aktivnost</h2>
            <h3 class="small">
              Plana treninga i detaljni izračun energetske potrošnje
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="heartbeat" scale="3"></icon>
            <h2 class="lead">Preporuke</h2>
            <h3 class="small">
              Preporuke za razne statosne skupine i više vrsta dijeta
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="utensils" scale="3"></icon>
            <h2 class="lead">Plan ishrane</h2>
            <h3 class="small">
              Izrada dnevnih i nedeljnih planova ishrane za pojedince i skupine
            </h3>
          </div>
        </div>
        <div class="row p-2">
          <div class="col-sm-3 p-2">
            <icon name="chart-pie" scale="3"></icon>
            <h2 class="lead">Analiza</h2>
            <h3 class="small">
              Analiza jelovnika, grafički i tabelarni prikazi
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="chart-bar" scale="3"></icon>
            <h2 class="lead">Pacijenti</h2>
            <h3 class="small">
              Baza pacijenata. Praćenje antropometrijskih parametara
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="mobile" scale="3"></icon>
            <h2 class="lead">Klijent App</h2>
            <h3 class="small">
              Omogućite svojim pacijentima da putem aplikacije sami prate svoje
              mere i preuzimaju jelovnike
            </h3>
          </div>
          <div class="col-sm-3 p-2">
            <icon name="shopping-basket" scale="3"></icon>
            <h2 class="lead">Košarica</h2>
            <h3 class="small">Izračun cene jelovnika i izrada šoping liste</h3>
          </div>
        </div>
      </div>
      <div class="container pt-2">
        <hr />
        <div class="text-center pt-4">
          <h2>O Programu</h2>
        </div>
        <p class="text-justify">
          <strong>Program Ishrane Veb</strong>
          <a
            href="https://www.programprehrane.com/app"
            title="www.programprehrane.com/app"
            class="text-muted"
            ><em>(Program Prehrane Web)</em></a
          > je softversko
          rešenje koje omogućava brzu i jednostavnu izradu uravnoteženih
          jelovnika. Izrada jelovnika pomoću ove aplikacije bazira se na
          preporučenom broju jediničnih serviranja svih skupina namirnica te
          njihovih energetskih, makro i mikronutiritivnih vrednosti kako bi
          jelovnik bio uravnotežen i raznolik. Aplikacija ima bazu od preko 700
          namirnica i pristup USDA bazi namirnica. Također korisnicima je
          omogućeno da sami unose svoje namirnice i recepte.
          <em>Program Ishrane Veb</em> je namenjen prvenstveno nutricionistima,
          ali zbog svoje jednostavnosti i pristupačne cene koriste ga i mnogi
          pojedinci koji vode računa o zdravoj i uravnoteženoj ishrani. Program
          je dostupan na srpskom (latinica/čirilica), hrvatskom, bosanskom i engleskom
          jeziku. <br /> Za pokretanje aplikacije nije potrebna nikakva instalacija već
          je samo dovoljno da se
          <a
            href="https://www.programprehrane.com/registracija"
            title="registracija"
            >registrujete u sustav</a
          >. Registracija i korišćenje <em>DEMO</em> verzije su potpuno
          besplatni. U <em>DEMO</em> verziji možete da isprobate većinu
          funkcionalnosti aplikacije.
        </p>
        <div class="pt-3">
          <h4>Osnovne funkcije programa:</h4>
          <card
            img="program/plan_ishrane_1.png"
            title="Praćenje antorpometijskih parametara"
            desc="Program na osnovi ulaznih parametara (visine, težina, obim struka i bokova, i intenziteta fizičke aktivnosti) izračunava bazalni metabolizam, ukupnu energetsku potrošnju,
                  indeks telesne mase (BMI), preporućeni energetski unos i preporučenu dodatnu energetsku potrošnju."
          />
          <card
            img="program/plan_ishrane_2.png"
            title="Izračun masnog tkiva"
            desc="Izračun masnog tkiva pomoću mjerenja kaliperoma na 3, 4 ili 7 točaka. Korisnici PREMIUM paketa imaju mogućnost izračuna bazalnog metabolizma prema više metoda izračuna.
          Jedna od metaoda je Katch-McArdle koja u obzir uzima postotak masnog tkiva."
          />
          <card
            img="program/plan_ishrane_3.png"
            title="Dodatna fizička aktivnost"
            desc="Odabir dodatne fizičke aktivnosti za klijente koji trebaju da smanje telesnu težinu ili povećaju udio mišićne mase."
          />
          <card
            img="program/plan_ishrane_4.png"
            title="Izrada jelovnika"
            desc="Izrada dnevnih i nedeljnih jelovnika za pojedinca ili skupine konzumenata na osnovu ulaznih parametara i preporuka za odabranu dijetu."
          />
          <card
            img="program/plan_ishrane_5.png"
            title="Analiza jelovnika"
            desc="Analiza nutritivnih i mikronutritivnih sastojak jelovnika. Raspored energetske vrednosti po obrocima, raspored jediničnih serviranja,
          mikro i makro nutritivne vrednosti, odabrane i preporućene vrednosti. Tablični i grafički prikaz."
          />
          <card
            img="program/plan_ishrane_6.png"
            title="Izrada recepata"
            desc="Izrada recepata koje kasnije možete da koristite u različitim jelovnicima. Razmena recepata sa drugim korisnicima aplikacije olakšavam izradu jelovnika i ćini jelovnike za Vaše klijente raznolikijima."
          />
        </div>
        <div class="mt-5">
          <div class="row">
            <div class="col-sm-6">
              <div class="text-center pt-4">
                <h2>Korisnici</h2>
              </div>
              <p class="text-justify pt-3">
                Od svog nastanka 2008 do danas aplikaciju
                <a
                  href="https://www.programprehrane.com/app"
                  title="www.programprehrane.com/app"
                  ><em>Program Ishrane Veb</em></a
                >
                prepoznali su brojni stručnjaci u regionu kao koristan alat za
                izradu planova ishrane i analizu stanja svojih pacijenata. Naši
                korisnici su bolnice, univerziteti, poliklinike, zavodi za javno
                zdravlje, sportski klubovi, apoteke, domovi za starije ali i
                brojni pojedinci i sportisti.
              </p>
            </div>
            <div class="col-sm-6 text-center py-3">
              <img
                src="../assets/img/program_ishrane_veb_korisnici.png"
                alt="program_ishrane_veb_korisnici"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/kbc_sestre_milosrdnice_zagreb.png"
              class="img-fluid customers-img"
              alt="kbc_sestre_milosrdnice_zagreb.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/poliklinika_labplus.png"
              class="img-fluid customers-img"
              alt="poliklinika_labplus.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/poliklinika_matulic.jpg"
              class="img-fluid customers-img"
              alt="poliklinika_matulic.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/poliklinika_analiza.jpg"
              class="img-fluid customers-img"
              alt="poliklinika_analiza.jpg"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/zavod_za_javno_zdravstvo_dubrovacko_neretvanske_zupanije.png"
              class="img-fluid customers-img"
              alt="zavod_za_javno_zdravstvo_dubrovacko_neretvanske_zupanije.png"
            />
          </div>
          <div class="col-3 mt-3">
            <img
              src="../assets/img/customers/zavod_za_javno_zdravstvo_medimurske_zupanije.jpg"
              class="img-fluid customers-img"
              alt="zavod_za_javno_zdravstvo_medimurske_zupanije.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/univerzitet_modernih_znanosti_mostar.jpg"
              class="img-fluid customers-img"
              alt="univerzitet_modernih_znanosti_mostar.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/zzjzvz.png"
              class="img-fluid customers-img"
              alt="zzjzvz.png"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/dom_za_starije_osobe_kantrida_rijeka.png"
              class="img-fluid customers-img"
              alt="dom_za_starije_osobe_kantrida_rijeka.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/vssszovs.jpg"
              class="img-fluid customers-img"
              alt="vssszovs.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/pucko_otvoreno_uciliste_zagreb.png"
              class="img-fluid customers-img"
              alt="pucko_otvoreno_uciliste_zagreb.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/poliklinika_polancec.jpg"
              class="img-fluid customers-img"
              alt="poliklinika_polancec.jpg"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/sveucilisna_klinicka_bolnica_mostar.png"
              class="img-fluid customers-img"
              alt="sveucilisna_klinicka_bolnica_mostar.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/ustanova_dobri_dom_grada_zagreba.png"
              class="img-fluid customers-img"
              alt="ustanova_dobri_dom_grada_zagreba.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/thalassotherapia_opatija.jpg"
              class="img-fluid customers-img"
              alt="thalassotherapia_opatija.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/poliklinika_bagatin.png"
              class="img-fluid customers-img"
              alt="poliklinika_bagatin.png"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-3 pt-4">
            <img
              src="../assets/img/customers/taekwondo_klub_novi_grad_sarajevo.png"
              class="img-fluid customers-img"
              alt="taekwondo_klub_novi_grad_sarajevo.png"
            />
          </div>
          <div class="col-3 pt-4">
            <img
              src="../assets/img/customers/pb_rab.png"
              class="img-fluid customers-img"
              alt="pg_rab.png"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/zavod_za_javno_zdravstvo_pgz.jpg"
              class="img-fluid customers-img"
              alt="zavod_za_javno_zdravstvo_pgz.jpg"
            />
          </div>
          <div class="col-3 pt-3">
            <img
              src="../assets/img/customers/zavod_za_javno_zdravlje_subotica.jpg"
              class="img-fluid customers-img"
              alt="zavod_za_javno_zdravlje_subotica.jpg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="text-center py-5">
        <a
          class="btn btn-secondary btn-lg"
          href="https://www.programprehrane.com/registracija"
          role="button"
          title="Postani korisnik"
          ><icon name="user-plus" scale="2"></icon> Registruj se i besplatno
          isprobaj DEMO verziju</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  metaInfo: {
    titleTemplate: "%s | Aplikacija za nutricioniste",
    meta: [
      {
        name: "description",
        content:
          "Izradite plan ishrane uz pomoć veb aplikacije. Registrujte se i isprobajte besplatu DEMO verziju.",
      },
    ],
  },
  mixins: [mixin],
  components: {
    card,
  },
  data() {
    return {
      d: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
