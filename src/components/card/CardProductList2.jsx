import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToCart, createCartIfNotExists } from "../../../src/helpers/CartManagement";


const CardProductList2 = (props) => {
  const product = props.data;
  const handleAddToCart = (id, qty, unitPrice) => {
    // let cart = JSON.parse(localStorage.getItem("cart"))
    addToCart(id, qty, unitPrice)
  }

  let Product_id = product.id;
  let Product_url = `/product/${Product_id}`;

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-9">
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
            {product.star > 0 && (
              <span className="badge bg-secondary">
                <IconStarFill className="text-warning i-va" /> {product.star}
              </span>
            )}
          </div>

          <div className="card-footer">
            <div className="mb-2">
              <span className="font-weight-bold h5 mr-2">${product.price}</span>
              {product.originPrice > 0 && (
                <del className="small text-muted mr-2">
                  ${product.originPrice}
                </del>
              )}
              {(product.discountPercentage > 0 ||
                product.discountPrice > 0) && (
                <span className={`rounded p-1 bg-warning mr-2 small`}>
                  -
                  {product.discountPercentage > 0
                    ? product.discountPercentage + "%"
                    : "$" + product.discountPrice}
                </span>
              )}
              {product.isFreeShipping && (
                <span className="text-success small mb-2">
                  <IconTruckFill /> Free shipping
                </span>
              )}
            </div>

            <div className="btn-group btn-block" role="group">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => handleAddToCart(product.id, 1, product.originPrice)}
                title="Add to cart"
                
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Add to wishlist"
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList2;
