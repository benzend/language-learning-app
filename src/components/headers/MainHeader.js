import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Advisor } from "../Advisor";

const Header = styled.div`
  max-width: 1200px;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    flex: 1;
    height: 100%;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #008eca;
    }
  }
`;

const MarginContainer = styled.div`
  background-color: #00b1fd;
`;

const StyledLink = styled.div`
  color: black;
  text-decoration: none;
  i {
    font-size: 2.4rem;
    position: relative;
    top: 15px;
  }
  img {
    position: relative;
    top: 15px;
  }
`;

const MainHeader = ({ icon, currentLang }) => {
  const getAdvisor = (lang) => {
    if (!lang || lang === "") {
      return <Advisor />;
    } else return null;
  };
  const getHomeLink = (lang) => {
    if (!lang) return "/";
    else if (lang === "german") return "/german";
    else if (lang === "french") return "/french";
  };
  return (
    <MarginContainer>
      <Header>
        <Link to={getHomeLink(currentLang)}>
          <StyledLink>
            <i className="fas fa-home"></i>
          </StyledLink>
        </Link>
        <Link to="/contact">
          <StyledLink>
            <i className="fas fa-phone"></i>
          </StyledLink>
        </Link>
        <Link to="/friends">
          <StyledLink>
            <i className="fas fa-users"></i>
          </StyledLink>
        </Link>
        <Link to="/languages">
          <StyledLink>
            <img
              height="40px"
              src={
                icon ||
                "https://img.icons8.com/dusk/64/000000/question-mark.png"
              }
              alt="language icon"
            />
          </StyledLink>
          {getAdvisor(currentLang)}
        </Link>
      </Header>
    </MarginContainer>
  );
};

export default MainHeader;
