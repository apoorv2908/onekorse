import React from "react";
import "./Styles/ProfessionalClasses.css";

const ProfessionalClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Market Analysing",
      description:
        "Phasellus erat est, consectetur eget fringilla ac, porttitor mollis lectus. Cras dignissim laoreet diam sit amet tempor.",
      imageUrl: require("./Assets/cb-1.jpg"),
      tags: ["Onsite"],
      course: [" 1 Course"],
      rating: 4.1,
      featured: true,
      reviews: 1,
    },
    {
      id: 2,
      title: "Digital Photography",
      description:
        "Mauris dapibus volutpat maximus. Nulla quis mauris quam. In eget est sem. Cras faucibus hendrerit ullamcorper.",
      imageUrl: require("./Assets/cb-2.jpg"),
      tags: ["Online"],
      course: [" 1 Course"],
      rating: 4.0,
      reviews: 1,
    },
    {
      id: 3,
      title: "Indoor Photography",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum luctus est ac scelerisque.",
      imageUrl: require("./Assets/cb-3.jpg"),
      tags: ["Online"],
      course: [" 1 Course"],
      rating: 0.0,
      reviews: 0,
      price: 50,
      originalPrice: 100,
    },
  ];

  return (
    <div className="mb-5">
      <div className="a2 ">
        <h6 className="text-center">TAILORE MADE</h6>
        <h2 className="text-center">
          PROFESSIONAL <span>CLASSES</span>
        </h2>
      </div>
      <div className="professional-classes">
        <div className="class-cards">
          {classes.map((classItem) => (
            <div className="class-card" key={classItem.id}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${classItem.imageUrl})` }}
              >
                <div className="tags">
                  {classItem.tags.map((tag, index) => (
                    <span className="tagsm" key={index}>
                      {tag}
                    </span>
                  ))}
                  {classItem.course.map((course, index) => (
                    <span className="tag " key={index}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-content">
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < classItem.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                  <span> ({classItem.reviews})</span>
                </div>
                <h5>{classItem.title}</h5>
                <p className="text-grey" style={{ fontSize: "12px" }}>
                  {classItem.description}
                </p>
                {classItem.price && classItem.originalPrice ? (
                  <div className="price">
                    <span className="current-price">${classItem.price}</span>
                    <span className="original-price">
                      ${classItem.originalPrice}
                    </span>
                  </div>
                ) : null}
                <hr></hr>
                <div className="text-end">
                  <a href="#" className="view-details text-end">
                    View Details <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalClasses;
