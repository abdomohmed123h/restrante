import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styels from "./Catgroyprodect.module.css";
import axios from "axios";
import { BsCart3 } from "react-icons/bs";
import Sidcar from "../Sidcart/Sidcar";
import { usecart } from "../Sidcart/cartStore";

export default function Catgroyprodect() {
  const { catname } = useParams(); // Extract category name
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const documentId = queryParams.get("documentId");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/categroyos/${documentId}`, {
        params: {
          populate: {
            prodects: {
              populate: "*"
            }
          }
        }
      })
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
  const { cattindex, setCattindex, cartItems } = usecart();

  return (
    <>
      <div className={`flex-grow-1 ${styels.catgroyprodect}`}>
        {cattindex && <Sidcar />}

        <div className="d-flex justify-content-between p-3 ">
          <h1 className="fs-4 fw-bold text-secondary mb-0">
            <Link to={"../"} className="nav-underline">
              <HiArrowNarrowLeft className="bg-body-secondary rounded-4 fs-1" />
            </Link>{" "}
            Food & Drinks <span className="text-dark">› {catname}</span>
            <h1> 1565225665655 {documentId}</h1>
          </h1>

          <div>
            <div className="position-relative">
              <BsCart3
                className="fs-1"
                onClick={() => {
                  setCattindex(true);
                }}
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.reduce((acc, product) => acc + product.quantity, 0)}
              </span>
            </div>
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
                image={
                  product.imgUrl?.[0]?.url
                    ? "http://localhost:1337" + product.imgUrl[0].url
                    : "/placeholder-image.jpg"
                }
                prodect={product}
              />
            ))
          )}
        </div>
      </div>
      ;
    </>
  );
}
