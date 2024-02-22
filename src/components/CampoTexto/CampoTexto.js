import { useState } from 'react';
import './CampoTexto.css';

export const CampoTexto = (props) => {
  //let valorInput = 'Guilherme Silveira';

  const [valorInput, setValorInput] = useState('Guilherme Silveira');

  const aoDigitado = (evento) => {
    setValorInput(evento.target.value);
    console.log(valorInput);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input value={valorInput} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};
