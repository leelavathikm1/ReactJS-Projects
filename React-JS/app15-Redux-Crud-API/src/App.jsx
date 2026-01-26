import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./App.css";
import {
  createUserAsyncAction,
  deleteUserAsyncAction,
  getAllUserAsyncAction,
  updateUsersAsyncAction,
} from "./Store/UserSlice";

function App() {
  // const allUsers = useSelector((state) => {
  //   // console.log(state);
  //   return state.usersDetails;
  // });
  // console.log(allUsers);

  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.usersDetails);

  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    state: "",
    zip: "",
  });
  console.log(users);
  useEffect(() => {
    dispatch(getAllUserAsyncAction());
  }, []);

  const handleDeleteUser = (user) => {
    dispatch(deleteUserAsyncAction(user));
    console.log("Delete user called");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("submited User", user);
    dispatch(createUserAsyncAction(user));
    clearForm();
  };

  const clearForm = () => {
    setUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
      state: "",
      zip: "",
    });
  };

  const handleEdit = (user) => {
    setUser(user);
    setIsEdit(true);
  };

  const handleUpdate = () => {
    console.log("handleUpdate called");
    dispatch(updateUsersAsyncAction(user));
    clearForm();
    setIsEdit(false);
  };

  return (
    <>
      <h2>React Redux Crud Demo</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}-
            <button
              onClick={() => {
                handleDeleteUser(user);
              }}
              style={{ background: "red", color: "white", margin: "5px" }}
            >
              Delete User
            </button>{" "}
            -{" "}
            <button
              onClick={() => {
                handleEdit(user);
              }}
              style={{ background: "yellow", color: "blue", margin: "5px" }}
            >
              Edit User
            </button>
          </li>
        ))}

        <br />
        <form>
          <input
            type="number"
            name="id"
            placeholder="Enter ID"
            value={user.id}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            name="fname"
            placeholder="Enter First Name"
            value={user.fname}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            name="lname"
            placeholder="Enter Last Name"
            value={user.lname}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <br />
          <br />
          {isEdit ? (
            <button
              type="button"
              style={{ background: "green", color: "white" }}
              onClick={handleUpdate}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              style={{ background: "green", color: "white" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </form>
      </ul>
    </>
  );
}

export default App;
