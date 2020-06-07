import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
//import Test from "./Test";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "../index.css";

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
        </section>
      </Container>
    </React.Fragment>
  );
}

export default App;
