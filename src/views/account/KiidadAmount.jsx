import React from "react";
import { Component } from "react/cjs/react.production.min";

class KiidadAmount extends Component {
    
  render(){
      return(
         <div className="container">
             <div className="row kiidad-amount">
             <div className="col-md-4 kiidad-amount-item kiidad-amount-item1"> 
                <div className="kiidad-amount-title">Pending Amount</div>
                {/* <div className="kiidad-amount-price">Rs 15200.00</div> */}
             </div>
             <div className="col-md-4 kiidad-amount-item kiidad-amount-item2"> 
                <div className="kiidad-amount-title">Waiting Amount</div>
                {/* <div className="kiidad-amount-price">Rs 12400.00</div> */}
             </div>
             <div className="col-md-4 kiidad-amount-item kiidad-amount-item3"> 
                <div className="kiidad-amount-title">Reserved Amount</div>
                {/* <div className="kiidad-amount-price">Rs 98600.00</div> */}
             </div>
         </div>
         </div>
      );
  }
}

export default KiidadAmount;

