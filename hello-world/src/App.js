import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce">
        <p>This is children content</p>
      </Greet>      
      <Greet name="Superman"/>
      <Welcome />
    </div>
  );
}

export default App;
