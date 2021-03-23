import './style/App.css';
import Nav from './components/nav'
import Crypto from './components/Crypto'
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
        <Crypto />
    </div>
  );
}

export default App;
