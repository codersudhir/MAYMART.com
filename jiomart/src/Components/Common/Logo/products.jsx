import axios from "axios"
import { useState,useEffect } from "react"
import { Grid,Image,GridItem ,Text,Button,Flex} from '@chakra-ui/react'

const Getdada=(page)=>{
    return axios.get(`http://localhost:8080/products?catagory=dryfruits&_limit=6&_page=${page}`)
  }

function ProductPage(){

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
  
  

    return  <Flex style={{backgroundColor:"#f3f3f3"}}>
        <div style={{width:"30%"}}>
          <img src="public\categories.png" alt="filter"  style={{marginLeft:"5%"}} />
        </div>
        <div style={{width:"80%"}}>
        <div style={{display:"flex",marginLeft:"600px",marginTop:"25px",gap:"10px"}}>
        <Button  h="25px" border="1px solid #008ecc" backgroundColor="white" colorScheme='teal' variant='ghost' >High To Low</Button >
        <Button  h="25px" border="1px solid #008ecc" backgroundColor="white" colorScheme='teal' variant='ghost'>Low To High</Button >
        <Button  h="25px" border="1px solid #008ecc" backgroundColor="white" colorScheme='teal' variant='ghost'>Discount </Button >
        <Button  h="25px" border="1px solid #008ecc" backgroundColor="white" colorScheme='teal' variant='ghost'>All Products</Button >
    </div>
    <Grid
    templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }}
    gap={4}
    pl={20}
    marginTop="25px"
    marginBottom="50"
  >
    {
      data.map((item, i) => {
        return (
          <GridItem key={item.id}  backgroundColor="white"   style={{diplay:"grid",justifyContent:"center",borderRadius:"4%",border:"1px solid black"}}>
            <Image src={item.img} alt={item.title} height="180px" width="100%" borderRadius="4%" />
            <Text fontWeight="bold">{item.title}</Text>
            <div style={{display:'flex',marginLeft:"15px"}}><Text fontSize='sm'>M.R.P. </Text> <Text fontSize='sm' as='del'>₹ {item.mrp} </Text><Text fontWeight="bold"> ₹ {item.price}</Text></div>
            <Button    w="90%" marginBottom="10px" h="35px" color="white" backgroundColor="#008ecc" onClick={()=>product(item)} >Add To Cart</Button>
          </GridItem>
        )
      })
    }
  </Grid>
        </div>
    </Flex>
    
   
}
export default ProductPage