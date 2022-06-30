<template>
  <div class="projetos">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"ProjetosView"
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
