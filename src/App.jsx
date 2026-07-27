import Header from './components/Header/Header';
import FaixaAnimada from './components/FaixaAnimada/FaixaAnimada'
import Projetos from './components/Projetos/Projetos'
import Habilidades from './components/Habilidades/Habilidades'
import Sobre from './components/Sobre/Sobre'
import Experiencias from './components/Experiencias/Experiencias'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer';

import ProjetoDetalhes from "./pages/ProjetoDetalhes/ProjetoDetalhes";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <FaixaAnimada />
              <Projetos />
              <Habilidades />
              <Sobre />
              <Experiencias />
              <CallToAction />
              <Footer />
            </>
          }
        />

        <Route
          path="/projetos/:slug"
          element={<ProjetoDetalhes />}
        />
      </Routes>
    </>
  );
}

export default App;
