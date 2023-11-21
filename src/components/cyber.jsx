import React from "react";
import "./styles.css";

const CyberData = [
  {
    topic: "What Is Hacking? Types of Hacking & More",
    content:
      "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    dated: "25 September 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
  },
  {
    topic: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    content:
      "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    dated: "27 December 2022 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
  },
  {
    topic:
      "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    content:
      "Look around today, you will witness that we are more reliant on technology and devices",
    dated: "20 November 2022 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
  },
  {
    topic: "8 Different Types of Cybersecurity and Threats Involved",
    content:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
    dated: "9 November 2022 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1200x675.png",
  },
  {
    topic:
      "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    content:
      "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    dated: "22 June 2022 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
  },
  {
    topic: "Top 7 Cyber Security Attacks in Real Life",
    content:
      "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
    dated: "10 June 2022 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-1200x375.jpg",
  },
];

const Cyber = () => {
  return (
    <div className="main">
      {CyberData.map((items, index) => (
        <div className="card" key={index}>
          <img src={items.img} alt="" className="imgs" />
          <div className="content">
            <h2>{items.topic}</h2>
            <p>{items.content}</p>
          </div>
          <hr />
          <div>
            <p>{items.dated}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cyber;
