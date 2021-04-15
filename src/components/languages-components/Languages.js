import React from "react";
import MainHeader from "../headers/MainHeader";
import LanguagesLinks from "./LanguagesLinks.component";

const Languages = ({ currentLang, setCurrentLang, setCurrentIcon, icon }) => {
  return (
    <div>
      <MainHeader icon={icon} />
      <h2> Your Languages </h2>
      <LanguagesLinks
        setCurrentIcon={setCurrentIcon}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
    </div>
  );
};

export default Languages;
