// ControleLivros.ts
import Livro from './Livro';

class ControleLivros {
    private livros: Array<Livro>;

    constructor() {
        // Inicializa a variável livros com pelo menos três elementos no formato JSON
        this.livros = [
            new Livro(1, 1, 'Livro A', 'Resumo do Livro A', ['Autor1', 'Autor2']),
            new Livro(2, 2, 'Livro B', 'Resumo do Livro B', ['Autor3', 'Autor4']),
            new Livro(3, 1, 'Livro C', 'Resumo do Livro C', ['Autor5', 'Autor6']),
        ];
    }

    // Método para obter todos os livros
    obterLivros(): Array<Livro> {
        return this.livros;
    }

    // Método para incluir um novo livro
    incluir(novoLivro: Livro): void {
        // Encontra o código mais alto no vetor
        const maiorCodigo = Math.max(...this.livros.map(livro => livro.getCodigo()));

        // Incrementa o código em 1 e atribui ao novo livro
        novoLivro.setCodigo(maiorCodigo + 1);

        // Adiciona o novo livro ao vetor
        this.livros.push(novoLivro);
    }

    // Método para excluir um livro pelo código
    excluir(codigoLivro: number): void {
        // Encontra o índice do livro com o código fornecido
        const indiceLivro = this.livros.findIndex(livro => livro.getCodigo() === codigoLivro);

        // Remove o livro com o uso de splice
        if (indiceLivro !== -1) {
            this.livros.splice(indiceLivro, 1);
            console.log(`Livro com código ${codigoLivro} excluído com sucesso.`);
        } else {
            console.log(`Livro com código ${codigoLivro} não encontrado.`);
        }
    }
}

export default ControleLivros;