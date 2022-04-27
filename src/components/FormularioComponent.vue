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
        <TemporizadorComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorComponent from "./TemporizadorComponent.vue";	// importando o temporizador
export default defineComponent({
  name: "FormularioComponent",
  components: {
      TemporizadorComponent,
  },
})
</script>