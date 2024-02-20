import './CampoTexto.css';

export const CampoTexto = (props) => {
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input required={props.required} placeholder={props.placeholder} />
    </div>
  );
};
