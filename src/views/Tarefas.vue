<template>
      <FormularioComponent @aoSalvarTarefa="salvarTarefas"/>
      <div class="lista">
        <TarefaComponent v-for="(tarefa,index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxComponent v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </BoxComponent>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "../components/BoxComponent.vue";
import FormularioComponent from "../components/FormularioComponent.vue";
import TarefaComponent from "../components/TarefaComponent.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "TarefasView",
  components: {
    FormularioComponent,
    TarefaComponent,
    BoxComponent,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefas(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style>
.lista {
  margin-top: 1rem;
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #808080;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
