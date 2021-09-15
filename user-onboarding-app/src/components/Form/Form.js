import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-section">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="text" />
        </label>
        <label>
          I accept terms of service:
          <input type="checkbox" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
