import './CampoTexto.css';

export const CampoTexto = (props) => {
  //let valorInput = 'Guilherme Silveira';

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    console.log(props.valor);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};
