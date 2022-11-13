import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import style from '../Styles/shopfromtop.css'
import ProductPage from '../Common/Logo/products'

const ShopFromTop = () => {
  


  const handlefruitsAndveg=()=>{
    window.location.href="/productpage"
  }

  
  return (
    <div>
      <Heading textAlign='left'as='h4' size='md' marginBottom='20px' marginLeft='50px'>Shop From Top Categories</Heading>
    <div className='container'>
      <div className='products'>
        <img style={{border:'2px solid green'}} src="https://bit.ly/3PLAcVN"
        alt="fruits&veg"
        onClick={handlefruitsAndveg}
        />
        <Text fontSize='xs' fontWeight='bold'>FRUITS & VEG</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid blue'}} src="https://bit.ly/3Pp5BNU" alt="Beverage Corner"  onClick={handlefruitsAndveg} />
        <Text fontSize='xs' fontWeight='bold'>BEVERAGE CORNER</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid black'}} src="https://bit.ly/3B6vxtf" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>FOODGRAINS & OILS</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid orange'}} src="https://bit.ly/3ziJWBo" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>SNACKS & FOODS</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid skyblue'}} src="https://bit.ly/3PFeAdB" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>HOME CARE</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid #62FD7B'}} src="https://bit.ly/3uZXlf2" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>PERSONAL CARE</Text>
      </div>
      <div className='products'>
        <img style={{border:'2px solid skyblue'}} src="https://bit.ly/3zmnTK4" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>DAIRY & BAKERY</Text>
      </div>
      <div className='products'>
        <img src="https://bit.ly/3OnAIrK" alt="fruits&veg" />
        <Text fontSize='xs' fontWeight='bold'>INSTANT FOOD</Text>
      </div>
    </div>
    </div>
  )
}

export default ShopFromTop

