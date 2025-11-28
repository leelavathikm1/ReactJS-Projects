import { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";

export function User(params) {
  const [userInfo, setUserInfo] = useState({ fname: "", lname: "", email: "" });
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getDataFromServer();
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    const newUserInfo = { ...userInfo }; //cloning(objet copy) or creating a copy of userInfo
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  };

  //This is javascript plain method
  //   const createUser = () => {
  //     fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       body: JSON.stringify(userInfo),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then(() => {
  //         console.log("User Created Now ");
  //       });
  //   };

  //Axios is an external library we need import it
  const createUser = () => {
    axios.post("http://localhost:3000/users", userInfo).then(function (res) {
      console.log("User Created With Axios");
      getDataFromServer();
      clearForm();
    });
  };

  const getDataFromServer = () => {
    axios.get("http://localhost:3000/users").then((resp) => {
      console.log(resp.data);
      setAllUsersInfo(resp.data);
    });
  };

  const handleDelete = (user) => {
    axios.delete("http://localhost:3000/users/" + user.id).then(() => {
      getDataFromServer();
    });
  };

  const clearForm = () => {
    setUserInfo({
      fname: "",
      lname: "",
      email: "",
    });
  };

  const handleEdit = (usr) => {
    setUserInfo(usr);
    setIsEdit(true);
  };

  const updateUser = () => {
    axios
      .put("http://localhost:3000/users/" + userInfo.id, userInfo)
      .then(function () {
        clearForm();
        setIsEdit(false);
        getDataFromServer();
      });
  };

  return (
    <>
      <h2>Hello From User Component</h2>

      <form>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="fname"
          value={userInfo.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lname"
          value={userInfo.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button onClick={createUser}>Add User</button>
        )}
        {/* <button onClick={createUser}>Add User</button> */}
      </form>

      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsersInfo.map((user) => {
            return (
              <tr>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
