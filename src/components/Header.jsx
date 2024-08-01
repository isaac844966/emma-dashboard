/* eslint-disable react/prop-types */
import Wrapper from "../assets/Wrappers/Header";
import { MdOutlineToggleOn } from "react-icons/md";
import { MdOutlineToggleOff } from "react-icons/md";

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
          <div className="button" onClick={handleSetTheme}>
            {theme ? (
              <MdOutlineToggleOff />
            ) : (
              <MdOutlineToggleOn className="dark-btn" />
            )}
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
