import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>  
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
