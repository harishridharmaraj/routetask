import React from "react";
import "./styles.css";

const careersData = [
  {
    topic: "Best 11 Product-Based Companies for Product Managers in India ",
    content:
      "Who is a product manager? What are the best product-based companies for product managers in",
    dated: "14 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
  },
  {
    topic: " Top 13 Product Based Companies for AI Freshers",
    content:
      "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
    dated: "10 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
  },
  {
    topic: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
    content:
      "As product-based companies continually innovate and strive to stay ahead of the competition, they seek",
    dated: "10 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp",
  },
  {
    topic: "Best Product-Based Companies for Game Developers in 2023",
    content:
      "The world of game development has been booming in recent years as the importance of",
    dated: "14 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp",
  },
  {
    topic:
      "Software Developer vs Software Engineer: Who is More Important in 2023?",
    content:
      "In the tech world, two roles play an important role in deciding our digital life,",
    dated: "14 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Software-Developer-vs-Software-Engineer-1200x675.jpg",
  },
  {
    topic: "Best Product-Based Companies for AI Engineers in 2023",
    content:
      "There was a time when AI was the future. Well, it has now become our",
    dated: "14 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png",
  },
];

const Career = () => {
  return (
    <div className="main">
      {careersData.map((items, index) => (
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

export default Career;
