import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Explorer from "./Pages/Home/Explorer/Explorer";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import OrderReplace from "./Pages/OrderReplace/OrderReplace";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/explorer">
              <Explorer />
            </Route>

            <PrivateRoute exact path="/orderReplace/:id">
              <OrderReplace />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
