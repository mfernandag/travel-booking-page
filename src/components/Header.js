import React from "react";
import NavBar from "./NavBar";
import MyAccountMenu from "./MyAccountMenu";
import logo from "../assets/images/adantrip.png";

const Header = ({ menuLinks, myAccountLinks }) => {
  return (
    <div>
      <img src={logo} alt="logo"></img>
      <NavBar menuLinks={menuLinks} />
      <div>
        <MyAccountMenu menuName="My Account" myAccountLinks={myAccountLinks} />
      </div>
    </div>
  );
};

export default Header;
