import React, { Component } from "react";
import { ILink } from "../../utils/interfaces";
import Image1 from "../../assets/main-cards/1.png";
import Image2 from "../../assets/main-cards/2.png";
import Image3 from "../../assets/main-cards/3.png";

import "./Main.css";

interface ICardMain {
  animation: string;
  title: string;
  link: ILink;
}

const mainCards: ICardMain[] = [
  {
    animation: Image1,
    title: "Stake MIDAS token and earn 30% APY",
    link: {
      text: "Read more",
      href: "/",
    },
  },
  {
    animation: Image2,
    title: "Get increased APY by getting rewards in MIDAS",
    link: {
      text: "How it work?",
      href: "/",
    },
  },
  {
    animation: Image3,
    title: "Buybacks & burns supporting MIDAS growth",
    link: {
      text: "How it work?",
      href: "/",
    },
  },
];

const Main = () => {
  return (
    <section className="main">
      <h1>
        Unlock the full potential of Midas ecosystem
        <br />
        <span>Buy midas token</span>
        <hr />
      </h1>
      <div className="main__cards">
        {mainCards.map(({ animation, title, link: { text, href } }) => (
          <div className="main__card">
            <img src={animation} alt={title} />
            <h3>{title}</h3>
            <a href={href}>{text}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
