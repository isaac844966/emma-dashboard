import Wrapper from "../assets/Wrappers/CardFollowers";

/* eslint-disable react/prop-types */
const CardFollowers = ({
  color,
  icon,
  counts,
  followersSubcribers,
  day,
  name,
  className,
  theme,
}) => {
  function handleHover() {
    // if (theme) {
    // } #e1e3f0
  }
  return (
    <Wrapper>
      <div
        className={theme ? "card bg-light" : "bg-dark card"}
        onMouseOver={handleHover}
      >
        <div className={className}></div>
        <div className="header">
          <img src={icon} alt={name} /> <span>{name}</span>
        </div>
        <h1 style={{ color: theme ? "black" : "white" }}>{counts}</h1>
        <h4 style={{ color: "hsl(228, 12%, 44%)" }}>{followersSubcribers}</h4>
        <h6 style={{ color: color }}>- {day}</h6>
      </div>
    </Wrapper>
  );
};

export default CardFollowers;
