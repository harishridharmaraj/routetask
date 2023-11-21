import React from "react";
import "./styles.css";

const fullStackData = [
  {
    topic: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
    content:
      "When you’re hiring a full-stack developer, what are the most important things you look for?",
    dated: "15 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
  },
  {
    topic: "Top Differences: Full Stack Developer vs Software Engineer 2023",
    content:
      "A Full Stack Developer is a tech all-rounder. They work on both the front and",
    dated: "15 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
  },
  {
    topic: "Horizontal vs Vertical Scaling for Efficient System Design",
    content:
      "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
    dated: "10 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
  },
  {
    topic: "Best Books to Learn Full-Stack Development",
    content:
      "Are you interested in becoming a full-stack developer but not sure where to start? In",
    dated: "9 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
  },
  {
    topic: "Top 10 Product-Based Companies for Full-Stack Developers [2023]",
    content:
      "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
    dated: "8 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
  },
  {
    topic: "7 Best Full-Stack Development Online Courses [2023]",
    content:
      "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
    dated: "31 August 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
  },
];

const Fullstack = () => {
  return (
    <div className="main">
      {fullStackData.map((items, index) => (
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

export default Fullstack;
