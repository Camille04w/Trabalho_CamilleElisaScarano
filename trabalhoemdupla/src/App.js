import './App.css';
import Jogos from './components/Jogos'



function App() {
  return (
    <div className="Container">
      <Jogos titulo="FIFA 23" preco="R$500,00" descricao="O EA SPORTS™ FIFA 23 coloca o maior jogo do mundo em campo, com torneios da Copa do Mundo FIFA™ de futebol masculino e feminino, adição de clubes femininos e novas formas de jogar os seus modos favoritos. Os avanços na tecnologia HyperMotion2 trazem ainda mais ação e realismo do futebol para o campo no PS5.Além disso, agora o FIFA 23 apresenta novas linhas de comentaristas e cenas adicionais, melhorando a atmosfera dos jogos para tornar a experiência ainda mais realista. Lançado há pouco tempo, o DLC especial da Copa do Mundo 2022 também recebeu novidades." categoria="Jogos" />
    </div>
  );
}

export default App;

