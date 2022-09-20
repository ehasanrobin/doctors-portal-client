import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Myappointment from "./Pages/Dashboard/Myappointment";
import Payment from "./Pages/Dashboard/Payment";
import Review from "./Pages/Dashboard/Review";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import Registration from "./Pages/Registration/Registration";
import RequiredAdmin from "./Pages/RequiredAdmin/RequiredAdmin";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment></Appointment>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        >
          <Route index element={<Myappointment></Myappointment>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequiredAdmin>
                <Users></Users>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="addDoctors"
            element={
              <RequiredAdmin>
                <AddDoctor></AddDoctor>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequiredAdmin>
                <ManageDoctors></ManageDoctors>
              </RequiredAdmin>
            }
          ></Route>
        </Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
