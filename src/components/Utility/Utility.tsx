import React from "react";
import "./Utility.css";

import Image1 from "../../assets/utility/utility1.png";
import Image2 from "../../assets/utility/utility2.png";
import Image3 from "../../assets/utility/utility3.png";

interface IUtilityCard {
  title: string;
  text: JSX.Element;
  img: string;
}

const utilityCards: IUtilityCard[] = [
  {
    title: "Payout Split",
    text: (
      <p>
        <span>
          10% of rewards earned by Midas platform community is used to{" "}
        </span>
        buyback MIDAS token <span>from the open market</span>
      </p>
    ),
    img: Image1,
  },
  {
    title: "Farming",
    text: (
      <p>
        <span>
          Midas team will regularly launch farming activities on third party
          decentralized exchanges for community{" "}
        </span>
        to earn high APR rewards for staking
        <span> of MIDAS token in liquidity pools </span>
      </p>
    ),
    img: Image2,
  },
  {
    title: "APY Boost",
    text: (
      <p>
        <span>10% of rewards earned by Midas platform community is used </span>
        to buyback MIDAS token
        <span> from the open market </span>
      </p>
    ),
    img: Image3,
  },
];

const Utility = () => {
  return (
    <section className="utility">
      <h2>Midas token utility</h2>
      <div className="utility__cards">
        {utilityCards.map(({ title, text, img }, index) => (
          <div className="utility__card" key={index}>
            <div className="utility__card-text">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <img src={img} alt={title} />
          </div>
        ))}
        <button>Learn more</button>
      </div>
    </section>
  );
};

export default Utility;
