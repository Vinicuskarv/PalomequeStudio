import Home from './pages/Home/PageHome';
import About from './pages/About/PageAbout';
import { Route, BrowserRouter,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element = { <Home/> }  path="/"/>     
          <Route element = { <About/> }  path="/About"/>               
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
