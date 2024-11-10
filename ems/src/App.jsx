import React, { useContext, useEffect, useState } from "react";
import Login from "./comps/Auth/Login";
import EmpDashboard from "./comps/Dashboard/EmpDashboard";
import AdmDashboard from "./comps/Dashboard/AdmDashboard";

import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // localStorage.clear();
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? (
        <AdmDashboard data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmpDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
