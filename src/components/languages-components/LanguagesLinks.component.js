import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: white;
    background-color: #00b1fd;
    border-radius: 10px;
    padding: 2px 8px;
    border: 3px solid #00b1fd;
    transition: all 0.3s ease;
    &:hover {
      color: #00b1fd;
      background-color: white;
      border: 3px solid #00b1fd;
    }
  }
`;

export default function LanguagesLinks({
  setCurrentLang,
  currentLang,
  setCurrentIcon,
}) {
  const clickHandler = (lang) => {
    if (lang === "german") {
      setCurrentIcon(
        "https://img.icons8.com/fluent/48/000000/germany-circular.png"
      );
    } else if (lang === "french") {
      setCurrentIcon("https://image.flaticon.com/icons/png/512/496/496394.png");
    }
    setCurrentLang(lang);
  };
  return (
    <StyledDiv>
      <Link to="/french" onClick={() => clickHandler("french")}>
        French
      </Link>
      <Link to="/german" onClick={() => clickHandler("german")}>
        German
      </Link>
    </StyledDiv>
  );
}
