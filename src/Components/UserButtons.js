import React from "react";
import "./UserButtons.css";
import { Link, useNavigate } from "react-router-dom";

const UserButtons = () => {
  const navigate = useNavigate();
  const handleAddUser = () => {
    // Add user logic
    navigate("/add-user");
    console.log("Adding user...");
  };

  const handleUpdateUser = () => {
    // Update user logic
    navigate("/update-user");
    console.log("Updating user...");
  };

  const handleDeleteUser = () => {
    // Delete user logic
    console.log("Deleting user...");
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      <div className="button-container">
        <button className="user-button" onClick={handleAddUser}>
          Add User
        </button>
        <button className="user-button" onClick={handleUpdateUser}>
          Update User
        </button>
        <button className="user-button" onClick={handleDeleteUser}>
          Delete User
        </button>
      </div>
    </div>
  );
};

export default UserButtons;
