import {  Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/index.css";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import LogIn from "./pages/LogIn/Login/LogIn";
import Register from "./pages/LogIn/Register/Register";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AddDoctor from "./pages/Home/Doctors/AddDoctor/AddDoctor";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import AddAppointment from "./pages/Appointment/AddAppointment/AddAppointment";
import AdminRoute from "./pages/AdminRoute/AdminRoute";
import DashboardHome from "./pages/Dashboard/DashboadHome/DashboadHome";
import Payment from "./pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/logIn" element={<LogIn></LogIn>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route
              path="/appointments"
              element={
                <PrivateRoute>
                  <Appointment></Appointment>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route
                exact
                path="/dashboard"
                element={<DashboardHome></DashboardHome>}
              ></Route>
              <Route
                path={`/dashboard/appointments/:appointmentId`}
                element={<Payment></Payment>}
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addDoctor`}
                element={
                  <AdminRoute>
                    <AddDoctor></AddDoctor>
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/dashboard/addService"
                element={
                  <AdminRoute>
                    <AddAppointment></AddAppointment>
                  </AdminRoute>
                }
              ></Route>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
