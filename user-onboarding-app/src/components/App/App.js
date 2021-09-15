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
  // ========== STATES
  const [userList, setUserList] = useState(initialSiteUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formSubmitDisabled, setFormSubmitDisabled] = useState(
    initialSubmitDisabled
  );

  // ========== HELPER METHODS
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        // Update the user list from API
        setUserList(res.data);
      })
      .catch((err) => {
        // Log error if user list cannot be updated
        console.error(err);
      });
  };
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users")
      .then((res) => {
        // Add new user to user list
        setUserList([res.data, ...userList]);
        // Clear form inputs after submit
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        // Log error if user cannot be added
        console.error(err);
        // Clear form inputs after submit
        setFormValues(initialFormValues);
      });
  };

  // ========== EVENT HANDLERS
  const validateInput = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => setFormErrors({ ...formErrors, [inputName]: "" }))
      .catch((err) =>
        setFormErrors({ ...formErrors, [inputName]: err.errors[0] })
      );
  };
  const updateInput = (inputName, inputValue) => {
    // Check if input is valid
    validateInput(inputName, inputValue);
    // Update the form values accordingly
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = () => {
    // Create new user object (trim whitespace)
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    // Add new user object to user list
    postNewUser(newUser);
  };

  // ========== MARKUP
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
};

export default App;
