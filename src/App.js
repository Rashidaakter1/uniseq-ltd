
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Home/Login/Login';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import Register from './Pages/Home/Register/Register';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import MyOrders from './Pages/Home/MyOrders/MyOrders';
import MyProfile from './Pages/Home/MyProfile/MyProfile';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase" element={<RequireAuth><Purchase></Purchase></RequireAuth>} />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>} />
          <Route path='myprofile' element={<MyProfile></MyProfile>} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
