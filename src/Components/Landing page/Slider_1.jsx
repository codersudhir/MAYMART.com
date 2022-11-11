import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import style from '../Styles/slider.css'

const images = [
  // "https://bit.ly/3PpUEf3",
  "https://bit.ly/3omf3G2",
  "https://bit.ly/3OoalSw",
  "https://bit.ly/3ck9ZyY",
  'https://bit.ly/3v4577U',
  'https://bit.ly/3PpHAGu',
  'https://jiomartshop.com/wp-content/uploads/2020/01/jiomart.jpg',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1656627002_Hair-Care.jpg',
  'https://www.jiomartexpress.com/images/cms/aw_rbslider/slides/1653975639_The-health-hygiene-store.jpg',
];


const Slider_1 = () => {
    return (
      <div  className="slide-container">
        <Slide>
          {
            images.map((each, index) => <img key={index} style={{width: "100%", height:'300px', paddingTop:'20px'}} src={each} />)
          }
        </Slide>
      </div>    
    )
}

export default Slider_1


