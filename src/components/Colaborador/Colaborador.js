import './Colaborador.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Colaborador = ({ id, nome, imagem, cargo, favorito, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(id);
  }

  return (
    <div className='colaborador'>
      <IoMdCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={imagem}></img>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className='favoritar'>
          {favorito ? <FaHeart size={25} onClick={favoritar} /> : <FaRegHeart size={25} onClick={favoritar} />}
        </div>
      </div>
    </div>
  );
};
