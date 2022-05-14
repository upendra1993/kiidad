import React, { lazy, Component } from "react";

import axios from "../helpers/axios";
import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";

import ElasticCrousel from "../components/carousel/ElasticCrousel";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const ProductCarouselView = lazy(() => import("../components/carousel/ProductCarousel"));
const CardDealsOfTheDay = lazy(() => import("../components/card/CardDealsOfTheDay"));




class HomeView extends Component {
  

  state = {
    Products: []
}

componentDidMount(){
    axios.get('http://dev.kiidad.com/api/products/get-all-available')
    .then(res => {
        
        const Products = res.data;
        this.setState({ Products });
        // console.log("Products", Products);
    })
}

  render() {

    let carsouleCont = (products) => {
    
      const iconProducts = this.state.Products;
      const rows = [...Array(Math.ceil(iconProducts.length / 3))];
      // chunk the products into the array of rows
      const productRows = rows.map((row, idx) =>
        iconProducts.slice(idx * 4, idx * 4 + 4) 
      );
  
      return productRows.map((row, idx) => (
        <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
          <div className="row g-3">
            {row.map((product, indx) => {
              // const ProductImage = this.components["../../images/products/tshirt_red_480x400.webp"];
            //  console.log(product);
             let file_name = product.image != null && product.image[0] != undefined  ?  product.image[0].url : "";
             let image_url = `http://dev.kiidad.com/public/products/img/${file_name}`;
             
              return (
                <div key={indx} className="col-md-3">
                  
                  <CardIcon
                    id={product.id}
                    name={product.name} 
                    price={product.price}
                    tags={product.tags}
                    description={product.description}
                   
                    // imageurl={product.image != null && product.image[0] != undefined  ?  product.image[0].url : ""}
                    
                  >
                   <img style={{textAlign: 'center'}} src={image_url} ></img>
                  </CardIcon>
                </div>
              );
            })}
          </div>
        </div>
      ));
    }

    const iconProducts = data.apiProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 3))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    // const carouselContent = productRows.map((row, idx) => (
    //   <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
    //     <div className="row g-3">
    //       {row.map((product, indx) => {
    //         // const ProductImage = this.components["../../images/products/tshirt_red_480x400.webp"];
    //         console.log("product", product)
    //         return (
    //           <div key={indx} className="col-md-3">
    //             <CardIcon
    //               name={product.name}
    //               price={product.price}
    //               tags={product.tags}
                  
    //             >
    //              <img style={{textAlign: 'center'}} src="../../images/products/p8.jpg" ></img>
    //             </CardIcon>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // ));

    const carouselContent = carsouleCont(iconProducts);
  

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">

              {/* <ProductCarouselView /> */}

              {/* <ElasticCrousel /> */}

              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
              <Support />
            </div>
            <div className="col-md-3">
              <CardLogin className="mb-3" />
              <CardImage src="../../images/banner/Watches.webp" to="promo" />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}

export default HomeView;
