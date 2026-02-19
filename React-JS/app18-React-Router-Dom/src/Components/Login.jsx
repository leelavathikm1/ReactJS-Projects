import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log(e.target.value);
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleLogin = () => {
    // e.preventDefault();
    const validUser = {
      userName: "admin",
      password: "admin123",
    };
    console.log(user);
    if (
      validUser.userName === user.userName &&
      validUser.password === user.password
    ) {
      console.log("yes you are valid user");
      localStorage.setItem("isUserValid", true);
      navigate("/dashboard");
    } else {
      console.log("Invalid User");
      localStorage.setItem("isUserValid", false);
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="">User Name : </label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button onClick={handleLogin} type="button">
          Login
        </button>
      </form>
    </div>
  );
};
