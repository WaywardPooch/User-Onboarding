// Import Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// Import Styles
import "./App.css";
// Import Schemas
import schema from "../../validation/formSchema";
// Import Components
import Header from "../Header/Header";
import Form from "../Form/Form";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
};

export default App;
