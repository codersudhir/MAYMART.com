import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const Categories = () => {
  return (
    <Box padding='1' style={{border:'1px solid none', textAlign:'left'}}>
       <Heading padding='1' as='h6' size='xs'>MOST POPULAR CATEGORIES</Heading>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Staples</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Beverages</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Personal Care</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Home Care</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Fruits and Vegetables</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Baby Care</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Snacks & Branded Foods</a></Text>
       <Text fontSize='xs' color='rgb(97,97,98)' padding='0.5'><a href=''>Dairy & Bakery</a></Text>
    </Box>
  )
}

export default Categories