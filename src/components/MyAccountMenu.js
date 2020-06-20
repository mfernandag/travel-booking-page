import React from "react";
//import AccountBoxIcon from "@material-ui/icons/AccountBox"; myAccountLinks={myAccountLinks}
//import Icon from "@material-ui/core/Icon";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MyAccountDropdown from "./MyAccountDropdown";

const MyAccountMenu = ({ myAccountLinks }) => {
  return (
    <div className="myAccountWrapper">
      <MyAccountDropdown
        icon={AccountBoxIcon}
        menuName="My Account"
        myAccountLinks={myAccountLinks}
      />
    </div>
  );
};

export default MyAccountMenu;
