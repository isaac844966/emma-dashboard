/* eslint-disable react/prop-types */
import Wrapper from "../assets/Wrappers/Header";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Header = ({ onSetTheme, theme }) => {
  const handleSetTheme = () => {
    onSetTheme((theme) => !theme);
  };
  return (
    <Wrapper>
      <header>
        <div className="header-content">
          <h1 style={{ color: theme ? "black" : "white" }}>
            Social media Dashboard
          </h1>
          <p style={{ color: "hsl(228, 34%, 66%)" }}>Total Followers:23,004</p>
        </div>
        <div className="toggleTheme">
          <h4 style={{ color: theme ? "black" : "white" }}>Dark Mode</h4>
          <button onClick={handleSetTheme}>
            {theme ? <FaRegMoon /> : <FaMoon />}
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
