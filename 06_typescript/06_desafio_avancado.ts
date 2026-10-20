type TipoTransacao = "SERVICO" | "PRODUTO";

type FormaPagamento = "PIX" | "CARTAO" | "DINHEIRO";


interface ItemCaixa<T> {
    id: number,
    descricao: string,
    valor: number,
    tipo: TipoTransacao,
    pagamento: FormaPagamento
    detalhes: T
}

interface DetalhesServico {
    barbeiro: string,
    duracaoMinutos: number
}

interface DetalhesProduto {
    marca: string,
    quantidade: number
}


function processaItem<T>(item: ItemCaixa<T>): void {
    console.log(`[${item.tipo}] ${item.descricao} - R$ ${item.valor} (${item.pagamento})`);
    console.log(`Item detalhes: `, item.detalhes)
}


const vendaCorte: ItemCaixa<DetalhesServico> = {
    id: 1,
    descricao: 'Corte Navalhado',
    valor: 50.0,
    tipo: 'SERVICO',
    pagamento: 'PIX',
    detalhes: {
        barbeiro: 'David',
        duracaoMinutos: 45
    }
};

const vendaPomada: ItemCaixa<DetalhesProduto> = {
    id: 2,
    descricao: "Pomada Modeladora Efeito Seco",
    valor: 35.0,
    tipo: "PRODUTO",
    pagamento: "CARTAO",
    detalhes: {
        marca: "BarberCraft",
        quantidade: 2
    }
};


processaItem(vendaCorte)


processaItem(vendaPomada)
export { }