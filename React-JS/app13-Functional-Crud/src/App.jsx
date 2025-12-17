import { useState } from "react";
import "./App.css";
import { StudentsForm } from "./Components/StudentsForm";
import { StudentsTable } from "./Components/StudentsTable";

function App() {
  const [student, setStudent] = useState({
    student: {
      fName: "",
      lName: "",
      email: "",
    },
  });

  // const [studentsArray, setStudentsArray] = useState([]); instead of empty array can give 3 objects to display in browser
  const [studentsArray, setStudentsArray] = useState([
    { fName: "Leela", lName: "KM", email: "leela@gmail.com" },
    { fName: "Gaye", lName: "Reddy", email: "gaye@gmail.com" },
    { fName: "Murali", lName: "V", email: "murali@gmail.com" },
  ]);

  // const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    const newStudent = { ...student };
    newStudent[e.target.name] = e.target.value;
    setStudent(newStudent);
  };

  const handleSubmit = () => {
    const newStudentsArray = [...studentsArray];
    newStudentsArray.push(student);
    setStudentsArray(newStudentsArray);
    clearForm();
  };

  const clearForm = () => {
    setStudent({
      fName: "",
      lName: "",
      email: "",
    });
  };

  const handleDeleteStudent = (i) => {
    const newStudents = [...studentsArray];
    newStudents.splice(i, 1);
    setStudentsArray(newStudents);
  };

  const handleEditStudent = (i) => {
    setStudent(studentsArray[i]);
    setEditIndex(i);
  };

  const handleUdateStudent = () => {
    const newStudents = [...studentsArray];
    newStudents[editIndex] = student;
    setStudentsArray(newStudents);
    clearForm();
    setEditIndex(null);
  };

  return (
    <>
      <StudentsForm
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
        handleUdateStudent={handleUdateStudent}
      />
      <hr />
      <StudentsTable
        studentsArray={studentsArray}
        handleDeleteStudent={handleDeleteStudent}
        handleEditStudent={handleEditStudent}
      />
    </>
  );
}

export default App;
