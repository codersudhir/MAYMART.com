import React from 'react'
import {  Heading, Text ,Flex, Button} from '@chakra-ui/react'
import style from '../Styles/cart.css'
const array=JSON.parse(localStorage.getItem("storage"))||[]
console.log(array)
const Cart = () => {

  if(array.length>0){
    return  <div style={{backgroundColor:"#f6f6f7"}}>
      <Heading marginTop='20px' marginLeft='-1000px'>My Cart({array.length})</Heading>
      <Flex style={{justifyContent:"space-around",marginTop:"50px"}}>
        <div style={{backgroundColor:"white",widht:"600px"}}>
          <Text style={{fontSize:"25px"}}>Goceries Basket</Text>
          {array.map((el)=>{
            return <div style={{display:"flex"}}>
              <img style={{marginLeft:"10px"}} src={el.img} width="80px" alt="" />
              <div>
              <h2 style={{fontWeight:"bold"}}>{el.title}</h2>
              <h2>Rs .{el.price}  You Save Rs.{el.mrp-el.price}</h2>
            
              </div>
            </div>
          })}
        </div>
        <div style={{backgroundColor:"white",width:"500px"}}>
          <Text  style={{fontSize:"25px"}}>Payment details</Text>
          {array.map((el)=>{
            return <div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                <p>MRP Total</p><p>Rs. {el.mrp}</p>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                <p>Product Discount</p><p>Rs. -{el.mrp-el.price}</p>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
                <h3 style={{fontWeight:"bolder"}}>Total</h3><p style={{fontWeight:"bolder"}}>Rs.{el.price}</p>
              </div>
            </div>
          })}
        </div>  
      </Flex>
      <Button  colorScheme='blue' width="200px" style={{marginTop:"100px"}}>place Order</Button>
    </div>
  }
  
  return (
    <div>
      <Heading marginTop='20px' marginLeft='-1000px'>My Cart</Heading>
      <div className='cart-container'>
        <img src="https://bit.ly/3vbIApx" alt="cart image" />
        <Text fontWeight='bold' fontSize='lg'>Your Cart is empty!</Text>
       
      </div>
    </div>
  )
}

export default Cart