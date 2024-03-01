import './Colaborador.css';
import { IoMdCloseCircle } from 'react-icons/io';

export const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
  return (
    <div className='colaborador'>
      <IoMdCloseCircle size={25} className='deletar' onClick={aoDeletar} />
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={imagem}></img>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
