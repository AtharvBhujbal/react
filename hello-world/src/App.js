import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'; 
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce">
        <p>This is children content</p>
      </Greet>      
      <Greet name="Superman"/>
      <Welcome name="Atharv"/> */}
      {/* <UserGreet/> */}
      {/* <NameList/> */}
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <StyleSheet primary = {false}/>
      <Inline/>

    </div>
  );
}

export default App;
