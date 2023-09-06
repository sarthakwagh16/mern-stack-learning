import './App.css';
import Greet from './components/Greet';
import { Learn } from './components/Greet';
import { Feel } from './components/Greet';


//props are properties or the parameters we pass inside the component
//props are immutable i.e. it's value cannot be changed
function App() {
  return (
    <div className="App">
      <h1>Introduction to props</h1>
      <Greet name="Sarthak" />
      <Learn lang="ReactJs" channel="Technical Suneja" />
      <Feel feel="enjoying" />
    </div>
  );
}

export default App;
