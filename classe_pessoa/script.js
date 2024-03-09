class Pessoa {
  nome;
  idade;
  profissao;

  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde){
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }
}

let cliente = new Cliente("Alex", 35, "Adm", "(48)90000-0000", "email@email.com", "2020-05-19");

console.log(cliente);