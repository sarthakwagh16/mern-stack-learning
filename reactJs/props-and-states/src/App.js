import './App.css';
import Greet from './components/Greet';
import { Learn } from './components/Greet';
import { Feel } from './components/Greet';

import Channel from './components/Channel';

import ChangeEvent from './components/ChangeEvent';
import CChangeEvent from './components/CChangeEvent';

//use of bind in event handling
import EventBind from './components/EventBind';

//passsing props 
import EventProps from './components/EventProps';
import Fragments from './components/Fragments';

import Clock from './components/Clock';


//props are properties or the parameters we pass inside the component
//props are immutable i.e. it's value cannot be changed
function App() {
  return (
    <div className="App">
      <h1>Introduction to props</h1>
      <Greet name="Sarthak" />
      <Learn lang="ReactJs" channel="Technical Suneja" />
      <Feel feel="enjoying" />

      <Channel />

      <ChangeEvent/>
      <CChangeEvent/>

      <EventBind/>

      <EventProps roll="22"/>
      
      <Fragments/>

      <Clock/>
    </div>
  );
}

export default App;
