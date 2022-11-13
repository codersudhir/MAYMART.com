import { useContext, useState } from "react";
import { Link, useNavigate ,NavLink} from "react-router-dom";
import { AuthContext } from "../AllRoutes/Authcontext";
import {  Heading, Text ,Stack, Button,Input,Image} from '@chakra-ui/react'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {userlogin,authState,userLogout}=useContext(AuthContext)
  const navigate=useNavigate()
    const submithandle=(e)=>{
      e.preventDefault()
      setLoading(true);
      fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      }).then((res)=>res.json())
      .then((res)=>{
        setLoading(false)
        if(res.token){
          userlogin(res.token)
      navigate("/")
  
        }
      
      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(authState)

    const handlecart=()=>{
      navigate("/cart")
    }

    if(authState.isAuth){
      return <div style={{backgroundColor:"#f6f6f7"}}><Heading>MY ACCOUNT</Heading>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
       <div style={{backgroundColor:"#008ecc",width:"35%",borderRadius:"2%"}}>
         <Image marginLeft="70px" borderRadius="50%" marginTop="20px" src="https://previews.123rf.com/images/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg" 
         width="50px"
         />
         <Button backgroundColor="#66bbe0" width="90%" marginTop="35px" onClick={handlecart} >Order History</Button>
         <Button backgroundColor="#66bbe0" width="90%" marginTop="10px" >Delivery Adresses</Button>
         <Button backgroundColor="#66bbe0" width="90%" marginTop="10px"   onClick={userLogout}  >Log Out</Button>
         <Button backgroundColor="#66bbe0" width="90%" marginTop="10px"  marginBottom="10px"   ><NavLink to="/addproducts">Add Products To Database</NavLink></Button>
         
       </div>
       <div style={{width:"55%"}}><Image src="public\accinfo.png" height="250px" /></div>
     </div>
        </div>
    }


  return (
    <div>
       <div className='container-signin'>
          <img border-radius= "10px" src="https://bit.ly/3Bat8Od" alt="sign in banner" />
      
        <div className='signin-area'>
          <Stack spacing={3}>
           <Heading  as='h3' size='lg'>Sign in</Heading>
           <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
          </Stack>
           <br />
           <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={submithandle}>
        <div>
          <label>
            <Input data-testid="email-input"  value={email}type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <Input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
              type="password"
              placeholder="password"
              marginTop="15px"
            />
          </label>
        </div>
        <div>
          <Button disabled={loading?true:false}  type="submit" style={{marginLeft:"140px",marginTop:"25px",backgroundColor:"#008ecc"}}  >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
            <Text textAlign='center'>Don't have an account? <span><NavLink style={{color:"blue"}} to='/signup'>Sign up</NavLink></span></Text>
        </div> 
       </div>
    </div>
  )
}

export default Signin