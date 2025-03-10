import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className="btn position-sticky mb-3 mb-md-0"
      onClick={() => navigate(props.page || "/")}
    >
      <i className="fa-solid fa-arrow-left me-2"></i> Back
    </button>
  );
};

export default BackButton;
