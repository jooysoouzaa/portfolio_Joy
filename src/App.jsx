import Header from './components/Header/Header';
import FaixaAnimada from './components/FaixaAnimada/FaixaAnimada'
import Projetos from './components/Projetos/Projetos'
import Habilidades from './components/Habilidades/Habilidades'

import './App.css'

function App() {


  return (
    <>
      <div className='container-bg'>
        <div className='container'>
          <Header />
        </div>
      </div>
      <FaixaAnimada />
      <div className='container'>
        <Projetos />
        <Habilidades />

      </div>
    </>
  )
}

export default App
