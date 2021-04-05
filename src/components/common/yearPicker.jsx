import React from 'react';

const YearPicker = ({ name, label, ...rest }) => {

    let minOffset = 0, maxOffset = 20;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];

    for (let i = minOffset; i <= maxOffset; i++) {
        allYears.push(thisYear - i);
    }

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                {allYears.map(y => <option key={y} value={y.value}>{y}</option>)}
            </select>
        </div>
    )
}

export default YearPicker;