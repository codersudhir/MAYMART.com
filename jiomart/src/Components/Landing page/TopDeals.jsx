import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, WarningIcon } from '@chakra-ui/icons'
import style from '../Styles/topdeals.css'
import axios from "axios"
import { useState,useEffect } from 'react'



const Getdada=(page)=>{
  return axios.get(`http://localhost:8080/products?topdeals=true&_limit=6&_page=${page}`)
}


const TopDeals = () => {
  const [data,setdata]=useState([])
  const [page,setpage]=useState(1)
  useEffect(()=>{
    Getdada(page).then((res)=>{
      setdata(res.data)
    },[page])
  })


   
  let storage=[]||JSON.stringify(localStorage.getItem("storage"))
  const product=(el)=>{
    storage.push(el)
    localStorage.setItem("storage",JSON.stringify(storage))
    window.location.href="/Cart"
  }

  

  return (
    <div>
    <Heading textAlign='left'as='h4' size='md' marginBottom='20px' marginLeft='20px'>Top Deals</Heading>
    <div className='container-1'>
      <button onClick={()=>setpage(page-1)}><ArrowLeftIcon/></button>
      {data.map((el)=>{
        return <div key={el.id} className='products-1'>
        <div className='productImg'> <img src={el.img} alt={el.title} /> </div> 
        <div style={{textAlign: 'left'}}>
        <Text fontSize='sm' fontWeight='bold'>{el.title}</Text>
        <Text fontSize='md' fontWeight='bold'>₹ {el.price}</Text>
        <div style={{display:'flex'}}><Text fontSize='sm'>M.R.P. </Text> <Text fontSize='sm' as='del'>₹ {el.mrp}</Text></div>
        <Text fontSize='sm' fontWeight='bold' color='rgb(53,181,53)'>Save ₹ {el.mrp-el.price}</Text>
        <div style={{marginTop:'10px'}}>
          <Button w='100%' bg='rgb(0,142,204)' color='white' onClick={()=>product(el)}>Add to Cart</Button>
        </div>
        </div>
    </div>
      })}
        <button onClick={()=>setpage(page+1)}><ArrowRightIcon/></button>
    </div>
    </div>
  )
}

export default TopDeals