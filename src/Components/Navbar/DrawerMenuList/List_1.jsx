import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const List_1 = () => {
  return (
    <Stack spacing={5} border='1px solid none' padding='5%' marginBottom='2px' backgroundColor='white'>

        <Text fontSize='xs'>
          <NavLink to='/'>Home</NavLink>
        </Text>

        <Text fontSize='xs'>Shop by category</Text>
        <Text fontSize='xs'>My List</Text>
        <Text fontSize='xs'>Jio Mart Wallet</Text>
        <Text fontSize='xs'>Jio Gift Card</Text>
        <Text fontSize='xs'>GoGreen with JioMart</Text>
        <Text fontSize='xs'>All Offers</Text>
    </Stack>
  )
}

export default List_1