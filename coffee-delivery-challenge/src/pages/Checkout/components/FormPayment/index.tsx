import { FormPaymentContainer } from './styles'
import PaymentIcon from '../../../../assets/svg/payment-icon.svg'
import PaymentCard from '../../../../assets/svg/payment-card.svg'
import PaymentBank from '../../../../assets/svg/payment-bank.svg'
import PaymentMoney from '../../../../assets/svg/payment-money.svg'
export function FormPayment() {
  return (
    <FormPaymentContainer>
      <header>
        <img src={PaymentIcon} alt="" />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </header>
      <section>
        <button>
          <img
            src={PaymentCard}
            alt="Cartão de crédito"
            title="Cartão de crédito"
          />
          <span>Cartão de crédito</span>
        </button>
        <button>
          <img
            src={PaymentBank}
            alt="Cartão de débito"
            title="Cartão de débito"
          />
          <span>Cartão de Débito</span>
        </button>
        <button>
          <img src={PaymentMoney} alt="Dinheiro" title="Dinheiro" />
          <span>DINHEIRO</span>
        </button>
      </section>
    </FormPaymentContainer>
  )
}
