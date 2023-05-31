import './App.css';
import { Spotlight, Navbar, About, Events, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Spotlight/>
      <About/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
