import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {
  const times = ['Programação', 'Front-End', 'Data-Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação'];

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();

    console.log('Foi Submetido =>', nome, cargo, imagem);
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Informe o endereço da Imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa required={true} label='Time' itens={times} />
        <Botao texto='Criar Card'>Criar Card</Botao>
      </form>
    </section>
  );
};
