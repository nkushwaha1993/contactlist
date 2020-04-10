import React from 'react';
import {columns} from "../Common/common";
const TableHeader = () => {
    
    return (
        <thead>
            <tr>
                {columns.map((item, idx) => (
                    <th className="text-center" key={idx}> {item.title} </th>
                ))}
            </tr>
        </thead>)
}

export default TableHeader;