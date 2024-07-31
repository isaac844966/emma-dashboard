import { useState, useEffect } from "react";
import {
  CardFollowersWrapper,
  Header,
  OverViewCardContainer,
} from "./components";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme === "true");
    }
  }, []);

  const handleThemeChange = () => {
    setTheme((theme) => !theme);
    localStorage.setItem("theme", !theme);
  };

  return (
    <div className={theme ? "whiteBg" : "darkBg"}>
      <div className="wrapper-container">
        <Header onSetTheme={handleThemeChange} theme={theme} />
        <CardFollowersWrapper theme={theme} />
        <OverViewCardContainer theme={theme} />
      </div>
    </div>
  );
};

export default App;
