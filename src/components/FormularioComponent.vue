<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input type="text" class="input" placeholder="Digite sua tarefa..." v-model="descricao" />
      </div>
      <div class="column">
        <TemporizadorComponent @aoTemporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorComponent from "./TemporizadorComponent.vue";	// importando o temporizador
export default defineComponent({
  name: "FormularioComponent",
  emits: ['aoSalvarTarefa'],
  components: {
      TemporizadorComponent,
  },
  data() {
      return {
          descricao: '',
      }
  },
  methods: {
      finalizarTarefa(tempoDecorrido: number) {
        this.$emit('aoSalvarTarefa', {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricao
        })
          console.log(tempoDecorrido);
          console.log(this.descricao);
          this.descricao = '';
      },
  },
})
</script>