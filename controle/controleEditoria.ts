// ControleEditora.ts
import Editora from './Editora';

class ControleEditora {
    private editoras: Array<Editora>;

    constructor() {
        // Inicializa a variável editoras com pelo menos três elementos no formato JSON
        this.editoras = [
            new Editora(1, 'Editora A'),
            new Editora(2, 'Editora B'),
            new Editora(3, 'Editora C'),
        ];
    }

    // Método para obter todas as editoras
    getEditoras(): Array<Editora> {
        return this.editoras;
    }

    // Método para obter o nome da editora pelo código
    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = this.editoras.find(editora => editora.getCodEditora() === codEditora);

        // Retorna o nome da editora se encontrada, caso contrário, retorna undefined
        return editoraEncontrada ? editoraEncontrada.getNome() : undefined;
    }
}

export default ControleEditora;