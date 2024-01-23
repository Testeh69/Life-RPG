import './App.css';
import ClassesMenu from "./components/js/classes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lofi-RPG</h1>
      </header>
      <div className="game-board">
        <ClassesMenu />

      </div>
    </div>
  );
}

export default App;
