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

const Groceries = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Groceries
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>
              <NavLink to='/fruits&vegitables'>Fruits & vegitables</NavLink>
            </MenuItem>

            <MenuItem>
              <NavLink to='/premiumfruits'>Premium Fruits</NavLink>
            </MenuItem>

            <MenuItem>Dairy & Bakery</MenuItem>
            <MenuItem>Stamples</MenuItem>
            <MenuItem>Snacks & Branded Food</MenuItem>
            <MenuItem>Beaverages</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default Groceries