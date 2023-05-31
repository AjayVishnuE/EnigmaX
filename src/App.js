import './App.css';
import { Navbar, Footer, Eventdetails, Ourteam } from './components';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Home} from "./containers"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Eventdetails" element={<Eventdetails />} />
          <Route path="/Ourteam" element={<Ourteam />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
