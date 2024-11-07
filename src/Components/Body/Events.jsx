import React from "react";
import "./Styles/Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Brainstorm Event Company Names",
      location: "United States • December 2023 - January 2024",
      price: "$245.00",
      imageUrl: require("./Assets/p1.png"),
    },
    {
      id: 2,
      title: "The Joy of Music God Constrate",
      location: "United States • December 2023 - January 2024",
      price: "$245.00",
      imageUrl: require("./Assets/p2.png"),
    },
    {
      id: 3,
      title: "Creative Online Learning Environment",
      location: "United States • December 2023 - January 2024",
      price: "$245.00",
      imageUrl: require("./Assets/p3.png"),
    },
    {
      id: 4,
      title: "State Business Registration",
      location: "United States • December 2023 - January 2024",
      price: "$245.00",
      imageUrl: "url-to-image-4.jpg",
    },
  ];

  return (
    <div className="d1">
      <div className="upcoming-events mt-5">
        <div className="a2 d-flex justify-content-between">
          <div>
            <h2 className="text-uppercase">
              Upcoming <span>Events</span>
            </h2>
            <p style={{ width: "400px" }}>
              This page aims to share timely and valuable information for you
              about the various events that.
            </p>
          </div>
          <div>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <div
                className="event-image"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              ></div>
              <div className="event-info">
                <button className="book-ticket">Book Tickets</button>
                <h3 className="event-title text-uppercase">{event.title}</h3>
                <p className="event-location">{event.location}</p>
              </div>
              <div className="event-price">
                <span>{event.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
