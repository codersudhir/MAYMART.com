import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Badge, CardColumns, ButtonGroup } from 'reactstrap';
import "./CategoryContent.css"

class CategoryContent extends React.Component {
    render() {
    return (
        <div className="row justify-content-end">
            <div className="col-lg-10 m-lg-8 s-m-6">
                <div className="card image">
                    <Card>
                        <CardImg src={this.props.content.banner_img} alt="hair-care" />
                    </Card>
                </div><br/>
                <div className="row my-head justify-content-start">
                    <div className="my-head-item-left">
                        <h6>Showing <b>{this.props.content.items.length}</b> out of <b>{this.props.content.items.length}</b> items</h6>
                    </div>
                    <div className="my-head-item-right" >
                        <div className="my-head row justify-content-end">
                            <h6>Sort by:
                                        
                                <ButtonGroup>
                                    <Button color="light"> Popularity</Button>
                                    <Button color="light">High to Low</Button>
                                    <Button color="light">Low to High</Button>
                                    <Button color="light">Discount</Button>
                                    <Button color="light">All Products</Button>
                                </ButtonGroup>
                                
                            </h6>       
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 m-lg-8 s-m-6">
                <div className="row justify-content">
                    <CardColumns>
                        {
                            this.props.content.items.map((item) => {
                                return (
                                    <Card id={item.id} key={item.id}>
                                        <Badge color="danger">{item.discount}% off</Badge>
                                        <CardImg src={item.img} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">{item.name}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted"><del>₹{item.price/100.0}</del> <b>₹{(item.price*(100-item.discount))/10000.0}</b></CardSubtitle>
                                            <Button color="primary" className="product-buy">Add to Cart <i className="fa fa-plus-circle" aria-hidden="true"></i></Button>
                                        </CardBody>
                                    </Card>
                                );
                            })
                        }
                    </CardColumns>
                </div>
            </div>
        </div>
    );
    }
}
  
export default CategoryContent;