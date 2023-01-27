import React, { ReactElement, useState } from "react";
import { FaDiscord, FaHeadphones, FaTelegramPlane } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Footer from "../Footer/Footer";
import "./FAQ.css";

interface IFeedbackChannel {
  text: string;
  icon: ReactElement;
  link: string;
}
const feedbackChannels: IFeedbackChannel[] = [
  { text: "Telegram", link: "https://t.me/", icon: <FaTelegramPlane /> },
  { text: "Discord", link: "https://discord.com/", icon: <FaDiscord /> },
  { text: "Support", link: "/", icon: <FaHeadphones /> },
];

interface IAnswerQuestion {
  question: string;
  answer: string;
}

const answerQuestions: IAnswerQuestion[] = [
  {
    question: "How to start investing",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    question: "How much money is needed to start investing?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    question: "Is the Midas.Investments secure?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "How are funds withdrawn from the platform?",
    answer: "In order to withdraw funds, follow these steps",
  },
  {
    question: "How Midas.Investments generates yield for its customers?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What is Midas token and what are its values?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(0);
  return (
    <section className="faq">
      <h2>Frequently asked questions</h2>
      <p>
        Everything you need to know about the Midas. Can't find the answer
        you're looking for? Feel free to contact me directly via:
      </p>
      <div className="feedback__channels">
        {feedbackChannels.map(({ icon, text, link }) => (
          <a href={link}>
            {icon}
            <div className="feedback__channels-text">{text}</div>
          </a>
        ))}
      </div>
      <div className="answers__questions-block">
        {answerQuestions.map(({ answer, question }, index) => (
          <div
            className={
              "answer__question-card " +
              (activeAnswer === index && "answer__question__card-active")
            }
          >
            <div
              className="question-part"
              onClick={() => setActiveAnswer(index)}
            >
              <div className="question__part-text">{question}</div>
              <div
                className={
                  "question__arrow " +
                  (activeAnswer === index && "question__arrow-invert")
                }
              >
                <MdArrowDropDown />
              </div>
            </div>
            <div
              className={
                "answer-part " + (activeAnswer === index && "show-answer")
              }
            >
              {answer}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default FAQ;
