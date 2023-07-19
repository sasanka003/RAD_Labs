import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Toggle from './components/Toggle';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Greeting />
      {/* <Toggle /> */}
      <Timer />
      {/* <ToDoList /> */}
    </div>
  );
}

export default App;
