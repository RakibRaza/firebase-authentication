import NavBar from "./Components/NavBar/NavBar";
import SignUP from "./Components/SignUP/SignUP";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import LogIn from "./Components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/update-profile">
          <UpdateProfile />
        </PrivateRoute>
        <Route path="/signup">
          <SignUP />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
