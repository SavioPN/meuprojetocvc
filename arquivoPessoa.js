class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  document.getElementById("criar-funcionario").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;
  
    if (!nome || isNaN(idade) || !cargo) {
      exibirErro("Por favor, preencha todos os campos.");
      return;
    }
  
    try {
      const gerente = new Gerente(nome, idade, cargo, departamento);
      const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
  
      exibirResultado(gerente.seApresentar(), gerente.gerenciar());
      exibirResultado(desenvolvedor.seApresentar(), desenvolvedor.programar());
    } catch (error) {
      exibirErro("Ocorreu um erro.");
    }
  });
  
  function exibirErro(mensagem) {
    const erroDiv = document.getElementById("erro");
    erroDiv.textContent = mensagem;
  }
  
  function exibirResultado(resultado1, resultado2) {
    const resultadoDiv = document.getElementById("resultados");
    resultadoDiv.innerHTML += `<p>${resultado1}</p><p>${resultado2}</p>`;
  }


  