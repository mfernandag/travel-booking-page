import React from "react";
import Icon from "@material-ui/core/Icon";

const ExtraInfo = (props) => {
  return (
    <div>
      {props.extraData.map((data) => {
        return (
          <div key="id">
            <Icon>{data.icon}</Icon>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraInfo;
