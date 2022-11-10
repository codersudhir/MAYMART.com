import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./Common.css";

class Filters extends React.Component {
  render() {
    return (
      <div className="row my-content-haircare justify-content-left">
        <div className="my-content-left">
          <div className="column justify-content-left">
            <div className="col-lg-3 m-lg-2 s-m-1">
              <div className="card filters-brands">
                <h5>Filters</h5>
                <hr />
                <h6>Availability</h6>
                <FormGroup check>
                  <Label check className="form-check-label">
                    <Input type="checkbox" /> InStock Products
                  </Label>
                </FormGroup>
                <br />
                <br />
                <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span className="input-group-text border-0" id="search-addon">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <br />
                <br />
                <div className="scroll">
                  {this.props.content.products.map((product) => {
                    return (
                      <FormGroup check key={product.id}>
                        <Label className="form-check-label" id={product.id}>
                          <Input className="form-check-input" type="checkbox" />
                          {product.name}
                        </Label>
                      </FormGroup>
                    );
                  })}
                </div>
                <br />
                <br />
                <h6>Brands</h6>
                <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span className="input-group-text border-0" id="search-addon">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <br />
                <br />
                <div className="scroll">
                  {this.props.content.brands.map((brand) => {
                    return (
                      <FormGroup check key={brand.id}>
                        <Label className="form-check-label" id={brand.id}>
                          <Input className="form-check-input" type="checkbox" />
                          {brand.name}
                        </Label>
                      </FormGroup>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
