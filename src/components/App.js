import React from "react";
import Header from "./Header";
import Test from "./Test";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
      </Container>
    </React.Fragment>
  );
}

export default App;
