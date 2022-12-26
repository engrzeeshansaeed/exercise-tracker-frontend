import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SignIn from "./components/forms/signin/SignIn";
import SignUp from "./components/forms/signup/SignUp";
import Activity from "./components/forms/activity/Activity";
import Header from "./components/header/Header";
import Home from "./components/ui/home/Home";
import Cards from "./components/ui/card/Cards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        ></Route>

        <Route
          path="/signin"
          element={
            <div>
              <Header />
              <SignIn />
            </div>
          }
        ></Route>

        <Route
          path="/signup"
          element={
            <div>
              <Header />
              <SignUp />
            </div>
          }
        ></Route>

        <Route
          path="/cards"
          element={
            <div>
              <Header />
              <Cards />
            </div>
          }
        ></Route>

        <Route
          path="/activity"
          element={
            <div>
              <Header />
              <Activity />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
