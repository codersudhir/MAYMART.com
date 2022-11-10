import { useEffect } from "react";
import "./faqs.css"
const Faqscript = ()=>{
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

export const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
  
    <div className="container px-3 py-3">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-0">
          <hr />


          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="home.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">FAQs</li>
            </ol>
          </nav>

          <h3>FAQs</h3>
          <h4>Frequently Asked Questions: </h4>
          <p>
            Check out this section to get answers for all the frequently asked questions.
          </p><br /><br />

          <h4>Registration</h4>

          <button className="accordion" onClick={Faqscript}>How do I register?</button>
          <div className="panel">
            <p>You can register by clicking on the "Sign In" section located at the top right corner on the home page. Please provide the required information in the form that appears and click on submit. We will send a one-time password (OTP) to
              verify your mobile number. Post verification, you can start shopping on JioMart.
            </p>
          </div>

          <button className="accordion" onClick={Faqscript}>Do I need to register before shopping on JioMart?</button>
          <div className="panel">
            <p>Yes, you do need to register before shopping with us. However, you can browse the website without registration. You are required to login or register while you checkout.

            </p>
          </div>

          <button className="accordion" onClick={Faqscript}>Can I register multiple times using the same phone number/email ID?</button>
          <div className="panel">
            <p>Each email ID/login ID and mobile number can only be associated with one customer account.</p>
                </div>
                <br /><br />


                <h4>Login / Account Related</h4>

                <button className="accordion" onClick={Faqscript}>What is My Account?</button>
                <div className="panel">
                  <p>'My Account' is the section where you can view your Personal Information, Order History and Shopping List.

                  </p>
                </div>

                <button className="accordion" onClick={Faqscript}>I am unable to login</button>
                <div className="panel">
                  <p>You may have entered incorrect login details. Please enter the correct information & try again.</p>
                </div><br /><br />

                <h4>Product / Price / Promotion</h4>

                <button className="accordion"onClick={Faqscript}>How do I look for a particular Product?</button>
                <div className="panel">
                  <p>You can search for a product by navigating through the category pages or by using search tab on the top of every page.


                  </p>
                </div>

                <button className="accordion" onClick={Faqscript}>How will you ensure the freshness of products?</button>
                <div className="panel">
                  <p>We ensure that all our products are hygienically and carefully handled and maintain them in the correct temperature & packaging.</p>

                </div><br /><br />

                <h4>Ordering</h4>

                <button className="accordion" onClick={Faqscript}>How do I know if I placed my order correctly?</button>
                <div className="panel">
                  <p>Upon the successful completion of your order, an order confirmation e-mail and SMS containing your order details will be sent to your registered email ID and phone number.
                  </p>
                </div>

                <button className="accordion" onClick={Faqscript}>Can I call and place an order?</button>
                <div className="panel">
                  <p>No, currently this service is not available.</p>

                </div>
                <button className="accordion" onClick={Faqscript}>How are the fruits and vegetables weighed?</button>
                <div className="panel">
                  <p>All fruits and vegetables vary in size and weight. You can choose any size/weight available on the website. While you shop, we will show an estimated weight and price. At the time of processing, we pack the closest size/weight and charge you for the actual weight of each item. E.g. If you order 1 kg of apples, we will try to pack exactly 1 kg or the weight closest to 1 kg. If the actual weight is 987 gm, we will bill you for 987 gm and not 1 kg.</p>

                </div>
                <button className="accordion" onClick={Faqscript}>How do I make changes to my order?</button>
                <div className="panel">
                  <p>Currently, there is no provision to change the order once its been placed. Please call our customer support team & we will assist you however we can.</p>

                </div>
                <br /><br />

                <h4>Payment</h4>

                <button className="accordion" onClick={Faqscript}>What are the various modes of payment I can use for shopping?</button>
                <div className="panel">
                  <p>You can pay for your order using the following modes of payment:
                    <ul>
                      <li>
                        Credit Card / Debit Card
                        </li>
                        <li>
                          Netbanking
                          </li>
                          <li>
                            e-Wallets
                            </li>
                            <li>
                              Cash on Delivery
                              </li>
                      </ul>
                  </p>
                </div><br /><br />

                <h4>Delivery</h4>

                <button className="accordion" onClick={Faqscript}>How will I know if JioMart delivers to my area?</button>
                <div className="panel">
                  <p>You can check the serviceability of your area while selecting your pin code when you place your order.</p>
                </div><br /><br />

                <h4>Loyalty Program</h4>

                <button className="accordion" onClick={Faqscript}>What is the RelianceOne?</button>
                <div className="panel">
                  <p>RelianceOne or ROne is the Loyalty Program of Reliance Retail. Members enjoy wide range of privileges & benefits and can earn RelianceOne points at all the following stores:</p><br /><br />
                  <ul>
                    <li>
                      JioMart.com
                      </li>
                      <li>
                        Reliance Fresh
                        </li>
                        <li>
                          Reliance Smart
                          </li>
                          <li>
                            Reliance Jewels
                            </li>
                            <li>
                              Reliance Digital
                              </li>
                              <li>
                                Reliance Trends
                                </li>
                                <li>
                                  Reliance Footprint
                                  </li>

                    </ul>
                </div>

                <button className="accordion" onClick={Faqscript}>How do I become a RelianceOne Member?</button>
                <div className="panel">
                  <p>You can become a member by giving your phone number during billing at any of our store or by shopping on JioMart.com</p>
                </div>

                <button className="accordion" onClick={Faqscript}>How do I become a RelianceOne Member?</button>
                <div className="panel">
                  <p>You can become a member by giving your phone number during billing at any of our store or by shopping on JioMart.com</p>

                </div>

                <button className="accordion" onClick={Faqscript}>What are benefits of RelianceOne?</button>
                <div className="panel">
                  <p>RelianceOne members get access to wide range of exclusive benefits and privileges across our partner stores. Some of the benefits are:</p>
                  <ul>
                    <li>
                      Exclusive discounts and offers on your favourite brands and products

                      </li>
                      <li>
                        SMS and Emailer alerts with special offers

                        </li>
                        <li>
                          Loyalty Points on every purchase

                          </li>
                          <li>
                            Redeem Loyalty Points against transactions

                            </li>
                    </ul>
                </div>

                <button className="accordion" onClick={Faqscript}>How do I know my current balance of ROne points?</button>
                <div className="panel">
                  <p>You can get the current balance of RelianceOne points by giving a missed call on 9212999888</p>
                </div>

                <button className="accordion" onClick={Faqscript}>What is the value of ROne points?</button>
                <div className="panel">
                  <p>
                    You earn 1 point for every Rs. 200 spent and value of 1 point is Rs 0.70</p>
                </div>

                <button className="accordion" onClick={Faqscript}>How to redeem ROne points?</button>
                <div className="panel">
                  <p>The redemption of ROne points is available both in physical stores and on JioMart.com while billing</p>
                </div><br /><br />

                <h4>Get in touch with us!</h4>

                <button className="accordion" onClick={Faqscript}>How do I contact you for feedback/queries/suggestions?</button>
                <div className="panel">
                  <p>Our customer service team will be at your service any time between 6:00 am & 8:00 pm throughout the week. Please call on 1800 890 1222. You may also write to us at cs@jiomart.com.
                  </p>
                </div><br /><br />

                <h5>Have an issue with your order?</h5>
                <p>
                  Log a complaint-<a href="https://www.jiomart.com/customer/account/login">Click Here</a>
                  </p>
                  <p>
                    See previously raised complaints - <a href="https://www.jiomart.com/customer/account/login">Click Here</a>
                    </p><br />
                    <p>
                      If you’d like get in touch with us, please do write to us at cs@jiomart.com or call us on 1800 890 1222 between 6:00 am & 8:00 pm throughout the week and we will respond immediately.
                      </p><br />
                      <p>
                        You can also reach out to us on Whatsapp : 70003 70003
                        </p>

            </div>
          </div>

    </div>
    </div>
    
   
  )
}
export default Faqs;