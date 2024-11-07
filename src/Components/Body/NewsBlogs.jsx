import React from "react";
import "./Styles/NewsBlogs.css";

const NewsBlogs = () => {
  const articles = [
    {
      id: 1,
      date: "Mar 2023",
      title: "Taking Beautiful Landscape Photos: How To Do It?",
      imageUrl: require("./Assets/cb-5.jpg"),
    },
    {
      id: 2,
      date: "Mar 2023",
      title: "The Benefit Of Using A Professional Photographic Studio",
      imageUrl: require("./Assets/cb-6.jpg"),
    },
  ];

  return (
    <div className="latest-news">
      <h2 className="text-uppercase">Get Instant Update</h2>
      <h1 className="text-uppercase">
        Latest News <span>& Blogs</span>
      </h1>
      <div className="news-container">
        {articles.map((article) => (
          <div className="news-card" key={article.id}>
            <div
              className="image"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            ></div>
            <div className="content">
              <span className="date">{article.date}</span>
              <h3 className="title">{article.title}</h3>
              <a href="#" className="read-more">
                ...Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
