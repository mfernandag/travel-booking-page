import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ExtraInfo from "../components/ExtraInfo";
import Footer from "../components/Footer";
//import Test from "./Test";
import "../index.css";

import CssBaseline from "@material-ui/core/CssBaseline";
//import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import PublicIcon from "@material-ui/icons/Public";
import RedeemIcon from "@material-ui/icons/Redeem";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
//import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//library.add(faFacebook, faTwitter);

const publicIcon = <PublicIcon />;
const giftIcon = <RedeemIcon />;
const price = <LoyaltyIcon />;
const support = <LiveHelpIcon />;

function App() {
  const menuLinks = [
    { label: "Hotels", url: "/hotels" },
    { label: "Rooms", url: "/rooms" },
    { label: "Flights", url: "/flights" },
    { label: "Cars", url: "/cars" },
    { label: "Experiences", url: "/experiences" },
  ];

  const myAccountLinks = [
    { label: "Preferences", url: "/" },
    { label: "Notifications", url: "/" },
    { label: "Payment Methods", url: "/" },
    { label: "Travelers", url: "/" },
    { label: "History", url: "/" },
    { label: "Bookmark", url: "/" },
  ];

  const footerLinks = [
    ...menuLinks,
    { label: "About us", url: "/about-us" },
    { label: "Contact", url: "/contact" },
  ];

  const socialMediaIcons = [
    { iconName: faFacebook, url: "https://www.facebook.com/" },
    { iconName: faTwitter, url: "https://twitter.com/home" },
    { iconName: faInstagram, url: "https://www.instagram.com/" },
  ];

  const extraData = [
    {
      icon: publicIcon,
      title: "Explore the World",
      text:
        "Start to discrover. We will help you to visit any place you can imagine",
    },
    {
      icon: giftIcon,
      title: "Gifts & Rewards",
      text: "Get even more from our service. Spend less and travel more",
    },
    {
      icon: price,
      title: "Best prices",
      text:
        "We are comparing hundreds travel websites to find best price for you",
    },
    {
      icon: support,
      title: "27/7 Support",
      text: "Contact us anytime, anywhere. We will resolve any issues ASAP",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header data={menuLinks} myAccountLinks={myAccountLinks} />
        <section className="main">
          <MainContent
            title="Cheap Flights Best Deals"
            subtitle="Search hundreds of travel sites at once"
          />
          <ExtraInfo extraData={extraData} />
        </section>
        <section className="footer">
          <Footer data={footerLinks} socialMediaIcons={socialMediaIcons} />
        </section>
      </Container>
    </React.Fragment>
  );
}

export default App;
