import { CartComponent } from './styles'

import CartIcon from '../../../../assets/svg/cart-icon.svg'

export function Cart() {
  return (
    <CartComponent>
      <img src={CartIcon} alt="" />
      <span>4</span>
    </CartComponent>
  )
}
