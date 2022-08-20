import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToCart, createCartIfNotExists } from "../../../src/helpers/CartManagement";


const CardProductGrid = (props) => {
  const product = props.data;
  let file_name = product.image != null && product.image[0] != undefined ? product.image[0].url : "400480132-27.jpg";
  let image_url = `http://dev.kiidad.com/public/products/img/${file_name}`;
  const handleAddToCart = (id, qty, unitPrice) => {
    // let cart = JSON.parse(localStorage.getItem("cart"))
    addToCart(id, qty, unitPrice)
  }
  let Product_id = product.id;
  let Product_url = `/product/${Product_id}`;
  return (
    <div className="card product-grid-view">
      <Link to={Product_url} className="text-decoration-none">
          <img src={image_url} className="img-fluid" alt="..."/> 
      </Link>
      {product.isNew && (
        <span className="badge bg-success position-absolute mt-2 ml-2">
          New
        </span>
      )}
      {product.isHot && (
        <span className="badge bg-danger position-absolute r-0 mt-2 mr-2">
          Hot
        </span>
      )}
      {(product.discountPercentage > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ml-2 small ${
            product.isNew ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product.discountPercentage > 0
            ? product.discountPercentage + "%"
            : "$" + product.discountPrice}
        </span>
      )}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={Product_url} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <div className="my-2">
          <span className="font-weight-bold h5">Rs {product.price}.00</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ml-2">Rs {product.originPrice}.00</del>
          )}
          <span className="ml-2">
            {Array.from({ length: product.star }, (_, key) => (
              <IconStarFill className="text-warning mr-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group btn-block" role="group">
          {/* <button
            type="button"
            onClick={() => handleAddToCart(product.id, 1, product.originPrice)}
            className="btn btn-sm btn-primary"
            title="Add to cart"
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button> */}
          {/* <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            title="Add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CardProductGrid;
