import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log('Foi Submetido =>', nome, cargo, imagem, time);
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className='formulario-container'>
      <form className='formulario' onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label='Imagem'
          placeholder='Informe o endereço da Imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa required label='Time' itens={props.times} valor={time} aoAlterado={(valor) => setTime(valor)} />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className='formulario'
        onSubmit={(event) => {
          event.preventDefault();
          props.aoCadastrarTime({ nome: nomeTime, cor: corTime });
        }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          required
          label='Nome'
          placeholder='Digite o nome do time'
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          required
          type='color'
          label='Cor'
          placeholder='Digite a cor do time'
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar time</Botao>
      </form>
    </section>
  );
};
