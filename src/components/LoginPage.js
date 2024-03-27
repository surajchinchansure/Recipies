import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const finalClick = (event) => {
    event.preventDefault();
    if (name === "suraj" && password === "Suraj@12345") {
      console.log(name + password);
      nav("/recipe");
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form>
        <input type="text" onChange={nameHandler} />
        <input type="password" onChange={passwordHandler} />
        <button type="button" onClick={finalClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
