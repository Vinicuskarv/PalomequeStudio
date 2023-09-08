import Home from './pages/Home/PageHome';
import { Route, BrowserRouter,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element = { <Home/> }  path="/"/>               
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
