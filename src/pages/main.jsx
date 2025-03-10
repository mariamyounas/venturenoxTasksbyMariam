import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonsData } from "../data/data";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-content-center flex-wrap flex-column justify-content-evenly main vh-100">
      <h1> Venturenox Tasks for Mariam</h1>
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className="btn px-5 fw-bold"
          onClick={() => navigate(button.path)}
        >
          {button.label} <br /> {button.subLabel}
        </button>
      ))}
    </div>
  );
};

export default Main;
