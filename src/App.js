import logo from './logo.svg';
import './App.css';
import GameMenu from './components/GameMenu/GameMenu';
import Home from './components/Home/Home';
import TicTacToe from './components/TicTacToe/TicTacToe';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GameMenu />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/TicTacToe' element= { <TicTacToe /> }/>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>   */}
    </div>
  );
}

export default App;