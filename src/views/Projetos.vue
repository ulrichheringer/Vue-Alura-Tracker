<template>
    <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="">
        <div class="field">
            <label for="nomeDoProjeto" class="label" >
                Nome do Projeto
            </label>
            <input type="text" class="input" v-model="nomeDoProjeto" />
        </div>
        <div class="field">
            <button class="button" type="submit">
                Salvar
            </button>
        </div>
    </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import IProjeto from "../interfaces/IProjeto";

export default defineComponent({
    name: "ProjetosView",
    data() {
        return {
            nomeDoProjeto: "",
            projetos: [] as IProjeto[]
        };
    },
    methods: {
        salvar() {
            const projeto: IProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto);
            this.nomeDoProjeto = "";
        }
    },
});
</script>