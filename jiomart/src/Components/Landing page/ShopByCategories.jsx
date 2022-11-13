import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import style from '../Styles/shopbycategories.css'
import image1 from '../Others/shopbycategoriesImg/personal_care.png'
import image2 from '../Others/shopbycategoriesImg/baby care.png'
import image3 from '../Others/shopbycategoriesImg/dairyMilk.png'
import image4 from '../Others/shopbycategoriesImg/fruits.png'
import image5 from '../Others/shopbycategoriesImg/Home care.png'
import image6 from '../Others/shopbycategoriesImg/beverages.png'
import image7 from '../Others/shopbycategoriesImg/vegitables.png'




const TopDeals = () => {
    const personal=()=>{
        window.location.href="/productpage2"
    }
  
    
  return (
    <div>
        <Heading textAlign='left'as='h4' size='md' marginBottom='20px' marginLeft='20px'>Shop From Top Categories</Heading>
    <div className='container-x'>
        <div className='products-x'>
            <div className='productImg1'> <img src={image1} alt="personal care" onClick={personal} /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'><Link to="/productpage">Personal Care</Link></Text>
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image2} alt="baby care" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>baby Care</Text>
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image3} alt="dairy milk" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>Dairy Milk</Text>
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image4} alt="fruits" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>Fruits & Vegitable</Text>
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image5} alt="home care" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>Home Care</Text>
           
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image6} alt="beverages" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>Beverages</Text>
            
            </div>
        </div>
        <div className='products-x'>
            <div className='productImg1'> <img src={image7} alt="vegitables" /> </div> 
            <div style={{textAlign: 'left'}}>
            <Text textAlign='center' fontSize='sm' fontWeight='bold'>Vegitables</Text>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TopDeals