import Header from './components/Header/Header';
import FaixaAnimada from './components/FaixaAnimada/FaixaAnimada'
import Projetos from './components/Projetos/Projetos'
import Habilidades from './components/Habilidades/Habilidades'
import Sobre from './components/Sobre/Sobre'
import Formacao from './components/Formacao/Formacao'
import Experiencias from './components/Experiencias/Experiencias'
import Footer from './components/Footer/Footer';

import GlobalStyle from './GlobalStyle';


function App() {


  return (
    <>
      <GlobalStyle />
      <Header />
      <FaixaAnimada />
      <Projetos />
      <Habilidades />
      <Sobre />
      <Formacao />
      <Experiencias />
      <Footer />

    </>
  )
}

export default App
