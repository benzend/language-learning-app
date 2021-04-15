import React, { useState } from "react";
import "./App.css";
import Contact from "./components/contact-components/Contact";
import Friends from "./components/friends-components/Friends";
import Languages from "./components/languages-components/Languages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import FrenchPathHandler from "./components/home-page-components/french/FrenchPathHandler";
import GermanPathHandler from "./components/home-page-components/german/GermanPathHandler";

function App() {
  const [currentLang, setCurrentLang] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  const getLangRoute = (lang) => {
    switch (lang) {
      case "german":
        return (
          <Route
            path="/german"
            render={() => (
              <GermanPathHandler icon={currentIcon} currentLang={currentLang} />
            )}
          />
        );

      case "french":
        return (
          <Route
            path="/french"
            render={() => (
              <FrenchPathHandler icon={currentIcon} currentLang={currentLang} />
            )}
          />
        );
      default:
        return null;
    }
  };
  const LangRoute = getLangRoute(currentLang);
  return (
    <div className="App">
      <Router>
        <Switch>
          {!currentLang ? (
            <Route
              exact
              path="/"
              render={() => (
                <MainHeader icon={currentIcon} currentLang={currentLang} />
              )}
            />
          ) : null}
          <Route
            path="/contact"
            render={() => (
              <Contact currentLang={currentLang} icon={currentIcon} />
            )}
          />
          <Route
            path="/friends"
            render={() => (
              <Friends currentLang={currentLang} icon={currentIcon} />
            )}
          />
          <Route
            path="/languages"
            render={() => (
              <Languages
                setCurrentLang={setCurrentLang}
                setCurrentIcon={setCurrentIcon}
                currentLang={currentLang}
                icon={currentIcon}
              />
            )}
          />
          {LangRoute}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
