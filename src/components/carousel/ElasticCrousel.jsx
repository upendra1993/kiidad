import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

class ElasticCrousel extends Component {


    

    state = {
      items: [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
      ]
    }

    
  
    render () {
      const { items } = this.state;
      return (
        <Carousel enableAutoPlay autoPlaySpeed={1400} breakPoints={breakPoints}>
          {
          items.map(item => 
          <div key={item.id}>
              {item.title}
            <img src={"https://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"} />
          </div>)
          
          }
        </Carousel>
      )
    }
  }

  export default ElasticCrousel;