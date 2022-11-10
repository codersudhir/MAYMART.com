import { useEffect } from "react";
import "./CustomerServices.css";

export const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container px-3 py-3">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-0">
            <hr />

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="home.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ol>
            </nav>

            <h3>ABOUT US</h3>
            <p>India's most convenient online grocery channel</p>
            <p>
              Reliance Fresh and Smart makes your grocery shopping even simpler.
              No more hassles of sweating it out in crowded markets, grocery
              shops & supermarkets - now shop from the comfort of your home;
              office or on the move.
            </p>
            <p>
              We offer you convenience of shopping everything that you need for
              your home - be it fresh fruits & vegetables, rice, dals, oil,
              packaged food, dairy item, frozen, pet food, household cleaning
              items & personal care products from a single virtual store.
            </p>
            <hr />
            <p>
              JioMart is an online selling channel (format) of Reliance Retail
              Limited. Visit{" "}
              <a href="https://www.relianceretail.com/">
                www.relianceretail.com
              </a>{" "}
              for details.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
