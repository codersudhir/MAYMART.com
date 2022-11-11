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

const PremiumFruits= () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Premium Fruits
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>
              <NavLink to='avocado...'>Avocado, Peach, plumm</NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to='cherries...'>Cherries, Berries & Exotic Fruits</NavLink>
            </MenuItem>
            <MenuItem>Pomegranate, papaya & Pineapples Dats</MenuItem>
            <MenuItem>Citrus, Mango, & Graps</MenuItem>
            <MenuItem>Snacks & Branded Food</MenuItem>
            <MenuItem>Apples , Pears</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default PremiumFruits