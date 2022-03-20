import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.theme.default.css';

class ProductCarouselView extends Component{
    render(){

        const item = {
            items:[<img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>,
            <img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>,<img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>,<img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>,
            <img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>,<img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"}/>]
        };

        const options = {
            items: 3,
            nav: false,
            Default: 3,
            rewind: true,
            autoplay: true
        };

        return(
            <React.Fragment>
                <OwlCarousel items={3}  options={options}  >
                    <div>{item.items}</div>
                    
                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ProductCarouselView;