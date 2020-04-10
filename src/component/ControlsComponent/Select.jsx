import React from 'react';
const Select = (props) => {
    return(
        <div className="form-group">
            <label htmlFor={props.name}> {props.title} </label>
            <select
              value={props.selected}
              name={props.name}
              onChange={props.handleChange}
              disabled={props.disabled}
              id={props.id}
              >
              
              {props.options.map(option => {
                return (
                  <option 
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>)
}

export default Select;