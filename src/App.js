import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/home'>
              <Home/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
