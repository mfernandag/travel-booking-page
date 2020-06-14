import React from "react";
import SearchBar from "./SearchBar";
import CustomizedRadios from "./CustomizedRadios";

const MainContent = ({ title, subtitle }) => {
  return (
    <div className="">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div>
        <SearchBar />
      </div>
      <CustomizedRadios />
    </div>
  );
};

export default MainContent;
