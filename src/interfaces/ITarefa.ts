import IProjeto from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegudos: number,
    descricao: string,
    projeto: IProjeto
}