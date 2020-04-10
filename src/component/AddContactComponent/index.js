import React, { Component } from "react";
import "../../App.css";
import FormContainer from "../ControlsComponent/FormContainer";

class AddContactComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="AddContact">
        <h3>Add Contact</h3>
        <FormContainer />
        </div>
      </div>
    );
  }
}
export default AddContactComponent;
