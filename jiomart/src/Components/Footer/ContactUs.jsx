import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const ContactUs = () => {
  return (
    <div style={{width:'300px'}}>
    <Box padding='1' style={{border:'1px solid none', textAlign:'left'}}>
       <Heading padding='1' as='h6' size='xs'>CONTACT US</Heading>
       <div style={{display:'flex'}}>
       <Text fontSize='xs' color='rgb(97,97,98)'><a href=''>WhatsApp us : </a></Text>
       <Text fontSize='xs' color='blue'>70003 70003</Text>
       </div>
       <div style={{display:'flex'}}>
       <Text fontSize='xs' color='rgb(97,97,98)'><a href=''>Call Us : </a></Text>
       <Text fontSize='xs' color='blue'>1800 890 1222</Text>
       </div>
       <br />
       <Text fontSize='xs' color='rgb(97,97,98)'><a href=''>8:00 AM to 8:00 PM, 365 days</a></Text>
       <br />
       <Text fontSize='xs' color='rgb(97,97,98)'><a href=''>Please note that you are accessing the BETA</a></Text>

       <div style={{display:'flex'}}>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Version of </a></Text>
       <Text fontSize='xs' color='blue'>www.jiomart.com</Text>
       </div>
       <br />
       <div >
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Should you encounter any bugs, glitches, lack of functionality, delayed 
       deliveries, billing errors or other problems on the beta website, please email us on 
       </a></Text>
       <Text fontSize='xs' color='blue'>cs@jiomart.com</Text>
       </div>
       
    </Box>
    </div>
  )
}

export default ContactUs