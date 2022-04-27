<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input type="text" class="input" placeholder="Digite sua tarefa..." />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
            <CronometroComponent :tempoEmSegundos="tempoEmSegundos"/>
          <button class="button" @click="iniciar">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroComponent from "./CronometroComponent.vue";	// importando o componente
export default defineComponent({
  name: "FormularioComponent",
  components: {
      CronometroComponent,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
    };
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8);
    },
  },
  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++;
        console.log(this.tempoEmSegundos);
      }, 1000);
      console.log("iniciando...");
    },
    finalizar() {
      clearInterval(this.cronometro);
      console.log("finalizando...");
    },
  },
});
</script>