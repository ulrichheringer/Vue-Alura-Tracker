import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefa from "../views/Tarefa.vue";

const rotas: RouteRecordRaw[] = [{
    path: "/",
    name: 'Tarefas',
    component: Tarefa
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default router;