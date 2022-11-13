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

const HomeKitchen = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Home & Kitchen
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>
              <NavLink to='kitchenware'>Kitchenware</NavLink>
            </MenuItem>

            <MenuItem>
               <NavLink to='dining'>Dining</NavLink>
            </MenuItem>

            <MenuItem>Furnishing</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Furniture</MenuItem>
            <MenuItem>Toy, Games & Fitness</MenuItem>
            <MenuItem>Electrical</MenuItem>
            <MenuItem>Bathroom & Laundry Accessories</MenuItem>
            <MenuItem>Disposables</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default HomeKitchen