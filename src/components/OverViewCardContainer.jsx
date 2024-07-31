/* eslint-disable react/prop-types */
import OverveiwCard from "./OverveiwCard";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import Wrapper from "../assets/Wrappers/OverviewCardWrapper";
const overviewCardData = [
  {
    name: "Page Views",
    icon: facebook,
    counts: 87,
    day: "3%",
    color: "hsl(163, 72%, 41%)",
  },
  {
    name: "Likes",
    icon: facebook,
    counts: 52,
    day: "2%",
    color: "hsl(356, 69%, 56%)",
  },
  {
    name: "Likes",
    icon: instagram,
    counts: 5462,
    day: "2257%",
    color: "hsl(356, 69%, 56%)",
  },
  {
    name: "Profile Views",
    icon: instagram,
    counts: "52K",
    day: "1375%",
    color: "hsl(163, 72%, 41%)",
  },
  {
    name: "Retweets",
    icon: twitter,
    counts: 117,
    day: "1375%",
    color: "hsl(163, 72%, 41%)",
  },
  {
    name: "Likes",
    icon: twitter,
    counts: 507,
    day: "553%",
    color: "hsl(356, 69%, 56%)",
  },
  {
    name: "Likes",
    icon: youtube,
    counts: 107,
    day: "19%",
    color: "hsl(356, 69%, 56%)",
  },
  {
    name: "Likes",
    icon: youtube,
    counts: 1407,
    day: "12%",
    color: "hsl(356, 69%, 56%)",
  },
];

const OverViewCardContainer = ({ theme }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {overviewCardData.map((card, index) => (
          <OverveiwCard
            key={index}
            name={card.name}
            icon={card.icon}
            counts={card.counts}
            day={card.day}
            color={card.color}
            theme={theme}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default OverViewCardContainer;
