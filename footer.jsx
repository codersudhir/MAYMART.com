// eslint-disable-next-line
import {Modal} from "bootstrap"
import React from "react"
import {Link} from "react-router-dom";  
import "./footerstyle.css"
import Images from "./Images"
class Footer extends React.Component{
    render(){
       return( 
        <footer className="jumbotron footer " >
        <div className="footer_container pl-5 pr-5 m-0 row mblr">
          {/* <!--Footer Content Mostpopular list/ hidded on small screens--> */}
            <ul className="col-md-3 pl-5 ml-1 mbl">
                <li><h2>MOST POPULAR CATEGORIES</h2></li>
                <li><Link to="/content/fruits_vegetables/fresh_fruits">Fruits and Vegetables</Link></li>
                <li><Link to="/content/beverages/tea">Bevereges</Link></li>
                <li><Link to="/content/personal_care/hair_care">Personal Care</Link></li>
                <li><Link to="/">Home Care</Link></li>
                <li><Link to="/content/staples/dry_fruits"></Link></li>
                <li><Link to="/">Baby Care</Link></li>
                <li><Link to="/">Snacks & Branded Foods</Link></li>
                <li><Link to="/">Dairy & Bakery</Link></li>
            </ul>
            {/* <!--Customer Service list--> */}
            <ul className="col-md-3 col-5">
                <li><h2>CUSTOMER SERVICES</h2></li>
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/faqs">FAQ</Link></li>
                <li><Link to="/terms">Terms and conditions</Link></li>
                <li><Link to="/policy">Privacy policy</Link></li>
                <li><Link to="/ewaste">E-waste Policy</Link></li>
            </ul>
            {/* <!--Footer Content Contact Pannel--> */}
            <div className="contact col-md-4 col-6 pr-5 mr-1" style={{"fontSize":"12px!important"}}>
                <h2>CONTACT US</h2>
                WhatsApp us: <span><Link to="tel:+91 99999 99999">+91 99999 99999</Link></span>
                <br/>
                <br/>
                Call Us: <span><Link to="tel:1800 2222 3333">1800 2222 3333</Link></span>
                <p>6:00 AM to 8:00 PM, 365 days</p>
                <p>Please note that you are accessing the BETA Version of 
                    <Link to="https://www.jiomart.com/">www.jiomart.com</Link></p>
                <p>Should you encounter any bugs, glitches, lack of functionality, 
                        delayed deliveries, billing errors or other problems on the beta website, 
                        please email us on 
                        <Link to="mailto:cs@jiomart.com">cs@jiomart.com</Link></p>
                <br className="mbl"/>
                <h2 className="mbl">DOWNLOAD APP</h2>
                <br className="mbl"/>
                <Link to="/" className="mr-3 mbl" data-toggle="modal" data-target="#download"><img src={Images.play_store} alt=""/></Link>
                <Link to="/" className="mbl" data-toggle="modal" data-target="#download1"><img src={Images.ios_store} alt="hello"/></Link>
            </div>
            
        </div>
        {/* <!--Mobile Responive Modal Toogle--> */}
        <div className="fs text-center"><Link to="/" className="mr-3 " data-toggle="modal" 
            data-target="#download"><img src={Images.play_store} alt="" /></Link>
            <Link to="/" data-toggle="modal" data-target="#download1"><img src={Images.ios_store} alt="" /></Link></div>
        <div></div>
        {/* <!--Footer Copyright--> */}
        <div className="fborder mt-3 p-3">
            <div className="copyright container text-left ">
            <p className="mbl m-0" style={{"fontSize":"12px!important"}}>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
            <span>© 2021 All rights reserved. Reliance Retail Ltd.</span></div>
        </div>
        {/* <!--Modals --> */}
        <div className="modal" tabIndex="-1" id="download" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Download Jio Mart</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <span><img src={Images.play_store} alt=""/></span>
                </div>
                <div className="modal-footer">
                  <a href="https://play.google.com/store/apps/details?id=com.jpl.jiomart" target="_blank   " className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" tabIndex="-1" id="download1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Download Jio Mart</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <span ><img src={Images.ios_store} alt=""/></span>
                </div>
                <div className="modal-footer">
                  <a href="https://apps.apple.com/in/app/jiomart/id1522085683" target="_blank  " className="btn btn-primary">Download</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )}
}

export default Footer