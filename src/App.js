import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../src/index.css'
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home/Home';
import LogIn from './pages/LogIn/Login/LogIn';
import Register from './pages/LogIn/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AddDoctor from './pages/Home/Doctors/AddDoctor/AddDoctor';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddAppointment from './pages/Appointment/AddAppointment/AddAppointment';
import AdminRoute from './pages/AdminRoute/AdminRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/logIn'>
            <LogIn></LogIn>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute exact path='/appointments'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <AdminRoute exact path='/dashboard/addDoctor'>
            <AddDoctor></AddDoctor>
          </AdminRoute>
          <AdminRoute exact path='/dashboard/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path='/dashboard/addService'>
            <AddAppointment></AddAppointment>
          </AdminRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
