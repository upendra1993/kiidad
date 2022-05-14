import React from "react";
import { Link } from "react-router-dom";
const CardIcon = (props) => {
  let Product_id = props.id;
  let Product_url = `/product/${Product_id}`;
  return (
    <Link to={Product_url} className="text-decoration-none">
      <div className="card text-center">
        <div className="card-body">
          {props.children}
          <h6 className="card-title text-capitalize">{props.name}</h6>
          <div className="card-text text-success">Rs. {props.price}.00</div>
          <small className="text-muted">{props.tags}</small>
          {/* <small className="text-muted">{props.imageurl}</small> */}
          {/* <small className="card-title text-capitalize">{props.description}</small> */}
        </div>
      </div>
    </Link>
  );
};

export default CardIcon;
