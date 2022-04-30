<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input type="text" class="input digtarefa" placeholder="Digite sua tarefa..." v-model="descricao" />
      </div>
            <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TemporizadorComponent @aoTemporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TemporizadorComponent from "./TemporizadorComponent.vue";	// importando o temporizador
import {useStore} from "vuex";	// importando o store
import {key } from "@/store";	// importando o key
export default defineComponent({
  name: "FormularioComponent",
  emits: ['aoSalvarTarefa'],
  components: {
      TemporizadorComponent,
  },
  data() {
      return {
          descricao: '',
          idProjeto: '',
      }
  },
  methods: {
      finalizarTarefa(tempoDecorrido: number) {
        this.$emit('aoSalvarTarefa', {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricao,
          projeto: this.projetos.find(proj => proj.id === this.idProjeto),
        })
          this.descricao = '';
      },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    }
  },
})
</script>

<style >
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
.input {
  border-radius:30px;
}
</style>