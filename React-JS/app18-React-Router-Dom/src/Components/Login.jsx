import React from "react";

export const Login = () => {
  const [user, setUser] = React.useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
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
