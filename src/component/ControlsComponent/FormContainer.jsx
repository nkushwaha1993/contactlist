import React, { Component } from 'react';
import Input from '../ControlsComponent/Input';
import Select from '../ControlsComponent/Select';
import Button from '../ControlsComponent/Button';
import { statusOptions, validateField, listData } from "../Common/common";
import ShowContactListComponent from "../ShowContactListComponent";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newContact: {
                id: 1,
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: '',
                status: 'Active',
                formErrors: '',
                firstnameValid: false,
                formValid: false,
                disabled: true,
                isSave: false,
            },
            statusOptions: statusOptions,
        }
    }

    handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        let validationResult = {};
        validationResult = validateField(name, value);
        const { fieldValidationError, fieldName } = validationResult
        let validPropName, validPropValue;
        const formErrors = fieldValidationError !== true ? fieldValidationError : ''
        switch (fieldName) {
            case 'firstname':
                validPropName = "firstnameValid";
                validPropValue = fieldValidationError ? fieldValidationError : false
                break;
            case 'lastname':
                validPropName = "lastnameValid";
                validPropValue = fieldValidationError ? fieldValidationError : false
                break;
            case 'email':
                validPropName = "emailValid";
                validPropValue = fieldValidationError ? fieldValidationError : false
                break;
            case 'phonenumber':
                validPropName = "phonenumberValid";
                validPropValue = fieldValidationError ? fieldValidationError : false
                break;
            default:
                break;
        }

        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                [name]: value,
                formErrors,
                [validPropName]: validPropValue,
            }
        }), () => { this.validateForm() })
    }

    validateForm = () => {
        const formValid = this.state.newContact.firstnameValid === true && this.state.newContact.lastnameValid === true &&
            this.state.newContact.emailValid === true && this.state.newContact.phonenumberValid === true ? true : false;

        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                formValid
            }
        }))
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let id = listData.rows.length + 1;
        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                id: id
            }
        }), () => { this.updateListData() });
        console.log(listData)
    }

    updateListData = () => {
        listData.rows.push(this.state.newContact)
        this.setState({
            newContact: {
                id: 1,
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: '',
                status: 'Active',
                formErrors: '',
                firstnameValid: false,
                formValid: false,
                disabled: true,
                isSave: false,
            },
            statusOptions: statusOptions,
        })
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <Input type={'text'}
                        title={'First Name'}
                        id={this.state.newContact.id + "firstname"}
                        name={'firstname'}
                        value={this.state.newContact.firstname}
                        placeholder={'Enter your first name'}
                        handleChange={this.handleChange}
                        className={'form-input'}
                        disabled={false} />
                    <Input type={'text'}
                        title={'Last Name'}
                        id={this.state.newContact.id + "lastname"}
                        name={'lastname'}
                        value={this.state.newContact.lastname}
                        placeholder={'Enter your last name'}
                        handleChange={this.handleChange}
                        className={'form-input'}
                        disabled={false} />
                    <Input type={'email'}
                        title={'Email'}
                        name={'email'}
                        id={this.state.newContact.id + "email"}
                        value={this.state.newContact.email}
                        placeholder={'Enter your email'}
                        handleChange={this.handleChange}
                        className={'form-input'}
                        disabled={false} />
                    <Input type={'number'}
                        title={'Phone Number'}
                        name={'phonenumber'}
                        id={this.state.newContact.id + "phonenumber"}
                        value={this.state.newContact.phonenumber}
                        placeholder={'Enter your phone number'}
                        handleChange={this.handleChange}
                        className={'form-input'}
                        disabled={false} />
                    <Select title={'Status'}
                        name={'status'}
                        id={this.state.newContact.id + "status"}
                        options={this.state.statusOptions}
                        value={this.state.newContact.status}
                        handleChange={this.handleChange}
                        disabled={false} selected={this.state.newContact.status} />
                    <div className="error">
                        {this.state.newContact.formErrors}
                    </div>
                    <Button className={'button'} disabled={!this.state.newContact.formValid} action={this.handleFormSubmit} title={'Add Contact'} />
                </form>
                {listData.rows.length > 0 ?
                    <div className="ShowContact">
                        <h3>Contact List</h3>
                        <ShowContactListComponent listData={listData} />
                    </div>
                    : null}
            </div >

        );
    }
}

export default FormContainer;
