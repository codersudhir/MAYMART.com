import { Text } from '@chakra-ui/react'
import React from 'react'
import style from '../Styles/myaccount.css'

const MyAccount = () => {

    const getuserAccount = localStorage.getItem('userData')
    console.log(getuserAccount)

  return (
    <div>
        <Text as='b' fontSize='4xl'>My Account</Text>
        <div className='myaccount'>
            <div className='myaccount-1'>
              <img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" alt="user" />
               
            </div>

            <div className='myaccount-2'>
    
            </div>
         </div> 
          
    </div>
  )
}

export default MyAccount