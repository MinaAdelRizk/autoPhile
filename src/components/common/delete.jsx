import React from "react";

const Delete = props => {
    let classes = "like clickable fa fa-trash";
    return (
        <i
            onClick={props.onClick}
            className={classes}
            aria-hidden="true"
        />
    );
};

export default Delete;