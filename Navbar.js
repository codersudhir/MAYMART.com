import React from "react"
import $ from 'jquery';
import "./Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    $(function () {
        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });
    
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
    
    document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
    everyitem.addEventListener('mouseover', function(e){
    
        let el_link = this.querySelector('a[data-bs-toggle]');
    
        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
        }
    
    });
    everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
    
        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
        }
    
    
    })
    });
    
    }
    // end if innerWidth
    }); 

    return (
        <header className="fixed-top">
    <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" >
            <div id="dismiss">
                <i className="fas fa-times fa-2x"></i>
            </div>

            <div className="sidebar-header"  >
                <div className="row">
                <ul className="d-flex">
                    <li><i className="fas fa-user-circle"></i></li>
                    <li><h6>Hello, Sign in</h6></li>   
                </ul> 
                </div>  
                <div className="row">  
                <ul  className="d-flex ">
                    <button type="button" className="ml-2"><Link to="/login">Account</Link></button>
                    <button type="button">Orders</button>
                </ul>     
                </div>  
            </div>

            <ul className="list-unstyled components" >
                <Link to="/jiomart-ui-clone-react"><p>Home</p></Link>
                <a href="/"><p>Shop by category</p></a>
                <p>My List</p>
                <p>My Subscription</p>
                <p>JioMart Wallet</p>
                <p>All Offers</p>
                <hr />
                <p>My Account</p>
                <p>About Us</p>
                <p>Need Help</p>
                <p>Guide</p>
                <hr />
                    <div className="mb-5 pb-3">
                        <b><p className="font-weight-bold">CONTACT US</p></b>
                    <p >WhatsApp us : <a  >70003 70003</a></p>
                    <p >Call Us : <a >1800 890 1222</a></p>
                    <p >Please note that you are accessing the BETA Version of www.jiomart.com</p>
                    <p >Should you encounter any bugs, glitches, lack of functionality, 
                    delayed deliveries, billing errors or other problems on the beta website, please email us on
                    <a  >cs@jiomart.com</a></p>
                    <p className="font-weight-bold">DOWNLOAD APP</p>
                    <div className="ml-2 pl-2 mb-5">
                        <span><a ><img src="./Assets/appstore/play_store.png" alt=""/></a></span>
                        <span className="mr-4"><a ><img src="./Assets/appstore/ios_store.png" alt=""/></a></span>
                    </div>
                    </div>
            </ul >
        </nav>
        
        <div id="content" className="mb-5 navbar-css "  >

            <nav className="navbar navbar1 navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid p-auto mx-auto">
                    
                    <button type="button" id="sidebarCollapse" className="btn btn-info mx-md-5 p-auto">
                        <i className="fas fa-bars fa-lg"></i>
                    </button>
                    <Link className="navbar-brand"  to="/jiomart-ui-clone-react"><h4>MY MART</h4></Link> 
                    <form className="form-inline my-2 my-lg-0 mx-4 " id="navBarSearchForm">
                        <input className="form-control mx-3" height="40px"  type="search" placeholder="Search essentials, groceries and more..." aria-label="Search"/>
                      </form>
            

                    <div className="collapse hide navbar-collapse ml-5 home-nav" id="navbarSupportedContent" >
                        <ul className="nav navbar-nav mx-4 ">
                            <li className="nav-item me-3 me-lg-0 ">
                                <Link className="nav-link " to="/login"><i className="fas fa-user" ></i><span>  Sign in/Sign up</span></Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0 ">
                                <Link className="nav-link " to="/cart">
                                  <i className="fas fa-shopping-cart"></i>
                                  <span>   Cart</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
           
            <nav className="navbar navbar-custom navbar-expand-lg border-bottom "    >
                <div className="container-fluid ml-4 pl-4" >
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="delivery_content"> Deliver to                         
                        <span id="delivery_details">
                            <a><span><b> 400020</b></span></a>
                        </span>
                    </div>
                <div className="collapse navbar-collapse mx-4" id="main_nav">
                    <ul className="navbar-nav mx-4">
                        <li className="nav-item dropdown ">
                            <a className="nav-link  dropdown-toggle"   data-bs-toggle="dropdown">  Fruits & Vegetables  </a>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/content/fruits_vegetables/fresh_fruits"> Fresh Fruits</Link></li>
                            <li><a className="dropdown-item"> Fresh Vegetables </a></li>
                            <li><a className="dropdown-item"> Herbs & Seasonings </a></li>
                            <li><a className="dropdown-item"> Exoctic Fruits & Vegetables </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle"  data-bs-toggle="dropdown">  Dairy & Bakery  </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" > Dairy</a></li>
                            <li><a className="dropdown-item" > Toast & Khari </a></li>
                            <li><a className="dropdown-item" > Breads and buns </a></li>
                            <li><a className="dropdown-item" > Baked Cookies </a></li>
                            <li><a className="dropdown-item" > Batter & Chutney</a></li>
                            <li><a className="dropdown-item" > Cheese </a></li>
                            <li><a className="dropdown-item" > Ghee </a></li>
                            <li><a className="dropdown-item" > Panner & Tofu </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle"   data-bs-toggle="dropdown">  Staples  </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item"> Atta, Flours & Sooji</a></li>
                            <li><a className="dropdown-item"> Dals & Pulses </a></li>
                            <li><a className="dropdown-item"> Rice & Rice Products </a></li>
                            <li><a className="dropdown-item"> Edible oils </a></li>
                            <li><a className="dropdown-item"> Masalas & Spices</a></li>
                            <li><a className="dropdown-item"> Salt, Sugar & Jaggery </a></li>
                            <li><a className="dropdown-item"> Soya Products, Wheat & Other </a></li>
                            <li><a className="dropdown-item"> Grains </a></li>
                            <li><Link className="dropdown-item" to="/content/staples/dry_fruits"> Dry Fruits & Nuts</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">  Snacks & Branded Foods  </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" > Biscuits & Cookies</a></li>
                            <li><a className="dropdown-item" > Noodle, Pasta, Vermicelli </a></li>
                            <li><a className="dropdown-item" > Breakfast Cereals </a></li>
                            <li><a className="dropdown-item" > Snacks & Namkeen </a></li>
                            <li><a className="dropdown-item" > Chocolates & Candies</a></li>
                            <li><a className="dropdown-item" > Ready To Cook & Eat </a></li>
                            <li><a className="dropdown-item" > Spreads, Sauces, Ketchup </a></li>
                            <li><a className="dropdown-item" > Indian Sweets </a></li>
                            <li><a className="dropdown-item" > Pickles & Chutney </a></li>
                            <li><a className="dropdown-item" > Extracts & Flavouring </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle"   data-bs-toggle="dropdown">  Beverages </a>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/content/beverages/tea"> Tea</Link></li>
                            <li><a className="dropdown-item"> Coffee </a></li>
                            <li><a className="dropdown-item"> Fruit Juices </a></li>
                            <li><a className="dropdown-item"> Energy & Soft Drinks </a></li>
                            <li><a className="dropdown-item"> Health Drink & Supplement</a></li>
                            <li><a className="dropdown-item"> Soda & Flavoured Water </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle"   data-bs-toggle="dropdown">  Personal Care  </a>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/content/personal_care/hair_care"> Hair Care</Link></li>
                            <li><a className="dropdown-item"> Oral Care </a></li>
                            <li><a className="dropdown-item"> Skin Care </a></li>
                            <li><a className="dropdown-item"> Bath & Hand Wash </a></li>
                            <li><a className="dropdown-item"> Body Wash & Bathing Accessories</a></li>
                            <li><a className="dropdown-item"> Feminine Hygiene </a></li>
                            <li><a className="dropdown-item"> Men's Grooming </a></li>
                            <li><a className="dropdown-item"> Deo & Fragrances </a></li>
                            <li><a className="dropdown-item"> Health & Wellness </a></li>
                            <li><a className="dropdown-item"> Makeup </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">  Home Care </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item"> Detergents</a></li>
                            <li><a className="dropdown-item"> Dishwash </a></li>
                            <li><a className="dropdown-item"> All Purpose Cleaners </a></li>
                            <li><a className="dropdown-item"> Freshners & Repellents </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle"   data-bs-toggle="dropdown">  Baby Care </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item"> Baby Grooming</a></li>
                            <li><a className="dropdown-item"> Baby Bath & Hygiene </a></li>
                            <li><a className="dropdown-item"> Diapers & Wipes </a></li>
                            <li><a className="dropdown-item"> Baby Food & Formula </a></li>
                            <li><a className="dropdown-item"> Health & Wellness </a></li>
                            </ul>
                        </li>
                    </ul>
                </div> 
                </div> 
            </nav>
        </div>
    </div>

    <div className="overlay"></div>   
    </header>
    )
}


export default Navbar