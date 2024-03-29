import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import { addToCart, createCartIfNotExists } from "../../../src/helpers/CartManagement";

const CardProductList = (props) => { 
  const product = props.data;

  const handleAddToCart = (id, qty, unitPrice) => {
    // let cart = JSON.parse(localStorage.getItem("cart"))
    addToCart(id, qty, unitPrice)
  }
 
  let file_name = product.image != null && product.image[0] != undefined && product.image != `http://dev.kiidad.com/public/products/img/testing` ? product.image[0].url : "400480132-27.jpg";
  let image_url = `http://dev.kiidad.com/public/products/img/${file_name}`;

  let Product_id = product.id;
  let Product_url = `/product/${Product_id}`;
  
  return (
    <div className="card product-list-view">
      <div className="row g-0">
        <div className="col-md-3 text-center">
        <Link to={Product_url} className="text-decoration-none">
          <img src={image_url} className="img-fluid" alt="..."/> 
        </Link>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle mr-2 d-inline">
              <Link to={Product_url} className="text-decoration-none">
                {product.name}
              </Link>
            </h6>
            {product.isNew && (
              <span className="badge bg-success mr-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger mr-2">Hot</span>}

            <div>
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.star)
                    return (
                      <IconStarFill className="text-warning mr-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary mr-1" key={key} />
                    );
                })}
            </div>
            {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )}
            {product.description && product.description.includes("|") && (
              <ul className="mt-2">
                {product.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          <div className="mb-2">
            <span className="font-weight-bold h5">Rs{product.price}.00</span>
            {product.originPrice > 0 && (
              <del className="small text-muted ml-2">
                Rs{product.originPrice}
              </del>
            )}
            {(product.discountPercentage > 0 || product.discountPrice > 0) && (
              <span className={`rounded p-1 bg-warning ml-2 small`}>
                -
                {product.discountPercentage > 0
                  ? product.discountPercentage + "%"
                  : "$" + product.discountPrice}
              </span>
            )}
          </div>
          {product.isFreeShipping && (
            <p className="text-success small mb-2">
              <IconTruckFill /> Free shipping
            </p>
          )}

          <div className="btn-group btn-block" role="group">
            {/* <button 
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => handleAddToCart(product.id, 1, product.originPrice)}
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
      </div>
    </div>
  );
};

export default CardProductList;
