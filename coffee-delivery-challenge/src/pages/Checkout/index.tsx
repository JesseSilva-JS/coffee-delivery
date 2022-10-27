import { Header } from '../../components/Header'
import { AndressForm } from './components/AndressClient'
import { SummaryCart } from './components/CartSummary'
import { FormPayment } from './components/FormPayment'
import {
  CheckoutContainer,
  CheckoutArea,
  CheckoutAreaContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header />

      <CheckoutArea>
        <main>
          <CheckoutAreaContainer>
            <section className="container-left">
              <h2>Complete seu pedido</h2>
              <>
                <AndressForm />
                <FormPayment />
              </>
            </section>
          </CheckoutAreaContainer>
          <CheckoutAreaContainer>
            <h2>Cafés selecionados</h2>
            <section className="container-right">
              <SummaryCart />
            </section>
          </CheckoutAreaContainer>
        </main>
      </CheckoutArea>
    </CheckoutContainer>
  )
}
