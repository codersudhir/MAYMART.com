import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import style from '../Styles/offersondailyessential.css'
import image1 from '../Others/img_1.png'
import image2 from '../Others/img_2.png'
import image3 from '../Others/img_3.png'
import image4 from '../Others/img_4.png'

const OffersOnDailyEssential = () => {
  return (
    <div style={{marginTop:'50px'}}> 
    <Heading textAlign='left'as='h4' size='md' marginBottom='20px' marginLeft='20px'>Offers on Daily Essentials</Heading>
    <div className='container-2'>

        <div className='items'>
        <div style={{width:'200px' , height:'200px', margin:'auto'}}><img src={image1} alt="dal and pulses" /></div>
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
         
        </div>
        <div className='items'>
        <div style={{width:'200px' , height:'200px' , margin:'auto'}}><img src={image2} alt="dal and pulses" /></div>
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
         
        </div>
        <div className='items'>
        <img style={{width:'200px' , height:'200px' , margin:'auto'}} src={image3} alt="dal and pulses" />
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
         
        </div>
        <div className='items'>
        <img style={{width:'200px' , height:'200px' , margin:'auto'}} src={image4} alt="dal and pulses" />
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
         
        </div>
    </div>

    <div className='container-2'>
        <div className='items'>
        <div style={{width:'200px' , height:'200px' , margin:'auto'}}><img src={image1} alt="dal and pulses" /></div>
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
        
        </div>
        <div className='items'>
        <div style={{width:'200px' , height:'200px' , margin:'auto'}}><img src={image2} alt="dal and pulses" /></div>
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
        
        </div>
        <div className='items'>
        <img style={{width:'200px' , height:'200px' , margin:'auto'}} src={image3} alt="dal and pulses" />
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
        
        </div>
        <div className='items'>
        <img style={{width:'200px' , height:'200px' , margin:'auto'}} src={image4} alt="dal and pulses" />
        <div><Text fontSize='xs' fontWeight='bold'>DAAL AND PULSES</Text></div>
        
        </div>
        </div>
    </div>
  )
}

export default OffersOnDailyEssential