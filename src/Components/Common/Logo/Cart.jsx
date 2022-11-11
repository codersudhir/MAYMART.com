import { Text } from '@chakra-ui/react'
import React from 'react'


const Cart = () => {
  return (
    <div style={{display:'flex', paddingTop:'18px'}}>
        <img width='60px' src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-219-729067.png" alt="cart logo" />
        <Text paddingTop='12px' color='white'> Cart </Text>
    </div>
  )
}

export default Cart