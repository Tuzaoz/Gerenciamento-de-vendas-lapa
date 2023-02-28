export type Venda = {
    id: number;
    produto: string;
    nomeCliente: Cliente;
    data: string;
    valor: number;
    categoriaProduto: string;
    metodoPagamento: string;
}
export type Cliente = {
    id: number;
    nome: string;
    fone: string;
}