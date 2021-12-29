import React from "react";

let classes = "list-group-item clickable vertical-list"
let activeClasses = classes + " text-warning font-weight-bold"


const HListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  title
}) => {
  return (

    <div>
      {title ? <span style={{ fontWeight: "bold" }}>{title}</span> : null}
      <ul className="list-group list-group-horizontal" style={{ display: "inline-flex" }} >
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item}
            style={{ fontWeight: 400 }}
            className={selectedItem === item ? activeClasses : classes}>
            {item}
          </li>
        ))
        }
      </ul >
    </div>

  );
};
export default HListGroup;