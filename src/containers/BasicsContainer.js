import React, { useState } from "react";
import ConjugationContainer from "./conjugationContainer";
import MatchContainer from "./matchContainer";
import ProgressHeader from "../components/headers/ProgressHeader";
import FinishedLesson from "../components/navigational-components/FinishedLesson";
import { Intro } from "../components/BasicsContainer/Intro.component";

const BasicsContainer = (props) => {
  const [section, updateSection] = useState(0);

  let lessonProgress = (section * 100) / 3;

  let currentSection = () => {
    if (section === 0) {
      return <Intro updateSection={() => updateSection(section + 1)} />;
    } else if (section === 1) {
      return (
        <MatchContainer updateSection={() => updateSection(section + 1)} />
      );
    } else if (section === 2) {
      return (
        <ConjugationContainer
          updateSection={() => updateSection(section + 1)}
        />
      );
    } else if (section === 3) {
      return <FinishedLesson returnToMain={props.returnToMain} />;
    }
  };

  return (
    <>
      <ProgressHeader
        returnToMain={props.returnToMain}
        progress={lessonProgress + "%"}
      />
      {currentSection()}
    </>
  );
};

export default BasicsContainer;
