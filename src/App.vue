<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioComponent @aoSalvarTarefa="salvarTarefas"/>
      <div class="lista">
        <TarefaComponent v-for="(tarefa,index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import TarefaComponent from './components/TarefaComponent.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioComponent,
    TarefaComponent,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    }
  },
  methods: {
    salvarTarefas(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  },
});
</script>

<style>
.lista {
  margin-top: 1rem;
  padding: 1.25rem;
}
</style>
