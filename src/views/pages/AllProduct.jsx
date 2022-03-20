import React  from "react";
import axios from "axios";
import CardIcon from "../../components/card/CardIcon";




export default class AllProduct extends React.Component {
    
   state = {
      AllProducts: []
  }
  
componentDidMount(){
   axios.get('http://dev.kiidad.com/api/products/get-all')
   .then(res => {
       
       const Products = res.data;
       this.setState({ Products });
      //  console.log("Products", Products);
       this.setState({AllProducts: res.data})
   })
}
 

   render(){
      
      const iconProducts = this.state.AllProducts;
      const rows = [...Array(Math.ceil(iconProducts.length / 3))];
      // chunk the products into the array of rows
      const productRows = rows.map((row, idx) =>
        iconProducts.slice(idx * 2, idx * 2 + 4)
      );
      
      return productRows.map((row, idx) => (
         <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
           <div className="row g-3">
             {row.map((product, indx) => {
               // const ProductImage = this.components["../../images/products/tshirt_red_480x400.webp"];
              
               return (
                 <div key={indx} className="col-md-3">
                   <CardIcon
                     name={product.name}
                     price={product.price}
                     tags={product.tags}
                     description={product.description}
                     
                   >
                    <img style={{textAlign: 'center'}} src="../../images/products/p8.jpg" ></img>
                   </CardIcon>
                 </div>
               );
             })}
           </div>
         </div>
       ));
     }

   
          

          
              
             
          }

          


