class Produto {
  nome;
  preco;
  quantidade;

  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  vender(qtdeVendida) {
    if (qtdeVendida > this.quantidade) {
      console.log("Produto com estoque insuficiente!");
      return;
    }
    this.quantidade -= qtdeVendida;
    console.log(`Seu Estoque atual é de ${this.quantidade}`);
  }

  repor(qtdeEntrada) {
    this.quantidade += qtdeEntrada;
    console.log(`Seu Estoque atual é de ${this.quantidade}`);
  }

  mostrar() {
    console.log(`O produto ${this.nome} possui ${this.quantidade} unidades em estoque.`);
  }

  atualizarPreco(atualizar){
    this.preco = atualizar;
    console.log(`Preço alterado com sucesso: preço atual R$ ${this.preco}`);

  }
}

let produto = new Produto("Caneta", "1,50", 10);
produto.vender(5);
produto.repor(6);
produto.mostrar();
produto.atualizarPreco("2,00")

console.log(produto);
