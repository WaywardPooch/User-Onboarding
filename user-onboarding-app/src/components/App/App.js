// Import Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// Import Styles
import "./App.css";
// Import Data
import schema from "../../validation/formSchema";
import initialFormValues from "../Form/initialFormValues.json";
import initialFormErrors from "../Form/initialFormErrors.json";
import initialSiteUsers from "../Form/initialSiteUsers.json";
// Import Components
import Header from "../Header/Header";
import Form from "../Form/Form";

// Declare Variables
const initialSubmitDisabled = true;

// Declare Class
const App = () => {
  const [userList, setUserList] = useState(initialSiteUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formSubmitDisabled, setFormSubmitDisabled] = useState(
    initialSubmitDisabled
  );

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
};

export default App;
