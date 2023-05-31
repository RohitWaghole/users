import React from "react";

import Signup from "./Signup";
import Login from "./login";
import ButtonComponent from "./ButtonComponent";
import UpdateCompany from "./UpdateCompany";
import UserButtons from "./UserButtons";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

const Handling = () => {
  return (
    <div>
      <Signup />
      <Login />
      <ButtonComponent />
      <UpdateCompany />
      <UserButtons />
      <AddUser />
      <UpdateUser />
    </div>
  );
};

export default Handling;
