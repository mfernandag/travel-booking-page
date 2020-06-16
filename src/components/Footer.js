import React from "react";
import FooterNav from "./FooterNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ footerLinks, socialMediaIcons }) => {
  return (
    <React.Fragment>
      <FooterNav footerLinks={footerLinks} />
      <p>Copyright © 2019 Adantrip. All rights reserved.</p>
      {socialMediaIcons.map((icon) => {
        return <FontAwesomeIcon icon={icon} />;
      })}
    </React.Fragment>
  );
};

export default Footer;
