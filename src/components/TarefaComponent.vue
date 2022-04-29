<template>
    <div class="box has-text-weight-bold">
        <div class="columns is-7">
            {{tarefa.descricao}}
        </div>
        <div class="column">
            <CronometroComponent :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
    </div>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa'
import { defineComponent, PropType } from 'vue'
import CronometroComponent from './CronometroComponent.vue'
export default defineComponent({
    name: 'TarefaComponent',
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        }
    },
    components: {
        CronometroComponent,
    },
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
    border-radius: 1rem;
}
</style>