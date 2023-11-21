import React from "react";
import "./styles.css";

const datasciData = [
  {
    topic: "Impact of Certification Programs on Hiring Data Scientists",
    content:
      "Data scientists are the creators behind transforming the raw data into edible data insights. These",
    dated: "15 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1200x600.webp",
  },
  {
    topic: "Top Product-Based Companies for Data Science Freshers",
    content:
      "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    dated: "10 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
  },
  {
    topic: "What is the Difference between Data Science and Data Engineering?",
    content:
      "India has been making some serious waves in the world of data. Just like the",
    dated: "8 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
  },
  {
    topic: "Top 10 Data Science Tools in 2023",
    content:
      "Data Science is an in-demand profession and will continue growing in the coming years. From",
    dated: "1 November 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools-1200x675.jpg",
  },
  {
    topic: "Best Data Science Books to Learn 2023",
    content:
      "Today, we’re going to talk about something really cool: data science. It’s all about using",
    dated: "25 October 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
  },
  {
    topic: "Top Product-Based Companies for Data Scientists in 2023",
    content:
      "We all know about the kind of buzz surrounding data science right now, it is",
    dated: "5 October 2023 ",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
  },
];

const DataSci = () => {
  return (
    <div className="main">
      {datasciData.map((items, index) => (
        <div className="card" key={index}>
          <img src={items.img} alt="none" className="imgs" />
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

export default DataSci;
