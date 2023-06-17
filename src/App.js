import logo from './logo.svg';
import './App.css';
import GameMenu from './components/GameMenu/GameMenu';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <GameMenu />
      <Home />
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