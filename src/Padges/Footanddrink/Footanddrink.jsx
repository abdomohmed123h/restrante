import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import stylese from "./Footanddrink.module.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import ProductCard2 from "../ProductCard1/ProductCard";

export default function Footanddrink() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categroyos?populate=*")
      .then((res) => {
        console.log(res.data);

        // Directly use the data array
        const formattedCategories = res.data.data.map((item) => ({
          name: item.name,
          link: item.link,
          documentId: item.documentId,
          // If image not available, use a placeholder
          imgUrl: "http://localhost:1337" + item.imgUrl.url
        }));

        setCategories(formattedCategories);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <div className="flex-grow-0">
      <div className="d-flex justify-content-between p-3">
        <h1 className="fs-4 fw-bold text-secondary mb-0">
          <Link to={"../"} className="nav-underline">
            <HiArrowNarrowLeft className="bg-body-secondary rounded-4 fs-1" />
          </Link>{" "}
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

      {/* Category section */}
      <div id="catgory-container">
        <div id={stylese.catgory} className="d-flex flex-wrap gap-3 mt-3 p-4">
          {categories.length === 0 ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((category, index) => (
              <Link
                to={`${category.link}?documentId=${category.documentId}`}
                key={index}
                className="category-item text-center d-flex flex-column align-items-center rounded col-12 col-md-5 col-lg-4"
              >
                <img
                  src={category.imgUrl}
                  alt={category.name}
                  className="category-img"
                  style={{
                    width: "120px",
                    height: "100px"
                  }}
                />
                <p className="mt-2">{category.name}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
