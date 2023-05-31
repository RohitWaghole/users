import React from "react";
// import Company from './Components/Company'
import Login from "./Components/login";
// import Download from './Components/Download'
import "./App.css";
// import ReadExcel from './Components/ReadExcel';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Components/Signup";
import ButtonComponent from "./Components/ButtonComponent";
import UpdateCompany from "./Components/UpdateCompany";
import UserButtons from "./Components/UserButtons";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import Handling from "./Components/Handling";
import { Button } from "semantic-ui-react";
import Company from "./Components/Company";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <ButtonComponent />
          </Route>
        </Switch>
      </BrowserRouter> */}

      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ButtonComponent />} />
          <Route path="/update-company" element={<UpdateCompany />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/company" element={<Company />} />
          <Route path="/users" element={<UserButtons />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
