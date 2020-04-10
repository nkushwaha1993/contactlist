import React, { Component } from "react";
import { columnsMaterial, listDataMaterial,tableIcons } from "../../component/Common/common.js";
import MaterialTable from "material-table";

class ListContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columnsMaterial,
      listData: listDataMaterial,
    };
  }
  render() {
    return (
      <MaterialTable
        title = {'Contact List'}
        columns={this.state.columns}
        data={this.state.listData}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const listData = [...prevState.listData];
                listData.push(newData);
                return { ...prevState, listData };
              });
            }, 600);
          }),
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState((prevState) => {
                  const listData = [...prevState.listData];
                  listData[listData.indexOf(oldData)] = newData;
                  return { ...prevState, listData };
                });
              }
            }, 600);
          }),
          onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              this.setState((prevState) => {
                const listData = [...prevState.listData];
                listData.splice(listData.indexOf(oldData), 1);
                return { ...prevState, listData };
              });
            }, 600);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        search: false,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
      />
    );
  }
}
export default ListContactComponent;