/* eslint-disable react/prop-types */
import CardFollowers from "./CardFollowers";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import Wrapper from "../assets/Wrappers/OverviewCardWrapper";

const cardData = [
  {
    name: "@nathanf",
    icon: facebook,
    counts: 1987,
    followersSubcribers: "Followers",
    day: "12 Today",
    color: "hsl(163, 72%, 41%)",
    className: "facebook",
  },
  {
    name: "@nathanf",
    icon: twitter,
    counts: 1044,
    followersSubcribers: "Followers",
    day: "99 Today",
    color: "hsl(163, 72%, 41%)",
    className: "twitter",
  },
  {
    name: "@realnathanf",
    icon: instagram,
    counts: "11K",
    followersSubcribers: "Followers",
    day: "1099 Today",
    color: "hsl(163, 72%, 41%)",
    className: "instagram",
  },
  {
    name: "Nathan F.",
    icon: youtube,
    counts: 8239,
    followersSubcribers: "Subscribers",
    day: "144 Today",
    color: "hsl(356, 69%, 56%)",
    className: "youtube",
  },
];

const CardFollowersWrapper = ({ theme }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        {cardData.map((card, index) => (
          <CardFollowers
            key={index}
            name={card.name}
            icon={card.icon}
            counts={card.counts}
            followersSubcribers={card.followersSubcribers}
            day={card.day}
            color={card.color}
            className={card.className}
            theme={theme}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CardFollowersWrapper;
