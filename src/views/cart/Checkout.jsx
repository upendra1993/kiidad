import React, { Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import {loadCart, addToCart, reduceFromCart, clearCart, removeItem} from "../../helpers/CartManagement";
import axios from "../../helpers/axios";
import toast from "react-hot-toast";

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {
      cartitemsload: [],
      email:'',
      mobile : '',
      name: '',
      handleChangeaddress_line_1: '',
      handleChangeaddress_line_2: '',
      country: '',
      state: '',
      zip: '',
      billing_name: '' ,
      billing_address_line_1: '',
      billing_address_line_2: '' ,
      billing_country:'',
      billing_state: '' ,
      billing_zip:  ''
    };
  }
 
  handleSubmit = event =>{
    event.preventDefault();
    const user = {
      email: this.state.email,
      mobile: this.state.phone_number,
      name: this.state.name,
      handleChangeaddress_line_1: this.state.handleChangeaddress_line_1,
      handleChangeaddress_line_2: this.state.handleChangeaddress_line_2,
      country: this.state.country,
      state: this.state.state,
      zip: this.state.zip,
      billing_name: this.state.billing_name,
      billing_address_line_1: this.state.billing_address_line_1,
      billing_address_line_2: this.state.billing_address_line_2,
      billing_country: this.state.billing_country,
      billing_state: this.state.billing_state,
      billing_zip:  this.state.billing_zip,
      produts: this.state.cartitems
    }
    // const total ={
    //   total : 500
    // }
    // const cart_products ={}
    console.log(user);
    axios.post('transactions/create', user).then(response => {
      console.log(response);
    }).catch( error => {
      console.log(error);
    })
    toast.success("Register successful");
    
  }
  loadCartItems = async =>{
    const cartitemsload = loadCart();
    console.log(cartitemsload);
  }
  handleChangeemail = event =>{
    this.setState({ email: event.target.value});
  }
  handleChangemobile_number = event =>{
    this.setState({ phone_number: event.target.value});
  }
  handleChangename = event =>{
    this.setState({ name: event.target.value});
  }
  handleChangeaddress_line_1 = event =>{
    this.setState({ handleChangeaddress_line_1: event.target.value});
  }
  handleChangeaddress_line_2 = event =>{
    this.setState({ handleChangeaddress_line_2: event.target.value});
  }
  handleChangecountry = event =>{
    this.setState({ country: event.target.value});
  }
  handleChangestate = event =>{
    this.setState({ state: event.target.value});
  }
  handleChangezip = event =>{
    this.setState({ zip: event.target.value});
  }
  handleChangebilling_name = event =>{
    this.setState({ billing_name: event.target.value});
  }
  handleChangebilling_address_line_1 = event =>{
    this.setState({ billing_address_line_1: event.target.value});
  }
  handleChangebilling_address_line_2 = event =>{
    this.setState({ billing_address_line_2: event.target.value});
  }
  handleChangebilling_country = event =>{
    this.setState({ billing_country: event.target.value});
  }
  handleChangebilling_state = event =>{
    this.setState({ billing_state: event.target.value});
  }
  handleChangebilling_zip = event =>{
    this.setState({ billing_zip: event.target.value});
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Checkout</h1>
        </div>
        <div className="container mb-3">
        
          <div className="row">
          <form onSubmit = { this.handleSubmit } >
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-header">
                  <IconEnvelope className="i-va" /> Contact Info
                </div>
                <div className="card-body">
                  <div className="row g-3">
                  
                  
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        name="email"
                        onChange= {this.handleChangeemail}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="mobile_number"
                        className="form-control"
                        placeholder="Mobile no"
                        aria-label="Mobile no"
                        onChange= {this.handleChangemobile_number}
                      />
                    </div>

                   
                    
                    
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconTruck className="i-va" /> Shipping Infomation
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange= {this.handleChangename}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="address_line_1"
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                        onChange= {this.handleChangeaddress_line_1}

                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="address_line_2"
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                        onChange= {this.handleChangeaddress_line_2}
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select"  
                        name="country"
                        onChange= {this.handleChangecountry}
                      required>
                        <option value>-- Country --</option>
                        <option>Sri Lanka</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                    <input
                        name="state"
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                        onChange= {this.handleChangestate}
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                      name="zip"
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                        onChange= {this.handleChangezip}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">

              
                <div className="card-header">
                  <IconReceipt className="i-va" /> Billing Infomation
                  {/* Same as Shipping Infomation - start */}
                  {/* <div className="form-check form-check-inline ml-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Same as Shipping Infomation
                    </label>
                  </div> */}
                  {/* Same as Shipping Infomation - end */}
                </div>
                 

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        name="billing_name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange= {this.handleChangebilling_name}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="billing_address_line_1"
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        onChange= {this.handleChangebilling_address_line_1}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="billing_address_line_2"
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                        onChange= {this.handleChangebilling_address_line_2}
                      />
                    </div>
                    <div className="col-md-4">
                    <select className="form-select" 
                      name="billing_country"
                      required
                      onChange= {this.handleChangebilling_country}
                      >
                        <option value>-- Country --</option>
                        <option>Sri Lanka</option>
                      </select>
                    </div>
                    <div className="col-md-4">

                    <input
                        name="billing_state"
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                        required
                        onChange= {this.handleChangebilling_state}
                      />

                    </div>
                    <div className="col-md-4">
                      <input
                        name="billing_zip"
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                        onChange= {this.handleChangebilling_zip}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border-info">
                <div className="card-header bg-info">
                  <IconCreditCard2Front className="i-va" /> Payment Method
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3 border-bottom">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          defaultChecked
                          required
                        />
                        <label className="form-check-label" htmlFor="credit">
                          Credit card
                          <img
                            src="../../images/payment/cards.webp"
                            alt="..."
                            className="ml-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          required
                        />
                        <label className="form-check-label" htmlFor="paypal">
                          PayPal
                          <img
                            src="../../images/payment/paypal_64.webp"
                            alt="..."
                            className="ml-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name on card"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Card number"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Expiration month"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Expiration year"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer border-info">
                  <button type="button" className="btn btn-block btn-info">
                    Pay Now <strong>$162</strong>
                  </button>
                </div>
              </div>
            </div>
             <button type = "submit"> Add </button>
            </form>
            {/* <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <IconCart3 className="i-va" /> Cart{" "}
                  <span className="badge bg-secondary float-right">3</span>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Second product</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Third item</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$162</strong>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutView;
