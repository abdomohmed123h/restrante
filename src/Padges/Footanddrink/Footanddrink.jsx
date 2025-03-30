import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import stylese from "./Footanddrink.module.css";

export default function Footanddrink() {
  // Category data with correct image paths
  const [categories] = useState([
    {
      name: "Cold Drinks",
      imgUrl: "/src/assets/catero//pizae.jpg",
      link: "/pizza"
    },
    { name: "Burgers", imgUrl: "/src/assets/catero//pizae.jpg", link: "pizza" },
    { name: "Pizza", imgUrl: "/src/assets/catero//pizae.jpg", link: "/pizza" },
    { name: "Wok", imgUrl: "/assets/images/wok.jpg", link: "/wok" },
    {
      name: "Desserts",
      imgUrl: "/assets/images/desserts.jpg",
      link: "/desserts"
    },
    { name: "Pasta", imgUrl: "/assets/images/pasta.jpg", link: "/pasta" }
  ]);

  return (
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between p-3">
        <h1 className="fs-4 fw-bold text-secondary mb-0">
          Food & Drinks <span className="text-dark">› Categories</span>
        </h1>

        <div
          className="d-flex align-items-center position-relative bg-light rounded-pill shadow-sm px-3"
          style={{ width: "250px", height: "40px" }}
        >
          <FaSearch className="text-secondary" />
          <input
            type="search"
            className="form-control border-0 bg-light rounded-pill ms-2"
            placeholder="Search..."
            style={{ flex: 1, outline: "none", boxShadow: "none" }}
          />
        </div>
      </div>

      {/* Category section with scrollable area */}
      <div id="catgory-container">
        <div
          id={stylese.catgory}
          className="d-flex flex-wrap gap-3 justify-content-center align-items-center mt-3 p-4 "
        >
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="category-item text-center d-flex flex-column align-items-center rounded- col-5"
            >
              <img
                src={category.imgUrl}
                alt={category.name}
                className="category-img"
              />
              <p className="mt-2">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
