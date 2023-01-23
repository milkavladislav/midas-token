import React, { ReactElement } from "react";
import "./Stake.css";
import { TbWallet } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { RiStackFill } from "react-icons/ri";

interface IStakeInformation {
  icon: ReactElement;
  title: string;
  text: string;
}

const stakeInformation: IStakeInformation[] = [
  {
    icon: <TbWallet />,
    title: "$30 million",
    text: "Are staking MIDAS tokens",
  },
  {
    icon: <BsPeopleFill />,
    title: "2,600 users",
    text: "Are staking MIDAS tokens",
  },
  {
    icon: <RiStackFill />,
    title: "1,800,000",
    text: "Total staked MIDAS",
  },
];

const Stake = () => {
  return (
    <section className="stake">
      <h2>
        Stake Midas token and <span>Earn 30% APY</span>
      </h2>
      <h3>
        MIDAS token
        <span> is based on Fantom network with total supply of </span>
        5,000,000 tokens<span> generating rewards for its holders.</span>
      </h3>
      <div className="stake__information">
        <h3>Over</h3>
        <div className="stake__information-cards">
          {stakeInformation.map(({ icon, title, text }) => (
            <div className="stake__information-card">
              {icon}
              <div className="information__card-text">
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stake;
