import Add from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ThirdStateCheck from "@material-ui/icons/Remove";
import PreviousPage from "@material-ui/icons/ChevronLeft";
import NextPage from "@material-ui/icons/ChevronRight";
import Filter from "@material-ui/icons/FilterList";
import ResetSearch from "@material-ui/icons/Clear";
import SortArrow from "@material-ui/icons/ArrowDownward";

export const tableIcons = {
  Add,
  Remove,
  Delete,
  Edit,
  Check,
  FirstPage,
  LastPage,
  Clear,
  PreviousPage,
  NextPage,
  Search,
  ViewColumn,
  SaveAlt,
  ThirdStateCheck,
  Filter,
  ResetSearch,
  SortArrow,
};

export const columns = [
  { title: "First Name", field: "firstname" },
  { title: "Last Name", field: "lastname" },
  { title: "Email", field: "email" },
  { title: "Phone Number", field: "phonenumber", type: "numeric" },
  {
    title: "Status",
    field: "status",
    lookup: { 1: "Active", 2: "Inactive" },
  },
  { title: "Edit/Save", field: "Edit", type: "" },
  { title: "Delete", field: "Delete", type: "" },
];

export const columnsMaterial = [
  { title: "First Name", field: "firstname" },
  { title: "Last Name", field: "lastname" },
  { title: "Email", field: "email" },
  { title: "Phone Number", field: "phonenumber", type: "numeric" },
  {
    title: "Status",
    field: "status",
    lookup: { 1: "Active", 2: "Inactive" },
  },
];

export const listData = {
  rows: [
    {
      id: 1,
      firstname: "Neeraj",
      lastname: "Kushwaha",
      email: "kush.neeraj1993@gmail.com",
      phonenumber: "7000271294",
      status: "Active",
      formErrors: "",
      firstnameValid: true,
      formValid: true,
      disabled: true,
      isSave: false,
      lastnameValid: true,
      emailValid: true,
      phonenumberValid: true,
    },
  ],
};
export const listDataMaterial = [];

export const statusOptions = ["Active", "Inactive"];

export const validateField = (fieldName, value) => {
  let fieldValidationError = "";
  switch (fieldName) {
    case "firstname":
      let firstnameValid = value === "" ? false : true;
      fieldValidationError = firstnameValid ? true : "Please enter first name";
      break;
    case "lastname":
      let lastnameValid = value === "" ? false : true;
      fieldValidationError = lastnameValid ? true : "Please enter last name";
      break;
    case "email":
      let emailValid = value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      fieldValidationError =
        emailValid === null ? "Please enter valid email" : true;
      break;
    case "phonenumber":
      let phonenumberValid = value.length < 10 || value.length > 10;
      fieldValidationError = phonenumberValid
        ? "Please enter valid number"
        : true;
      break;
    case "status":
      fieldValidationError = true;
      break;
    default:
      break;
  }
  return { fieldValidationError, fieldName };
};
