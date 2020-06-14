import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import ExtraInfo from "./ExtraInfo";
//import Test from "./Test";
import "../index.css";

import CssBaseline from "@material-ui/core/CssBaseline";
//import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import PublicIcon from "@material-ui/icons/Public";
import RedeemIcon from "@material-ui/icons/Redeem";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
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

  const extraData = [
    {
      id: 1,
      icon: publicIcon,
      title: "Explore the World",
      text:
        "Start to discrover. We will help you to visit any place you can imagine",
    },
    {
      id: 2,
      icon: giftIcon,
      title: "Gifts & Rewards",
      text: "Get even more from our service. Spend less and travel more",
    },
    {
      id: 3,
      icon: price,
      title: "Best prices",
      text:
        "We are comparing hundreds travel websites to find best price for you",
    },
    {
      id: 4,
      icon: support,
      title: "27/7 Support",
      text: "Contact us anytime, anywhere. We will resolve any issues ASAP",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header
          menuName="My Account"
          menuLinks={menuLinks}
          myAccountLinks={myAccountLinks}
        />
        <section className="main">
          <MainContent
            title="Cheap Flights Best Deals"
            subtitle="Search hundreds of travel sites at once"
          />
          <ExtraInfo extraData={extraData} />
        </section>
      </Container>
    </React.Fragment>
  );
}

export default App;
