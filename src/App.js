
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
import AddReview from './Pages/Home/AddReview/AddReview';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Home/Blogs/Blogs';
import MyPortfolio from './Pages/Home/MyPortfolio/MyPortfolio';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>} />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>} />
          <Route path='myprofile' element={<MyProfile></MyProfile>} />
          <Route path='addreview' element={<AddReview></AddReview>} />

        </Route>

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
