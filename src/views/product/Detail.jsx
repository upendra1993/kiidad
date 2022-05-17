import React, { Component, lazy } from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
import {loadCart, addToCart, reduceFromCart, clearCart, removeItem} from "../../helpers/CartManagement";

const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));

let availability_status = '';

const ProductDetails = '';



const handleAddToCart = (id, qty, unitPrice) => {
  // let cart = JSON.parse(localStorage.getItem("cart"))
  addToCart(id, qty, unitPrice)
  toast.success('Tshirt have been added your cart')
}

class ProductDetailView extends Component {

  handleAdd = async (id, price) => {
    addToCart(id, 1, price)
    await this.loadCartItems();
  }
  
  handleReduce = async (id) => {
    reduceFromCart(id, 1);
    await this.loadCartItems();
  }

  async componentDidMount() {
    await this.loadCartItems();
}
 
  constructor(props) {
    super();
    const Product_id = props.match.params;
    this.state = {
      Product_id:{},
      Product_details:[],
      cartitemsload:[],
      Cart_qty:1
    }
    
  }

  


    
  componentDidMount(){
    const  P_id = this.props.match.params;
    let Product_id_no = (P_id.id) > 5 ? P_id.id : 1 ; 
    let Product_url = `http://dev.kiidad.com/api/products/get-by-id/${Product_id_no}`;
    
    axios.get(Product_url).then(res =>{
    this.setState({ Product_details : res.data });
    // console.log(this.state.Product_details );
    let FirstImagePathUrl =`http://dev.kiidad.com/public/products/img/${this.state.Product_details.images[0].url}`;
    // console.log(this.state.Product_details.images[0].url);
    this.setState({FirstImagePathUrl})
      // console.log(FirstImagePathUrl);

    let SecoundImagUrl = `http://dev.kiidad.com/public/products/img/${this.state.Product_details.images[1].url}`;
    this.setState({ SecoundImagUrl })

    let TherdImageUrl =`http://dev.kiidad.com/public/products/img/${this.state.Product_details.images[2].url}`;
    this.setState({ TherdImageUrl})
    })
    
  

    if(this.state.Product_details.availability = 1){
      availability_status = 'In stock';
    }
    else{
      availability_status = 'Out of stock';
    }
    
    
  }



  loadCartItems = async () =>{
   
    let cartitems = loadCart();
    let cartitemsload = cartitems.items;
    // console.log(cartitemsload);


    for(const cartitemsloaditems of cartitemsload ){
      // console.log(cartitemsloaditems);
      if(cartitemsloaditems.id == this.state.Product_details.id){
        // console.log(this.state.Product_details.id);
        // console.log(cartitemsloaditems.id);
        const Cart_qty = cartitemsloaditems.qty;
        this.setState({Cart_qty})
      }else{
        
      }
    }

  }
   
  
  
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src={this.state.FirstImagePathUrl}
                  className="img-fluid mb-3"
                  alt=""
                />
                <img
                  src={this.state.FirstImagePathUrl}
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src={ this.state.SecoundImagUrl }
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src={ this.state.TherdImageUrl }
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline mr-2">
                  {this.state.Product_details.name}
                </h1>
                <span className="badge bg-success mr-2">New</span>
                <span className="badge bg-danger mr-2">Hot</span>
                {/* <div className="mb-3">
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-secondary mr-1" />|{" "}
                  <span className="text-muted small">
                    42 ratings and 4 reviews
                  </span>
                </div> */}
                <dl className="row small mb-3">
                  <dt className="col-sm-3">Availability</dt>
                  
                  
                    <dd className="col-sm-9">{availability_status}</dd>
                    {/* {console.log(this.state.availability_status)} */}
                    
                  
                  
                  <dt className="col-sm-3">Sold by</dt>
                  <dd className="col-sm-9">Authorised Store</dd>
                  <dt className="col-sm-3">Size</dt>
                  <dd className="col-sm-9">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="sizes"
                       
                      />
                      <label className="form-check-label" htmlFor="sizes">
                        S
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="sizem"
                        
