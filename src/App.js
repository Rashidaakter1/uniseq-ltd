import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Purchase from "./Pages/Home/Purchase/Purchase";
import Login from "./Pages/Home/Login/Login";
import RequireAuth from "./Pages/Home/RequireAuth/RequireAuth";
import Register from "./Pages/Home/Register/Register";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import MyProfile from "./Pages/Home/MyProfile/MyProfile";
import AddReview from "./Pages/Home/AddReview/AddReview";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Blogs from "./Pages/Home/Blogs/Blogs";
import MyPortfolio from "./Pages/Home/MyPortfolio/MyPortfolio";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Reviews from "./Pages/Home/Reviews/Reviews";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Pages/Home/Payment/Payment";
import ManageUsers from "./Pages/Home/ManageUsers/ManageUsers";
import RequireAdmin from "./Pages/Home/RequireAdmin/RequireAdmin";
import ManageProducts from "./Pages/Home/ManageProducts/ManageProducts";
import ManageOrders from "./Pages/Home/ManageOrders/ManageOrders";
import AddProduct from "./Pages/Home/AddProduct/AddProduct";
import NavbarBanner from "./Pages/Shared/Navbar/NavbarBanner";

function App() {
  return (
    <div>
      <NavbarBanner />
      <Navbar></Navbar>

      <main > 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          />

          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile></MyProfile>} />
            <Route path="myorders" element={<MyOrders></MyOrders>} />
            <Route path="addreview" element={<AddReview></AddReview>} />
            <Route path="payment/:id" element={<Payment></Payment>} />
            <Route
              path="manageusers"
              element={
                <RequireAdmin>
                  <ManageUsers></ManageUsers>
                </RequireAdmin>
              }
            />
            <Route
              path="manageproduct"
              element={
                <RequireAdmin>
                  <ManageProducts></ManageProducts>
                </RequireAdmin>
              }
            />
            <Route
              path="manageorder"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            />
            <Route
              path="addproduct"
              element={
                <RequireAdmin>
                  <AddProduct></AddProduct>
                </RequireAdmin>
              }
            />
          </Route>

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </main>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
