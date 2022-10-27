import { CartComponent } from './styles'

import CartIcon from '../../../../assets/svg/cart-icon.svg'

import { NavLink } from 'react-router-dom'

export function Cart() {
  return (
    <CartComponent>
      <NavLink to={'/checkout'}>
        <img src={CartIcon} alt="" />
      </NavLink>
      <span>4</span>
    </CartComponent>
  )
}
