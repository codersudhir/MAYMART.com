import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hair from '../Pages/Beauty/Hair'
import MakeUp from '../Pages/Beauty/MakeUp'
import Cart from '../Pages/Cart'
import MobileTablets from '../Pages/Electronics/MobileTablets'
import TvSpeaker from '../Pages/Electronics/TvSpeaker'
import Mens from '../Pages/Fashion/Mens'
import Womens from '../Pages/Fashion/Womens'
import Fruits_Vegitables from '../Pages/Groceries/Fruits_Vegitables'
import PremiumFruits from '../Pages/Groceries/PremiumFruits'
import Home from '../Pages/Home'
import Dining from '../Pages/Home&Kitchen/Dining'
import KitchWare from '../Pages/Home&Kitchen/KitchWare'
import MyAccount from '../Pages/MyAccount'
import Avocado from '../Pages/PremiumFruits/Avocado'
import Cherries from '../Pages/PremiumFruits/Cherries'
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import ProductPage from '../Common/Logo/products'
import PrivateRoute from './PrivateRoutes'
import ProductPage2 from '../Common/Logo/products2'
import Addproducts from './Addproducts'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<MyAccount />} />
          <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path='/fruits&vegitables' element={<Fruits_Vegitables />} />
          <Route path='/premiumfruits' element={<PremiumFruits />} />
          <Route path='/avocado...' element={<Avocado />} />
          <Route path='/cherries...' element={<Cherries />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/kitchenware' element={<KitchWare />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/mobiletablets' element={<MobileTablets />} />
          <Route path='/tvspeakers' element={<TvSpeaker />} />
          <Route path='/makeup' element={<MakeUp />} />
          <Route path='/hair' element={<Hair />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/productpage2' element={<ProductPage2 />} />
          <Route path='/addproducts' element={<Addproducts />} />
        </Routes>
    </div>
  )
}

export default AllRoutes