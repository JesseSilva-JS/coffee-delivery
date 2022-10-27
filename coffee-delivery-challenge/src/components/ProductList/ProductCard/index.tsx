import {
  ProductCardContainer,
  ProductImg,
  ProductFlag,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductQuantity,
  ProductBuyButton,
  ProductContainerBuy,
  ProductCardMain,
} from './styles'

import ProductImg1 from '../../../assets/img/products/Coffee-1.png'
import IconPlus from '../../../assets/svg/button-plus.svg'
import IconLess from '../../../assets/svg/button-less.svg'
import IconCart from '../../../assets/svg/cart-icon-shelf.svg'
export function ProductCard() {
  return (
    <ProductCardMain>
      <ProductCardContainer>
        <ProductImg src={ProductImg1} />
        <ProductFlag> tradiconal</ProductFlag>
        <ProductName>Nossos Cafés</ProductName>
        <ProductDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductDescription>
        <ProductContainerBuy>
          <ProductPrice>
            <span>R$</span>
            <strong>9,90</strong>
          </ProductPrice>

          <ProductQuantity>
            <div className="qtd-controls">
              <span id="qtd-controls-less" data-id="8242" data-index="0">
                <img src={IconLess} alt="" />
              </span>
              <input id="minicart-input-qtd" type="text" value="1" disabled />
              <span id="qtd-controls-plus" data-id="8242" data-index="0">
                <img src={IconPlus} alt="" />
              </span>
            </div>
          </ProductQuantity>

          <ProductBuyButton>
            <img src={IconCart} alt="Adicionar ao carrinho" />
          </ProductBuyButton>
        </ProductContainerBuy>
      </ProductCardContainer>
      <ProductCardContainer>
        <ProductImg src={ProductImg1} />
        <ProductFlag> tradiconal</ProductFlag>
        <ProductName>Nossos Cafés</ProductName>
        <ProductDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductDescription>
        <ProductContainerBuy>
          <ProductPrice>
            <span>R$</span>
            <strong>9,90</strong>
          </ProductPrice>

          <ProductQuantity>
            <div className="qtd-controls">
              <span id="qtd-controls-less" data-id="8242" data-index="0">
                <img src={IconLess} alt="" />
              </span>
              <input id="minicart-input-qtd" type="text" value="1" disabled />
              <span id="qtd-controls-plus" data-id="8242" data-index="0">
                <img src={IconPlus} alt="" />
              </span>
            </div>
          </ProductQuantity>

          <ProductBuyButton>
            <img src={IconCart} alt="Adicionar ao carrinho" />
          </ProductBuyButton>
        </ProductContainerBuy>
      </ProductCardContainer>
      <ProductCardContainer>
        <ProductImg src={ProductImg1} />
        <ProductFlag> tradiconal</ProductFlag>
        <ProductName>Nossos Cafés</ProductName>
        <ProductDescription>
          O tradicional café feito com água quente e grãos moídos
        </ProductDescription>
        <ProductContainerBuy>
          <ProductPrice>
            <span>R$</span>
            <strong>9,90</strong>
          </ProductPrice>

          <ProductQuantity>
            <div className="qtd-controls">
              <span id="qtd-controls-less" data-id="8242" data-index="0">
                <img src={IconLess} alt="" />
              </span>
              <input id="minicart-input-qtd" type="text" value="1" disabled />
              <span id="qtd-controls-plus" data-id="8242" data-index="0">
                <img src={IconPlus} alt="" />
              </span>
            </div>
          </ProductQuantity>

          <ProductBuyButton>
            <img src={IconCart} alt="Adicionar ao carrinho" />
          </ProductBuyButton>
        </ProductContainerBuy>
      </ProductCardContainer>
    </ProductCardMain>
  )
}
