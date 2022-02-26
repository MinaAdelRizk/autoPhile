import React from 'react';

const CheckBox = ({ name, label, handleChange, error, ...rest }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                id={name}
                name={name}
                {...rest} />
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>

    )
}
export default CheckBox;