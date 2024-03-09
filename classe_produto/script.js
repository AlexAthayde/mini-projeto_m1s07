class Produto {
  nome;
  preco;
  quantidade;

  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  Vender(qtdeVendida) {
    if (qtdeVendida > this.quantidade) {
      console.log(`Produto com estoque insuficiente!\nEstoque atual: ${this.quantidade}`);
      return;
    }
    this.quantidade -= qtdeVendida;
    console.log(`Seu Estoque atual é de ${this.quantidade}`);
  }

  Repor(qtdeEntrada) {
    this.quantidade += qtdeEntrada;
    console.log(`Seu Estoque atual é de ${this.quantidade}`);
  }

  Mostrar() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades em estoque.`
    );
  }

  AtualizarPreco(atualizar) {
    this.preco = atualizar;
    console.log(`Preço alterado com sucesso!\nPreço atual R$ ${this.preco}`);
  }
}

let produto = new Produto("Caneta", "1,50", 10);
produto.Vender(11);
produto.Vender(5);
produto.Repor(6);
produto.Mostrar();
produto.AtualizarPreco("2,00");

console.log(produto);
