import React from "react";
import Table from "../ControlsComponent/Table";
import { validateField } from "../Common/common";

class ShowListContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      error: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      rows: this.props.listData.rows,
    });
  };

  handleChange = (idx, event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationResult = {};
    validationResult = validateField(name, value);
    const newRows = this.state.rows;
    let isSave;
    let rownumber=idx + 1;
    let fieldValidationError = validationResult.fieldValidationError;
    fieldValidationError=name==="status" ? newRows[idx].formErrors :fieldValidationError
    if (fieldValidationError === true) {
      isSave = true;
    } else {
      fieldValidationError = name==="status"? fieldValidationError : fieldValidationError + " at row:" + rownumber;
      isSave = false;
    }

    newRows[idx] = {
      ...newRows[idx],
      [name]: value,
      isSave,
      formErrors:fieldValidationError
    };

    this.setState({
      rows: newRows,
      error: fieldValidationError,
    });
  };

  handleEditSpecificRow = (idx) => () => {
    let rows = this.props.listData.rows;
    rows.forEach((element, index) => {
      if (index === idx) {
        element.disabled = false;
        element.isSave = element.formErrors===true?true:false
      }
    });

    this.setState({ rows });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = this.state.rows;
    const error="";
    rows.splice(idx, 1);
    this.setState({ rows,error });
  };

  handleSave = (idx) => () => {
    const rows = this.state.rows;
    rows.forEach((element, index) => {
      if (index === idx) {
        element.disabled = true;
        element.isSave = element.formErrors===true?false:true
      }
    });

    this.setState({ rows });
  };
  render() {
    return (
      <div>
        <div className="container">
          {this.state.error === true ? (
            ""
          ) : (
            <div className="error">{this.state.error}</div>
          )}
          {this.state.rows.length>0?
          <Table
            id={"tab_contact"}
            className={"table table-bordered table-hover"}
            rows={this.state.rows}
            handleChange={this.handleChange}
            handleRemoveSpecificRow={this.handleRemoveSpecificRow}
            handleEditSpecificRow={this.handleEditSpecificRow}
            handleSave={this.handleSave}
          />:""}
        </div>
      </div>
    );
  }
}

export default ShowListContactComponent;
