import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styels from "./Catgroyprodect.module.css";
import axios from "axios";

export default function Catgroyprodect() {
  const { catname } = useParams(); // Extract category name
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const documentId = queryParams.get("documentId");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/categroyos/${documentId}?populate=*`)
      .then((res) => {
        console.log(res.data.data.prodects);
        setProductData(res.data.data.prodects); // Store the response data
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    const validRoutes = [
      "burger",
      "pasta",
      "pizza",
      "colddrink",
      "wok",
      "desserts",
      "pasta"
    ];
    if (!validRoutes.includes(catname)) {
      navigate("/error"); // Correct syntax for navigation
    }
  }, [catname, navigate]); // Dependency array

  return (
    <>
      <div className={`flex-grow-1 ${styels.catgroyprodect}`}>
        <div className="d-flex justify-content-between p-3 ">
          <h1 className="fs-4 fw-bold text-secondary mb-0">
            <Link to={"../"} className="nav-underline">
              <HiArrowNarrowLeft className="bg-body-secondary rounded-4 fs-1" />
            </Link>{" "}
            Food & Drinks <span className="text-dark">› {catname}</span>
            <h1> 1565225665655 {documentId}</h1>
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
        <h1 className="fs-1 p-3">{catname}</h1>
        <div className="d-flex flex-wrap">
          {productData.length === 0 ? (
            <p>Loading categories...</p>
          ) : (
            productData.map((product, index) => (
              <ProductCard
                key={index}
                name={product.prodect_name}
                price={product.price}
              />
            ))
          )}
        </div>
      </div>
      ;
    </>
  );
}
