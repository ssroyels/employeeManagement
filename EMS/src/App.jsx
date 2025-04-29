import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashBoard from "./Components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
      setLoggedInUser(parsedUser.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      const adminData = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (userData && Array.isArray(userData)) {
      const employee = userData.find((e) => email === e.email && password === e.password);
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? <AdminDashBoard /> : user == "employee" ? <EmployeeDashBoard data={loggedInUser} /> : null}
    </>
  );
};

export default App;
