import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../src/index.css'
import AddAppointment from './pages/Appointment/AddAppointment/AddAppointment';
import Appointment from './pages/Appointment/Appointment';
import AddDoctor from './pages/Home/Doctors/AddDoctor/AddDoctor';
import Home from './pages/Home/Home/Home';
import LogIn from './pages/LogIn/Login/LogIn';
import Register from './pages/LogIn/Register/Register';

function App() {
  return (
    <div className='App'>
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
          <Route exact path='/addDoctor'>
            <AddDoctor></AddDoctor>
          </Route>
          <Route exact path='/addAppointment'>
            <AddAppointment></AddAppointment>
          </Route>
          <Route exact path='/appointments'>
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
