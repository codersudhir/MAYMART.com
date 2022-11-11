import React from 'react'
import { border, Button, Input } from '@chakra-ui/react'

const SearchBar = () => {

  const search=(e)=>{
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }
  return (
    <div style={{display:'flex'}}>
      <Input 
      backgroundColor='white' 
      marginTop='18px' 
      width='600px' 
      placeholder='Search essentials, groceries, and more...'
      onKeyDown={search}
      ></Input>     
    </div>
  )
}

export default SearchBar