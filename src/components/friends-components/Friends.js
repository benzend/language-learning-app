import React from "react";
import MainHeader from "../headers/MainHeader";

const Friends = ({ currentLang, icon }) => {
  return (
    <div>
      <MainHeader currentLang={currentLang} icon={icon} />
      <h2> Your Friends </h2>
    </div>
  );
};

export default Friends;
