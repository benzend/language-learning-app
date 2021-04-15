import React from "react";
import MainHeader from "../headers/MainHeader";

const Contact = ({ currentLang, icon }) => {
  return (
    <div>
      <MainHeader currentLang={currentLang} icon={icon} />
      <h2> Contact Page </h2>
    </div>
  );
};

export default Contact;
