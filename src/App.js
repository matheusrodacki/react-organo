import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { Rodape } from './components/Rodape/Rodape';
import { v4 as uuid } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuid(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuid(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuid(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuid(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuid(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuid(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuid(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ]);

  const inicial = [
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome,
      favorito: false,
    },
    {
      id: uuid(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome,
      favorito: false,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuid() }]);
  };

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  const aoNovoTimeAdicionado = (time) => {
    setTimes([...times, { ...time, id: uuid() }]);
  };

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function aoFavoritarColaborador(idColaborador) {
    console.log(idColaborador);
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === idColaborador) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}
        aoCadastrarTime={(time) => aoNovoTimeAdicionado(time)}
      />
      <section className='times'>
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
            aoFavoritar={aoFavoritarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
