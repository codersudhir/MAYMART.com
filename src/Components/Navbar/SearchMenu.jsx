import React from 'react'
import Groceries from './MenuList/Groceries'
import style from '../Styles/searchmenu.css'
import PremiumFruits from './MenuList/PremiumFruits'
import HomeKitchen from './MenuList/Home&Kitchen'
import Fashion from './MenuList/Fashion'
import Electronics from './MenuList/Electronics'
import Beauty from './MenuList/Beauty'
import Jwellery from './MenuList/Jwellery'

const SearchMenu = () => {
  return (
    <div className='searchmenu'>
      <Groceries />
      <PremiumFruits />
      <HomeKitchen/>
      <Fashion />
      <Electronics/>
      <Beauty/>
      <Jwellery/>
    </div>
  )
}

export default SearchMenu