import { HeaderContainer } from './styles'
import LogoCoffee from '../../assets/svg/logo-coffee-delivery.svg'

import { Location } from './components/Location'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img alt="logo-coffee-delivery" src={LogoCoffee} />
      </a>

      <nav>
        <Location />
        <Cart />
      </nav>
    </HeaderContainer>
  )
}
