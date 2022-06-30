<template>
  <section>
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "@/store";
import {ADICIONA_PROJETO, ALTERA_PROJETO} from '../../store/mutations-types';
import { TipoNotificacao } from "@/interfaces/INotificacao";
import {notificacaoMixin} from '@/mixins/notificar';

export default defineComponent({
  name: "FormularioProjetos",
  props: {
    id: {
      type: String,
    },
  },
  mixins: [notificacaoMixin],
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      console.log(projeto);
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        })
      } else {
        if (!this.nomeDoProjeto) {
        this.notificar(TipoNotificacao.FALHA, 'Ops!', "O nome do projeto não pode estar vazio!");
        return;
      }
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.notificar(TipoNotificacao.SUCESSO, "Projeto salvo com sucesso!", "Prontinho! :) Seu projeto já está disponivel.");
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

