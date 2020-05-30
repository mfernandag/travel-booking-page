import React from "react";
import NavBar from "./NavBar";

function App() {
  const menuLinks = [
    { label: "Hotels", url: "/hotels" },
    { label: "Rooms", url: "/rooms" },
    { label: "Flights", url: "/flights" },
    { label: "Cars", url: "/cars" },
    { label: "Experiences", url: "/experiences" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>app de viajes</p>
      </header>
      <NavBar menuLinks={menuLinks} />
    </div>
  );
}

export default App;
