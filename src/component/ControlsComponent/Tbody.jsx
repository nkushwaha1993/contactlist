import React from 'react';
import Input from '../ControlsComponent/Input';
import Select from '../ControlsComponent/Select';
import Button from '../ControlsComponent/Button';
import { statusOptions } from "../Common/common"
const TableBody = (props) => {
    return (
        <tbody>
            {props.rows.map((item, idx) => (

                <tr id={item.id} key={item.id}>
                    <td>
                        <Input type={'text'} name={'firstname'} id={item.id + item.firstname} value={item.firstname} handleChange={(e)=>props.handleChange(idx,e)}
                            className={'form-control'} disabled={item.disabled} />
                    </td>
                    <td>
                        <Input type={'text'} name={'lastname'} id={item.id + item.lastname} value={item.lastname} handleChange={(e)=>props.handleChange(idx,e)}
                            className={'form-control'} disabled={item.disabled} />
                    </td>
                    <td>
                        <Input type={'email'} name={'email'} id={item.id + item.email} value={item.email} handleChange={(e)=>props.handleChange(idx,e)}
                            className={'form-control'} disabled={item.disabled} />
                    </td>
                    <td>
                        <Input type={'number'} name={'phonenumber'} id={item.id + item.phonenumber} value={item.phonenumber} handleChange={(e)=>props.handleChange(idx,e)}
                            className={'form-control'} disabled={item.disabled} />
                    </td>
                    <td>
                        <Select title={''}
                            selected={item.status}
                            name={'status'}
                            options={statusOptions}
                            id={item.id + item.status}
                            placeholder={''}
                            handleChange={(e)=>props.handleChange(idx,e)} disabled={item.disabled} />
                    </td>

                    {item.isSave ?
                        <td>
                            <Button className={'button-tbl'} disabled={false} action={props.handleSave(idx)} title={<i className="fa fa-save fa-lg" />} >
                            </Button>
                        </td> :
                        <td>
                            <Button className={'button-tbl'} disabled={false} action={props.handleEditSpecificRow(idx)} title={<i className="fa fa-edit fa-lg" />} >
                            </Button>

                        </td>}
                    <td>
                        <Button className={'button-tbl'} disabled={false} action={props.handleRemoveSpecificRow(idx)} title={<i className="fa fa-trash fa-lg" />} >
                        </Button>
                    </td>

                </tr>
            ))}
        </tbody>
    )
}

export default TableBody;