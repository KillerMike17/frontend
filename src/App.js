// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

import LoginPage from "./Component/LoginPage"; // You can create a HomePage component for this route
import LoginForm from "./Component/LoginForm";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/about" element={<Header />}></Route>
      <Route path="/how-it-works" element={<Header />}></Route>
      <Route path="/contact"element={<Header />}></Route>
      
      <Route path="/Forgot Password" element={<LoginPage />}></Route>
      <Route path="/Sign Up" element={<LoginForm />} ></Route>
    
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;
