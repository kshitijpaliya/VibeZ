import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Events from "./components/Events";
import Organize from "./components/Organize";
import PurchaseHistory from "./components/purchasehistory";
import OrganiseHistory from "./components/OrganiseHistory";
function App() {
  const [logged, setLogged] = useState(false);
  const [currUser, setCurrUser] = useState({ username: "", userId: "" });
  const [event, setEvent] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setLogged(true);
      setCurrUser(JSON.parse(loggedInUser)); // Parse back to object
    }
  }, []);

  const logIn = (username, userId) => {
    setLogged(true);
    const user = { username, userId };
    setCurrUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store as string
    console.log("Logged in user:", user);
    console.log("Logged in user:", username, "User ID:", userId);
  };

  const logOut = () => {
    setLogged(false);
    setCurrUser({ username: "", userId: "" });
    localStorage.removeItem("loggedInUser");
  };

  function e(eve) {
    setEvent(eve);
  }
  return (
    <Fragment>
      {logged ? (
        <div>
          <BrowserRouter>
            <Navbar user={currUser.username} />
            <Routes>
              <Route
                path="/"
                element={<HomePage user={currUser} logOut={logOut} />}
              />
              <Route
                path="/account"
                element={<Account userID={currUser.username} />}
              />
              <Route
                path="/events"
                element={<Events user={currUser.username} />}
              />
              <Route
                path="/organize"
                element={<Organize user={currUser.userId} />}
              />
              <Route
                path="/cart"
                element={<PurchaseHistory user={currUser.username} />}
              />
              <Route
                path="/ohistory"
                element={<OrganiseHistory user={currUser.userId} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login logIn={logIn} />} />
            <Route path="/signup" element={<SignUp logIn={logIn} />} />
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
}

export default App;
