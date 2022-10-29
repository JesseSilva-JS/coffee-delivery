import { SummaryCartForm } from './styles'
import coffeeImage1 from '../../../../assets/img/checkout/Coffee-1.png'
import { NavLink } from 'react-router-dom'
export function SummaryCart() {
  return (
    <>
      <SummaryCartForm>
        <section className="summaryTop">
          <div className="productShelf">
            <div className="productImg">
              <img src={coffeeImage1} alt="" />
            </div>
            <div className="productDetails">
              <div className="productName">
                <h3>Expresso Tradicional</h3>
              </div>
              <div className="productDetailsItems">
                <div className="productQuantit"></div>
                <div className="productRemove"></div>
              </div>
            </div>
            <div className="productValue">
              <span>R$ 9,90</span>
            </div>
          </div>
          <div className="productShelf">
            <div className="productImg">
              <img src={coffeeImage1} alt="" />
            </div>
            <div className="productDetails">
              <div className="productName">
                <h3>Expresso Tradicional</h3>
              </div>
              <div className="productDetailsItems">
                <div className="productQuantit"></div>
                <div className="productRemove"></div>
              </div>
            </div>
            <div className="productValue">
              <span>R$ 9,90</span>
            </div>
          </div>
          <div className="productShelf">
            <div className="productImg">
              <img src={coffeeImage1} alt="" />
            </div>
            <div className="productDetails">
              <div className="productName">
                <h3>Expresso Tradicional</h3>
              </div>
              <div className="productDetailsItems">
                <div className="productQuantit"></div>
                <div className="productRemove"></div>
              </div>
            </div>
            <div className="productValue">
              <span>R$ 9,90</span>
            </div>
          </div>
          <div className="productShelf">
            <div className="productImg">
              <img src={coffeeImage1} alt="" />
            </div>
            <div className="productDetails">
              <div className="productName">
                <h3>Expresso Tradicional</h3>
              </div>
              <div className="productDetailsItems">
                <div className="productQuantit"></div>
                <div className="productRemove"></div>
              </div>
            </div>
            <div className="productValue">
              <span>R$ 9,90</span>
            </div>
          </div>
        </section>
        <section className="summaryBottom">
          <div className="summarytotalize">
            <table>
              <tr>
                <td>Total de itens</td>
                <td>R$29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$3,50</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>R$33,20</td>
              </tr>
            </table>
          </div>

          <NavLink to={'/orderplaced'}>CONFIRMAR PEDIDO</NavLink>
        </section>
      </SummaryCartForm>
    </>
  )
}
