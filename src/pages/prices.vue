<template>
  <div class="text-center">
    <div class="container pt-3">
      <h1>Program Ishrane Veb - cene paketa</h1>
      <div class="row pt-4">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">START</h4>
            </div>
            <div class="card-body">
              <h3><b>73.00 € </b><small class="text-muted">1/god</small></h3>
              <h5><b>116.80 € </b><small class="text-muted">2/god</small></h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li>1 korisnik</li>
                <li>Broj klijenata: 5/mesečno</li>
                <li>668 namirnica</li>
                <li>Metode izračuna BMR: 1</li>
                <li><s>Aplikacija za klijente</s></li>
                <li><s>USDA baza namirnica</s></li>
                <li><s>Kalkulator masnog tkiva</s></li>
                <li><s>Šoping lista</s></li>
              </ul>
              <a
                href="https://www.programprehrane.com/narudzba"
                class="btn btn-lg btn-block btn-outline-secondary"
                >Naruči</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">STANDARD</h4>
            </div>
            <div class="card-body">
              <h3><b>126.09 € </b><small class="text-muted">1/god</small></h3>
              <h5><b>201.74 € </b><small class="text-muted">2/god</small></h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li>2 korisnika</li>
                <li>Broj klijenata: 20/mesečno</li>
                <li>668 namirnica</li>
                <li>Metode izračuna BMR: 4</li>
                <li>Aplikacija za klijente</li>
                <li><s>USDA baza namirnica</s></li>
                <li><s>Kalkulator masnog tkiva</s></li>
                <li><s>Šoping lista</s></li>
              </ul>
              <a
                href="https://www.programprehrane.com/narudzba"
                class="btn btn-lg btn-block btn-outline-secondary"
                >Naruči</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">PREMIUM</h4>
            </div>
            <div class="card-body">
              <h3><b>245.54 € </b><small class="text-muted">1/god</small></h3>
              <h5><b>392.86 € </b><small class="text-muted">2/god</small></h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li>5+ korisnika</li>
                <li>Broj klijenata: neograničeno</li>
                <li>724 namirnica</li>
                <li>Metode izračuna BMR: 5</li>
                <li>Aplikacija za klijente</li>
                <li>USDA baza namirnica</li>
                <li>Kalkulator masnog tkiva</li>
                <li>Šoping lista</li>
              </ul>
              <a
                href="https://www.programprehrane.com/narudzba"
                class="btn btn-lg btn-block btn-outline-secondary"
                >Naruči</a
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Više informacija o pojedinim paketima pogledajte na našoj veb stranici: <a href="https://www.programprehrane.com/cijene" title="www.programprehrane.com/cijene">www.programprehrane.com/cijene</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from "../mixins/mixin.js";
export default {
    metaInfo: {
    titleTemplate: '%s | Cene',
    meta: [
      { name: 'description', content: 'Cene godišnje i dvogodišnje pretplate za Start, Standard i Premium paket.' }
    ]
  },
  mixins: [mixin],
  components: {},
  data() {
    return {
      d: null,
    };
  }
};
</script>