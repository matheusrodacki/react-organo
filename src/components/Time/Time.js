import Colaborador from '../Colaborador';
import './Time.css';

export const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section className='time' style={{ backgroundColor: time.corSecundaria }}>
        <input
          value={time.corSecundaria}
          type='color'
          className='input-cor'
          onChange={(event) => mudarCor(event.target.value, time.nome)}
        />
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={time.corPrimaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
