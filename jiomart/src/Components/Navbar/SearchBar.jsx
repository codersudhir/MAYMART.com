import React, { useState,useEffect } from 'react'
import { border, Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import ProductPage from "../Common/Logo/products"
import { Navigate } from 'react-router-dom'

const SearchBar = () => {

  const search=(e)=>{
    if (e.key === 'Enter') {
    if(e.target.value==="dryfruits"){
      window.location.href="/productpage"
    }
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