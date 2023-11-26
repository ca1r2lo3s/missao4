// LivroDados.js

// Definição do objeto Livro
function Livro(titulo, autor, anoPublicacao) {
  this.titulo = titulo;
  this.autor = autor;
  this.anoPublicacao = anoPublicacao;
}

// Exemplo de método para exibir detalhes do livro
Livro.prototype.exibirDetalhes = function () {
  console.log(`Livro: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicação: ${this.anoPublicacao}`);
};

// Exportar o objeto Livro
module.exports = Livro;