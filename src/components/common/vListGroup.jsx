import React from "react";

let classes = "list-group-item clickable"
let activeClasses = classes + " text-warning font-weight-bold"


const VListGroup = ({
    items,
    selectedItem,
    onItemSelect,
    title
}) => {
    return (

        <div className="vertical-list">
            <h5>Filter By:</h5>
            {title ? <h6>{title}</h6> : null}
            <ul className="list-group-flush p-0" style={{
                width: "100%"
            }}>
                {items.map(item => (
                    <li onClick={() => onItemSelect(item)}
                        key={item}
                        className={selectedItem === item ? activeClasses : classes}>
                        {item.name}
                    </li>
                ))
                }
            </ul >

        </div>


    );
};
export default VListGroup;