                      />
                      <label className="form-check-label" htmlFor="sizem">
                        M
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="sizel"
                      />
                      <label className="form-check-label" htmlFor="sizel">
                        L
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="sizexl"
                      />
                      <label className="form-check-label" htmlFor="sizexl">
                        XL
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="sizexxl"
                      />
                      <label className="form-check-label" htmlFor="sizexxl">
                        XXL
                      </label>
                    </div>
                  </dd>
                  {/* <dt className="col-sm-3">Color</dt>
                  <dd className="col-sm-9">
                    <button className="btn btn-sm btn-primary p-2 mr-2"></button>
                    <button className="btn btn-sm btn-secondary p-2 mr-2"></button>
                    <button className="btn btn-sm btn-success p-2 mr-2"></button>
                    <button className="btn btn-sm btn-danger p-2 mr-2"></button>
                    <button className="btn btn-sm btn-warning p-2 mr-2"></button>
                    <button className="btn btn-sm btn-info p-2 mr-2"></button>
                    <button className="btn btn-sm btn-dark p-2 mr-2"></button>
                  </dd> */}
                </dl>

                <div className="mb-3">
                  <span className="font-weight-bold h5 mr-2">Rs {this.state.Product_details.price} .00</span>
                  <del className="small text-muted mr-2">Rs 2000 .00</del>
                  {/* <span className="rounded p-1 bg-warning  mr-2 small">
                    -$100
                  </span> */}
                </div>
                <div className="mb-3">
                  <div className="d-inline float-left mr-2">
                    <div className="input-group input-group-sm mw-140">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={()=> this.handleReduce(this.state.Product_details.id, this.state.Product_details.price)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                     
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="1"
                        value={this.state.Cart_qty}
                        
                      />
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={() => this.handleAdd(this.state.Product_details.id, this.state.Product_details.price)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary mr-2"
                    title="Add to cart"
                    onClick={() => handleAddToCart(this.state.Product_details.id, 1, this.state.Product_details.originPrice)}
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-sm btn-warning mr-2"
                    title="Buy now"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} /> Buy now
                  </button> */}
                  {/* <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button> */}
                </div>
                <div>
                  <p className="font-weight-bold mb-2 small">
                    Product Highlights
                  </p>
                  <ul className="small">
                    <li>
                     {this.state.Product_details.description}
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active"
                      id="nav-details-tab"
                      data-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                      Details
                    </a>
                    {/* <a
                      className="nav-link"
                      id="nav-randr-tab"
                      data-toggle="tab"
                      href="#nav-randr"
                      role="tab"
                      aria-controls="nav-randr"
                      aria-selected="false"
                    >
                      Ratings & Reviews
                    </a> */}
                    {/* <a
                      className="nav-link"
                      id="nav-faq-tab"
                      data-toggle="tab"
                      href="#nav-faq"
                      role="tab"
                      aria-controls="nav-faq"
                      aria-selected="false"
                    >
                      Questions and Answers
                    </a> */}
                    <a
                      className="nav-link"
                      id="nav-ship-returns-tab"
                      data-toggle="tab"
                      href="#nav-ship-returns"
                      role="tab"
                      aria-controls="nav-ship-returns"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </a>
                    <a
                      className="nav-link"
                      id="nav-size-chart-tab"
                      data-toggle="tab"
                      href="#nav-size-chart"
                      role="tab"
                      aria-controls="nav-size-chart"
                      aria-selected="false"
                    >
                      Size Chart
                    </a>
                  </div>
                </nav>
                <div className="tab-content p-3 small" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    {this.state.Product_details.description}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-randr"
                    role="tabpanel"
                    aria-labelledby="nav-randr-tab"
                  >
                    {Array.from({ length: 5 }, (_, key) => (
                      <RatingsReviews key={key} />
                    ))}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-faq"
                    role="tabpanel"
                    aria-labelledby="nav-faq-tab"
                  >
                    <dl>
                      {Array.from({ length: 5 }, (_, key) => (
                        <QuestionAnswer key={key} />
                      ))}
                    </dl>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-size-chart"
                    role="tabpanel"
                    aria-labelledby="nav-size-chart-tab"
                  >
                    <SizeChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* <CardFeaturedProduct data={data.products} /> */}
            
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailView;
