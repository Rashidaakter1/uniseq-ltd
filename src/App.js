
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Home/Login/Login';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase></Purchase>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>

    </div>
  );
}

export default App;
