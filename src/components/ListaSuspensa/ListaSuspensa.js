import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label> {props.label}</label>
      <select
        required={props.required}
        onChange={(evento) => {
          props.aoAlterado(evento.target.value);
        }}
        value={props.value}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
