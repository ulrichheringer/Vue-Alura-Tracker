import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from './mutations-types';
import INotificacao, { TipoNotificacao } from "@/interfaces/INotificacao";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [{
            id: 1,
            texto: "Uma notificação sucesso",
            titulo: "Sucess man!",
            tipo: TipoNotificacao.SUCESSO
        }, {
            id: 2,
            texto: "Uma notificação aviso",
            titulo: "Warning man!",
            tipo: TipoNotificacao.ATENCAO
        }, {
            id: 3,
            texto: "Uma notificação PERIGO",
            titulo: "PERIGO man!",
            tipo: TipoNotificacao.FALHA
        },
        {
            id: 4,
            texto: "Uma notificação sucesso",
            titulo: "Sucess man!",
            tipo: TipoNotificacao.SUCESSO
        },
        ]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto,
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id);
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}