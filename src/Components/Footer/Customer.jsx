import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const Customer = () => {
  return (
    <div style={{width:'300px'}}>
    <Box padding='1' style={{border:'1px solid none', textAlign:'left'}}>
       <Heading padding='1' as='h6' size='xs'>CUSTOMER SERVICES</Heading>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>About Us</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>FAQ</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Terms and conditions</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Privacy policy</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>E-waste Policy</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Cancellation and return policy</a></Text>
    </Box>
    </div>
  )
}

export default Customer