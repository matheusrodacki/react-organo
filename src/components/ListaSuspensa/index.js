import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label> {props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option required={props.required} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
