import React from "react";
import { ILink } from "../../utils/interfaces";
import "./Footer.css";

interface Link {
  header: string;
  links: ILink[];
}

const footerLinks: Link[] = [
  {
    header: "Products",
    links: [
      {
        href: "/",
        text: "Platform",
      },
      {
        href: "/",
        text: "Swap",
      },
      {
        href: "/",
        text: "Yield Automated Strategies",
      },
    ],
  },
  {
    header: "Resources",
    links: [
      {
        href: "/",
        text: "Blog",
      },
      {
        href: "/",
        text: "Community",
      },
      {
        href: "/",
        text: "Earn Save Invest Repeat",
      },
    ],
  },
  {
    header: "Help",
    links: [
      {
        href: "/",
        text: "Contacts",
      },
      {
        href: "/",
        text: "Support",
      },
      {
        href: "/",
        text: "User greement",
      },
    ],
  },
  {
    header: "Buy Midas coin",
    links: [
      {
        href: "/",
        text: "Spiritswap",
      },
      {
        href: "/",
        text: "Boombswap",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {footerLinks.map(({ header, links }, index) => (
          <div key={index} className="footer-column">
            <h3>{header}</h3>
            <ul >
              {links.map(({ href, text }, index) => (
                <li key={index}>
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-column">
          <p>MDF AG</p>
          <p>Felsenstrasse 62, 8832, Wollerau, Switzerland</p>
          <p>CHE-323.398.672</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// remove dot in li with css