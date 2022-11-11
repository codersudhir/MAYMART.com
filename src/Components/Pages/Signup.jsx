import { Button, Heading, Input, InputGroup, InputLeftAddon, Stack, Text, FormControl, color } from '@chakra-ui/react'
import React from 'react'
import style from '../Styles/signin.css'
import { useNavigate , NavLink } from 'react-router-dom'

const Signup = () => {

   let navigate = useNavigate()

   const [data, setData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
   })
// console.log(data)

const [value, setValue] = React.useState([])

   const getData = (e) => {
      // console.log(e.target.value)
      const {value, name} = e.target
      // console.log(value, name)
      setData(() => {
         return {
            ...data, 
            [name]: value
         }
      })
   }

   const addData = (e) => {
      e.preventDefault()
     const { firstName, lastName, email, password } = data
     if(firstName == "") {
      alert("name field is required")
     }
     else if(email == "") {
      alert("email field is required")
     }
     else if(!email.includes("@")) {
      alert("please enter valid email address")
     }
     else if(password == "") {
      alert("password field is required")
     }
     else {
       localStorage.setItem('userData', JSON.stringify([...value, data]))
       alert("Sign up successful")
       navigate('/signin')
     }
   }

  return (
    <div>
       <div className='container-signin'>
          <img border-radius= "10px" src="https://bit.ly/3Bat8Od" alt="sign in banner" />
      
        <div className='signin-area'>

          <Stack spacing={3}>
           <Heading  as='h3' size='lg'> Sign up</Heading>
           <Text paddingLeft='20px' fontSize='xl'>Please enter your details</Text>
          </Stack>
           <br />
         <FormControl>
           <InputGroup>
               <Input 
                onChange={getData} 
                padding='4%' 
                placeholder='Your First Name' 
                name='firstName' 
                />
            </InputGroup>
            <br />
            <InputGroup>
               <Input 
                onChange={getData} 
                padding='4%' 
                placeholder='Your Last Name' 
                name='lastName'
                />
            </InputGroup>
            <br />
            <InputGroup>
               <Input 
                 onChange={getData} 
                 padding='4%' 
                 placeholder='Enter Your Email Id' 
                 name= 'email'
                 />
            </InputGroup>
            <br />
            <InputGroup>
               <Input 
                 onChange={getData} 
                 padding='4%' 
                 placeholder='Enter Your Password' 
                 name= 'password'
                 />
            </InputGroup>
            <br />
            <Button 
              color='white' 
              bgColor='rgb(0,142,204)'
              marginLeft='0px'
              paddingLeft='250px'
              paddingRight='250px'
              onClick={addData}
              >Sign up</Button>
         </FormControl> 
            <br />
            <Text textAlign='center'>Already have an account? <span><NavLink style={{color:"blue"}} to='/signin'>Sign in</NavLink></span></Text>
            <br />
        </div>
       </div>
    </div>
  )
}

export default Signup


{/*  */}