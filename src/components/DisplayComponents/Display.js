import React from "react";

const Display = (props) => {
  return <div className="display">
    {props.number}{/*props<-the object holding data.attribute<-key of what you want from the object*/}
  </div>;
};

export default Display;