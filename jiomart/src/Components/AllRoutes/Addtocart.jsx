import { Input,Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
function Addtocart(){
    const [title,setTitle]=useState("")
    const [price,setprice]=useState("")
    const [mrp,setmrp]=useState("")
    const [category,setCategory]=useState("")
    const [image,setimage]=useState("https://cdn.w600.comps.canstockphoto.com/imag-stock-photography_csp13471009.jpg")

    

    const addproduct=()=>{
        console.log(title,price,category)
        axios.post('http://localhost:8080/products', {
        title: title,
        price: Number(price),
        mrp: Number(mrp),
       category:category,
       img:image
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
    }
    return <div>
        <Heading>Add Product To Database</Heading>

   <Input type="text" placeholder="Titile of product" value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
   <Input type="number" placeholder="price" value={price} onChange={(e)=>setprice(e.target.value)} /><br />
   <Input type="number" placeholder="MRP" value={mrp} onChange={(e)=>setmrp(e.target.value)} /><br />
   <Input type="text" placeholder="Category ex : dryfruits" value={category} onChange={(e)=>setCategory(e.target.value)} /><br />
   <Input type="text" placeholder="Image Url" value={image} onChange={(e)=>setimage(e.target.value)} /><br />
   <Button onClick={addproduct}>Add Product</Button>

    </div>
}
export default Addtocart