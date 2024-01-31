import './App.css';
import ClassesMenu from "./components/js/menuChoiceClass";
import MenuAventure from './components/js/menuAventure';


function App() {
  
  const classVisibility = ["visible", "hidden"]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lofi-RPG</h1>
      </header>
      <div className="game-board">
        <ClassesMenu className={classVisibility[0]}/>
        <MenuAventure className={classVisibility[1]}/>
      </div>
    </div>
  );
}

export default App;

