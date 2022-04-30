<template>
    <BoxComponent>
        <div class="columns is-7 textotarefa">
            {{tarefa.descricao || "Tarefa sem descrição"}}
        </div>
        <div class="column">
            <CronometroComponent class="cronometro" :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
    </BoxComponent>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa'
import BoxComponent from '@/components/BoxComponent.vue'
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
        BoxComponent,
    },
})
</script>

<style>
.box {
    border-radius: 0.75rem;
}
.textotarefa {
    font-size: 1.20rem;
    color: #000;
}
</style>