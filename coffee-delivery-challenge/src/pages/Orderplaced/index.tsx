import { Header } from '../../components/Header'
import {
  OrderPlacedContainer,
  OrderPlacedArea,
  OrderPlacedContent,
} from './styled'

import IconLocation from '../../assets/svg/location-orderPlaced.svg'
import IconTime from '../../assets/svg/time-icon.svg'
import IconMoney from '../../assets/svg/money-icon.svg'
import Illustration from '../../assets/img/orderPlaced/Illustration.png'
export function OrderPlaced() {
  return (
    <OrderPlacedContainer>
      <Header />
      <OrderPlacedArea>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderPlacedContent>
          <div className="contentLeft">
            <div>
              <img src={IconLocation} alt="" />
              <section>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </section>
            </div>
            <div>
              <img src={IconTime} alt="" />

              <section>
                <p>Previsão de entrega</p>
                <p>
                  <span>20min - 30min</span>
                </p>
              </section>
            </div>
            <div>
              <img src={IconMoney} alt="" />
              <section>
                <p>Pagamento na entrega</p>
                <p>
                  <span>Cartão de Crédito</span>
                </p>
              </section>
            </div>
          </div>
          <div className="contentRight">
            <img src={Illustration} alt="" />
          </div>
        </OrderPlacedContent>
      </OrderPlacedArea>
    </OrderPlacedContainer>
  )
}
