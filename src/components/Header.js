import React from "react";
import NavBar from "./NavBar";
import MyAccountMenu from "./MyAccountMenu";
import logo from "../assets/images/adantrip.png";

const Header = ({ data, myAccountLinks }) => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo"></img>
      <NavBar data={data} />
      <MyAccountMenu menuName="My Account" myAccountLinks={myAccountLinks} />
    </div>
  );
};

export default Header;
