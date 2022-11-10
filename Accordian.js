import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Link} from "react-router-dom";  


import "./Common.css"

const Accordian = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const [isOpen3, setIsOpen3] = useState(false);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const [isOpen4, setIsOpen4] = useState(false);
    const toggle4 = () => setIsOpen4(!isOpen4);
    const [isOpen5, setIsOpen5] = useState(false);
    const toggle5 = () => setIsOpen5(!isOpen5);
    const [isOpen6, setIsOpen6] = useState(false);
    const toggle6 = () => setIsOpen6(!isOpen6);
    const [isOpen7, setIsOpen7] = useState(false);
    const toggle7 = () => setIsOpen7(!isOpen7);
    const [isOpen8, setIsOpen8] = useState(false);
    const toggle8 = () => setIsOpen8(!isOpen8);
    const [isOpen9, setIsOpen9] = useState(false);
    const toggle9 = () => setIsOpen9(!isOpen9);
    return (
        <div className="row my-content-haircare justify-content-start">
            <div className="my-content-left">
                <div className="column justify-content-start">
                    <div className="col-lg-3 m-lg-2 s-m-1">
                            <div className="card categories">
                            <h5>Categories</h5><hr/>
                            <Button color="light" onClick={toggle1} ><i className="fa fa-lg fa-angle-right"></i>  Fruits & Vegetables</Button>
                            <Collapse isOpen={isOpen1}>
                            <Card className=".category-items">
                                <CardBody>
                                <ul>
                                <li><Link to="/content/fruits_vegetables/fresh_fruits">Fresh Fruits</Link></li>
                                <li>Fresh Vegetables</li><li>Herbs & Seasonings</li><li>Exotic Fruits and Vegetables</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle2} ><i className="fa fa-lg fa-angle-right"></i>  Dairy and Bakery</Button>
                            <Collapse isOpen={isOpen2}>
                            <Card>
                                <CardBody>
                                <ul><li>Dairy</li><li>Toast & Khari</li><li>Breads and Buns</li><li>Baked Cookies</li><li>Batter & Chutney</li><li>Cheese</li><li>Ghee</li><li>Paneer & Tofu</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle3} ><i className="fa fa-lg fa-angle-right"></i>  Staples</Button>
                            <Collapse isOpen={isOpen3}>
                            <Card>
                                <CardBody>
                                <ul><li>Atta, Flours & Sooji</li><li>Dals & Pulses</li><li>Rice & Rice Products</li><li>Edible Oils</li><li>Masalas & Spices</li><li>Salt, Sugar & Jaggery</li><li>Soya Products,<br/> Wheat & Other Grains</li>
                                <li><Link to="/content/staples/dry_fruits">Dry Fruits & Nuts</Link></li>
                                </ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle4} ><i className="fa fa-lg fa-angle-right"></i> Snacks & Branded Foods</Button>
                            <Collapse isOpen={isOpen4}>
                            <Card>
                                <CardBody>
                                <ul><li>Biscuts & Cookies</li><li>Noodle, Pasta, Vermicelli</li><li>Breakfast Cereals</li><li>Snacks & Namkeen</li><li>Chocolates & Candies</li><li>Ready To Cook & Eat</li><li>Spreads, Sauces, Ketchup</li><li>Indian Sweets</li><li>Pickels & Chutney</li><li>Extracts & Flavouring</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle5} ><i className="fa fa-lg fa-angle-right"></i>  Beverages</Button>
                            <Collapse isOpen={isOpen5}>
                            <Card>
                                <CardBody>
                                <ul>
                                <li><Link to="/content/beverages/tea">Tea</Link></li>
                                <li>Coffee</li><li>Fruit juices</li><li>Energy & Soft Drinks</li><li>Health Drink & Supplement</li><li>Soda & Flavoured Water</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle6} ><i className="fa fa-lg fa-angle-right"></i>   Personal Care</Button>
                            <Collapse isOpen={isOpen6}>
                            <Card>
                                <CardBody>
                                <ul>
                                    <li><Link to="/content/personal_care/hair_care">Hair Care</Link></li>
                                    <li>Oral Care</li><li>Skin Care</li><li>Bath & Hand Wash</li><li>Body Wash & <br/>Bathing Accesories</li><li>Feminine Hygiene</li><li>Men's Grooming</li><li>Deo & Fragnances</li><li>Health & Wellness</li><li>Makeup</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle7} ><i className="fa fa-lg fa-angle-right"></i>  Home Care</Button>
                            <Collapse isOpen={isOpen7}>
                            <Card>
                                <CardBody>
                                <ul><li>Detergents</li><li>Dishwash</li><li>All Purpose Cleaners</li><li>Fresheners and Repellents</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle8} ><i className="fa fa-lg fa-angle-right"></i> Baby Care</Button>
                            <Collapse isOpen={isOpen8}>
                            <Card>
                                <CardBody>
                                <ul><li>Baby Grooming</li><li>Baby Bath & Hygiene</li><li>Diapers & Wipes</li><li>Baby Food & Formula</li><li>Health & Wellness</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            <Button color="light" onClick={toggle9} ><i className="fa fa-lg fa-angle-right"></i> Home & Kitchen</Button>
                            <Collapse isOpen={isOpen9}>
                            <Card>
                                <CardBody>
                                <ul><li>Pooja Needs</li><li>Disposals</li><li>Electrical</li><li>Mops, Brushes & Scrubs</li><li>Kitchenware</li></ul>
                                </CardBody>
                            </Card>
                            </Collapse>
                            </div><br/><br/>
                                              
                            </div>
                            </div>
                        </div>
                       
                    </div>
    );
  }
  
  export default Accordian;
