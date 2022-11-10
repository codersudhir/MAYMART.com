import React, { useEffect, useState } from 'react'
import "./homepage.css"
import Images from "./Images"
import axios from "axios"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'bootstrap';


const Homepage = () => {
    return (
      <div className="ad_1" >
      <div className="container-fluid">
    <div id="demo" className="carousel slide" data-ride="carousel" data-interval="3000" >
      
      <ul className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
        <li data-target="#myCarousel" data-slide-to="7"></li>
        <li data-target="#myCarousel" data-slide-to="8"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="c" src={Images.homepage_1} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_2} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_3} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_4} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_5} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_6} alt="Board" />
        </div>
        <div className="carousel-item">
          <img  className="c" src={Images.homepage_7} alt="Board" />
        </div>
        <div className="carousel-item">
          <img  className="c" src={Images.homepage_8} alt="Board" />
        </div>
        <div className="carousel-item">
          <img className="c" src={Images.homepage_9} alt="Board" />
        
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
<span className="carousel-control-next-icon"></span>
</a>
    </div>
    </div>
    <br />
        <h2 className="space text-center">Shop From Top Categories</h2>

        <div className="card-deck home-mbl justify-content-center" >
        <img  src={Images.homepage_10} alt="image" />
        <img src={Images.homepage_11} alt="image" />
        <img src={Images.homepage_12} alt="images"/>
        <img src={Images.homepage_13} alt=".\Assets\homepage\image"/>
        <img src={Images.homepage_14} alt=".\Assets\homepage\image"/>
      </div>
      </div>
      <div className="card">
        <center>
          <img className="ad" src={Images.homepage_card_3} alt="adverstizement board" />
          <img className="ad" src={Images.homepage_card_4} alt="adverstizement board" />
        </center>
      </div>
      <br/>
      <h2 className="space hideInmob">TOP DEALS</h2>
      <div style={{display:"flex"}}>
        
      </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
            <div id="imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover" data-wrap="true">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <img src={Images.homepage_25} className="img-responsive"/>
                </div>
                <div className="col-md-6">
                  <img src={Images.homepage_26} className="img-responsive"/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <img src={Images.homepage_27} className="img-responsive"/>
                </div>
                <div className="col-md-6">
                  <img src={Images.homepage_28} className="img-responsive"/>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="imageCarousel" data-slide="prev">
     <span className="carousel-control-prev-icon"></span>
   </a>
   <a className="carousel-control-next" href="#imageCarousel" data-slide="next">
     <span className="carousel-control-next-icon"></span>
   </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  <br />
 <br />
  <h2 className="space"><strong>Offers On Daily Essentials</strong></h2>
        <div className="container-fluid mb-5 mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                <div className="product-1 align-items-center p-2 text-center">
                  <img src={Images.homepage_29} alt="image" width="80%"/>
                  <h5>Dals And Pulses</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                <div className="product-1 align-items-center p-2 text-center">
                  <img src={Images.homepage_30} alt="image" width="80%"/>
                  <h5>Atta, Flours & Sooji</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_31} alt="image" width="80%"/>
                  <h5>Edible Oils</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_32} alt="image" width="80%"/>
                  <h5>Salt,Sugar & Jaggery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_33} alt="image" width="80%"/>
                  <h5>Bath And Hand Wash</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_34} alt="image" width="80%"/>
                  <h5>Tooth Paste</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_35} alt="image" width="80%"/>
                  <h5>Noodle,Paste,Vermicelli</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card22  thumbnail mt-3">
                <div className="product-1 align-items-center p-2 text-center">
                  <span className="badge bg-danger text-light" >10%<br/>OFF</span>
                  <img src={Images.homepage_36} alt="image" width="80%"/>
                  <h5>Biscuits & Cookies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="space ">Shop By Categories</h2>

              <div className="container-fluid">

                <div id=" imageCarousel" className="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover" data-wrap="true">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row ad_2" >
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src={Images.homepage_37} alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Personal Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src={Images.homepage_38} alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Home Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src={Images.homepage_39} alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Baby Care</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three ">
                            <img className="card-img-top seven" src={Images.homepage_40} alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Staples</strong></h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="card thumbnail text-center three " >
                            <img className="card-img-top seven" src={Images.homepage_41} alt="Card image" />
                            <div className="card-body">
                              <h5 className="card-title"><strong>Evening Snacks</strong></h5>
                            </div>
                          </div>
                        </div>

                        <a href="#imageCarousel" className="carousel-control left" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a href="#imageCarousel" className="carousel-control right" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <br/>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_5}className="aj" alt="sss" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_6} className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_7} className="aj" alt="sss" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_8} className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="space"><strong>Offers On Household & Personal care</strong></h2>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <span className="badge bg-danger text-light" >Upto <br/> 20% OFF</span>
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src={Images.homepage_43} alt="image" width="80%"/>
                    <h5>All Purpose Cleaners</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <span className="badge bg-danger text-light" >Upto <br/>25% OFF</span>
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src={Images.homepage_44} alt="image" width="80%"/>
                    <h5>Detergent And Bars</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 50% OFF</span>
                    <img src={Images.homepage_45} alt="image" width="80%"/>
                    <h5>Feminine Hygiene</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 50% OFF</span>
                    <img src={Images.homepage_46} alt="image" width="80%"/>
                    <h5>Skin Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 30% OFF</span>
                    <img src={Images.homepage_47} alt="image" width="80%"/>
                    <h5>Oral Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 35% OFF</span>
                    <img src={Images.homepage_48} alt="image" width="80%"/>
                    <h5>Hair Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/> 10% OFF</span>
                    <img src={Images.homepage_49} alt="image" width="80%"/>
                    <h5>Baby Care</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card23  thumbnail mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <span className="badge bg-danger text-light" >Upto <br/>50% OFF</span>
                    <img src={Images.homepage_50} alt="image" width="80%"/>
                    <h5>Paper Tissue Napkin</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="container-fluid mb-5 mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_9} className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_10} className="aj" alt="sss"/> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_11} className="aj" alt="sss"/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card thumbnail mt-3 ">
                  <div className="product-12 ">
                    <img src={Images.homepage_card_12} className="aj" alt="sss" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Homepage
