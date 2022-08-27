import React from 'react'
import ResponsiveAppBar from '../../components/NavBar/ResponsiveAppBar'
import Dropdown from '../../components/UiElements/Dropdown/Dropdown'
import Checkout from '../../components/CheckoutItems/Checkout'

export const CheckoutBasket = () => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Dropdown/>
        <Checkout/>
    </div>
  )
}
