import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import style from '../Styles/slider.css'

const images = [
  "https://bit.ly/3IVkLYD",
  "https://bit.ly/3okt4nG",
  "https://offercdn.paytm.com/blog/2019/09/UPI-sweepstakes-banner_50-cashback.jpg",
  "https://bit.ly/3olm2yY",
  'https://bit.ly/3PKWaYM',
  'https://bit.ly/3RQ2UGU',
  'https://bit.ly/3zlmrYk',
  'https://bit.ly/3ojGGiT',
  'https://bit.ly/3Op0DiE',
];


const Slider_2 = () => {
    return (
      <div  className="slide-container">
        <Slide>
          {
            images.map((each, index) => <img key={index} style={{width: "100%", height:'300px', paddingTop:'20px'}} src={each} /> )
          }
        </Slide>
      </div>    
    )
}

export default Slider_2


