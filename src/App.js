import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  const times = ['Programação', 'Front End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação'];
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className='App'>
      <Banner />
      <Formulario times={times} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((time) => (
        <Time nome={time} />
      ))}
    </div>
  );
}

export default App;
