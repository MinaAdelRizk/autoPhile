import React from "react";

const Like = props => {
  let classes = "like clickable fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
