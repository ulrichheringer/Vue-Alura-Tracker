<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioComponent @aoSalvarTarefa="salvarTarefas"/>
      <div class="lista">
        <TarefaComponent v-for="(tarefa,index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxComponent v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </BoxComponent>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import BoxComponent from './components/BoxComponent.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import TarefaComponent from './components/TarefaComponent.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioComponent,
    TarefaComponent,
    BoxComponent,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    }
  },
  computed: {
    listaEstaVazia() : boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefas(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
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
