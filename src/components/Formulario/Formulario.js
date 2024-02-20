import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {
  const times = ['Programação', 'Front-End', 'Data-Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação'];

  const aoSalvar = (event) => {
    event.preventDefault();

    console.log('Foi Submetido');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto required={true} label='Nome' placeholder='Digite seu nome' />
        <CampoTexto required={true} label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da Imagem' />
        <ListaSuspensa required={true} label='Time' itens={times} />
        <Botao texto='Criar Card'>Criar Card</Botao>
      </form>
    </section>
  );
};
