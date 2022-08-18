import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/edit/:id" element ={<Update/>}/>
          <Route path ="/new" element ={<Create/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
