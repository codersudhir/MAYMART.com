import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

const Beauty = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
         Beauty
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>

            <MenuItem>
              <NavLink to='/makeup'>Make-Up</NavLink>
            </MenuItem>

            <MenuItem>
              <NavLink to='/hair'>Hair</NavLink>
            </MenuItem>

            <MenuItem>Skin Care</MenuItem>
            <MenuItem>Fragrances</MenuItem>
            <MenuItem>Personal Care</MenuItem>
            <MenuItem>Mom & Baby</MenuItem>
            <MenuItem>Mens Grooming</MenuItem>
            <MenuItem>Tools & Appliances</MenuItem>
            <MenuItem>Covid Essetials</MenuItem>
            <MenuItem>Wellness</MenuItem>
            <MenuItem>Fitness</MenuItem>
            <MenuItem>Ayush</MenuItem>
            <MenuItem>Treatments</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default Beauty