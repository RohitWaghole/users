import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ButtonComponent = () => {
  const navigate = useNavigate();
  const handleCompanyClick = () => {
    navigate("/update-company");
  };
  const handleUserDetailsClick = () => {
    navigate("/users");
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
        }}
        onClick={handleCompanyClick}
      >
        Company Details
      </button>
      <button
        style={{
          backgroundColor: "#008CBA",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
        }}
        onClick={handleUserDetailsClick}
      >
        User Details
      </button>
    </div>
  );
};

export default ButtonComponent;
