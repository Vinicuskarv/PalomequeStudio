import Home from './pages/Home/PageHome';
import About from './pages/About/PageAbout';
import Contact from './pages/Contactos/PageContactos';

import { Route, BrowserRouter,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element = { <Home/> }  path="/"/>     
          <Route element = { <About/> }  path="/About"/>
          <Route element = { <Contact/> }  path="/Contactos"/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
