import React from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./Tbody";
export const Table = (props) => {
    return (
        <div className="row clearfix">
            <div className="col-md-12 column">
                <table className={props.className}
                    id={props.id} >
                    <TableHeader />
                    <TableBody rows={props.rows} handleChange={props.handleChange}
                     handleRemoveSpecificRow={props.handleRemoveSpecificRow}
                     handleEditSpecificRow={props.handleEditSpecificRow}
                     handleSave={props.handleSave} 
                    />
                </table>
            </div>
        </div>
    )
}

export default Table;