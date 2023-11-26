// LivroLista.js
import React, { useState, useEffect } from 'react';
import ControleLivros from './ControleLivros';
import ControleEditora from './ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.getCodEditora());

  return (
    <tr>
      <td>
        <button onClick={() => excluir(livro.getCodigo())}>Excluir</button>
      </td>
      <td>{livro.getCodigo()}</td>
      <td>{livro.getTitulo()}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.getAutores().map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const obterLivros = async () => {
      setLivros(controleLivros.obterLivros());
      setCarregado(true);
    };

    obterLivros();
  }, [carregado]);

  const excluir = (codigoLivro) => {
    controleLivros.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.getCodigo()} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;