import React from "react";
import "./Metrics.css";
import MetaMask from "../../assets/metrics/Metamask.png";
import Link from "../../assets/metrics/Link.png";

interface IMetrics {
  count: number;
  title: string;
}

const metrics: IMetrics[] = [
  {
    count: 47572397,
    title: "Market cap",
  },
  {
    count: 183241,
    title: "Volume (24 hours)",
  },
  {
    count: 2575183,
    title: "Circulation supply",
  },
  {
    count: 19.24,
    title: "Current price",
  },
];

interface IMetricButton {
  image: string;
  title: string;
  link: string;
}

const metricButtons: IMetricButton[] = [
  {
    image: MetaMask,
    title: "Add to Metamask",
    link: "/",
  },
  {
    image: Link,
    title: "Smart contract",
    link: "/",
  },
];

const Metrics = () => {
  return (
    <section className="metrics">
      <h2>Midas token metrics</h2>
      <div className="metrics__content">
        <div className="metrics__cards">
          {metrics.map(({ count, title }) => (
            <div className="metrics__card">
              <h3>${count}</h3>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="metrics__buttons">
          {metricButtons.map(({ image, title, link }) => (
            <a href={link} className="metrics__button">
              <img src={image} alt={image} />
              <p>{title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
