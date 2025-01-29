import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';
import { Message } from './components/Message';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Bruce">
        <p>This is children content</p>
      </Greet>      
      <Greet name="Superman"/>
      <Welcome /> */}
    </div>
  );
}

export default App;
