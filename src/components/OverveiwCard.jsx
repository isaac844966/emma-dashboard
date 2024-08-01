/* eslint-disable react/prop-types */

import Wrapper from "../assets/Wrappers/OverviewCard";
import { MdOutlineArrowDropUp } from "react-icons/md";

const OverveiwCard = ({ name, counts, icon, day, theme, color }) => {
  return (
    <Wrapper>
      <div className={theme ? "overview bg-light" : "bg-dark overview"}>
        <div className="views">
          <h3>{name}</h3>
          <img src={icon} alt={name} />
        </div>
        <div className="counts">
          <h2 className={theme ? "darkText" : "lightText"}>{counts}</h2>
          <p style={{ color: color, display: "flex", alignItems: "center" }}>
            <MdOutlineArrowDropUp />
            {day}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default OverveiwCard;
