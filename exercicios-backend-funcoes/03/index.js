const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo() {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${totalInstensCarrinho(this)}`);
    console.log(
      `Total a pagar: ${centavosParaMoedaBrasil(totalValorCarrinho(this))}`
    );
  },
  addProdutoAoCarrinho(produto) {
    if (!this.produtos) {
      this.produtos = [];
    }
    //Produto encontrado
    let produtoEncontrado = false;
    for (let i = 0; i < this.produtos.length; i++) {
      const element = this.produtos[i];
      if (element.id === produto.id) {
        this.produtos[i].qtd += produto.qtd;
        produtoEncontrado = true;
        console.log(`Adicionado ${produto.nome} quantidade ${produto.qtd}`);
        break;
      }
    }
    if (produtoEncontrado === false) {
      carrinho.produtos.push(produto);
    }
  },
  imprimirDetalhes() {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log();
    console.log(transformarCarrinho(this));
    console.log();
    console.log(`Total de itens: ${totalInstensCarrinho(this)}`);
    console.log(
      `Total a pagar: ${centavosParaMoedaBrasil(totalValorCarrinho(this))}`
    );
  },
};

//--------------------------------------

function totalInstensCarrinho(carrinho) {
  let totalItens = 0;
  for (const produto of carrinho.produtos) {
    totalItens += produto.qtd;
  }
  return totalItens;
}

function totalValorCarrinho(carrinho) {
  let totalValor = 0;
  for (const produto of carrinho.produtos) {
    totalValor += produto.qtd * produto.precoUnit;
  }
  return totalValor;
}

function transformarCarrinho(carrinho) {
  let numeracaoItem = 0;
  let detalhes = "";
  for (const produto of carrinho.produtos) {
    numeracaoItem++;
    detalhes += `Item ${numeracaoItem} - ${produto.nome} - ${
      produto.qtd
    } - ${centavosParaMoedaBrasil(produto.qtd * produto.precoUnit)}\n`;
  }
  return detalhes.trim();
}

// Novos Produtos

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProdutoAoCarrinho(novaBermuda);
carrinho.addProdutoAoCarrinho(novoTenis);
carrinho.imprimirDetalhes();

function centavosParaMoedaBrasil(centavos) {
  const valorEmReais = (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valorEmReais;
}
