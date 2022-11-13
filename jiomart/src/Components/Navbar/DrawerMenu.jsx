import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Heading,
    Box,
    Spacer,
  } from '@chakra-ui/react'
import DrawerLogo from '../Common/Logo/DrawerLogo'
import List_1 from './DrawerMenuList/List_1'
import List_2 from './DrawerMenuList/List_2'
import ContactUs from '../Footer/ContactUs'
import { NavLink } from 'react-router-dom'

  function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button marginTop='20px' backgroundColor='rgb(0,139,206)' ref={btnRef} onClick={onOpen}>
        <DrawerLogo/>
        </Button>
        <Drawer backgroundColor='gray.200'
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color='white' />
            
            <Box border='1px solid none' padding='2%' backgroundColor='rgb(0,142,204)'>
            <Heading color='white' padding='5%' as='h6' size='xs'>Hello, <NavLink to='/signin'>Sign in</NavLink></Heading>
            <Box>
              <Button 
              color='white' 
              backgroundColor='rgb(0,142,204)' 
              border='1px solid white' 
              width='150px'
              borderRadius='none'
              marginRight='5px'
              ><NavLink to='/signin'>Account</NavLink></Button>

              <Button
               color='white' 
               backgroundColor='rgb(0,142,204)' 
               border='1px solid white' 
               width='150px'
               borderRadius='none'
              ><NavLink to='/cart'>Orders</NavLink></Button>
            </Box>
            </Box>
            
            {/* <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody> */}
            <Box backgroundColor='gray'>
            <List_1/>
            <List_2/>
            </Box>
           
            {/* <ContactUs /> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerMenu