import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

export const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className='time'
        style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
        <input
          value={time.cor}
          type='color'
          className='input-cor'
          onChange={(event) => mudarCor(event.target.value, time.id)}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                id={colaborador.id}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
