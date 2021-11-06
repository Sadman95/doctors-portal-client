import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddDoctor from './pages/Home/Doctors/AddDoctor/AddDoctor';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/addDoctor'>
            <AddDoctor></AddDoctor>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
