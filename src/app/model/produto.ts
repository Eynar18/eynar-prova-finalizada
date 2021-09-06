import { Medida } from "./medida";

export interface Produto {
    nome: string;
    fabricante: string;
    conteudo: number;
    medida: Medida;
    dataVencimento: Date;
    emEstoque?: boolean;
    id: number;
}