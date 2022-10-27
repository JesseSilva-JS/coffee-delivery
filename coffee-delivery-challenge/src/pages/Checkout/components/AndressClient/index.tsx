import {
  AndressFormContainer,
  CepInput,
  RuaInput,
  NumeroInput,
  Complemento,
  BairroInput,
  CidadeInput,
  UfInput,
} from './styles'
import LocationIcon from '../../../../assets/svg/location-icon-checkout.svg'

export function AndressForm() {
  return (
    <AndressFormContainer>
      <header>
        <img src={LocationIcon} alt="" />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </header>

      <section className="section-One">
        <CepInput placeholder="CEP" />
      </section>

      <section className="section-two">
        <RuaInput placeholder="Rua" />
      </section>

      <section className="section-three">
        <NumeroInput placeholder="Número" />
        <Complemento placeholder="Complemento" />
      </section>

      <section className="section-four">
        <BairroInput placeholder="Bairro" />
        <CidadeInput placeholder="Cidade" />
        <UfInput placeholder="UF" />
      </section>
    </AndressFormContainer>
  )
}
