import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserValid = localStorage.getItem("isUserValid");
    if (!isUserValid) {
      alert("you are not valid user");
      navigate("/login");
    }
  }, []);
  return <div>Dashboard</div>;
};
