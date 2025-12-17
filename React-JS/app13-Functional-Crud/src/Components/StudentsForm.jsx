import React from "react";

// export const StudentsForm = (props) => {
//   console.log(props);
//destructuring
export const StudentsForm = ({
  student,
  handleChange,
  handleSubmit,
  editIndex,
  handleUdateStudent,
}) => {
  console.log(student);
  return (
    <div>
      <h2>Welcome To StudentsForm</h2>
      <form>
        <label htmlFor="">First Name </label>
        <input
          type="text"
          name="fName"
          value={student.fName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Last Name </label>
        <input
          type="text"
          name="lName"
          value={student.lName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Email </label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />{" "}
        <br />
        {/* <button type="button" onClick={handleSubmit}>
          Add Student
        </button> */}
        {editIndex == null ? (
          <button type="button" onClick={handleSubmit}>
            Add Student
          </button>
        ) : (
          <button type="button" onClick={handleUdateStudent}>
            Update Student
          </button>
        )}
      </form>
    </div>
  );
};
