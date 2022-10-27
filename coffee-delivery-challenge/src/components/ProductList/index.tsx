/* eslint-disable prettier/prettier */
import { ProductCard } from './ProductCard'
import { ProductListContainer } from './styles'

export function ProductList() {
  return (
    <ProductListContainer>
      <h2>Nossos Cafés</h2>
      <ProductCard/>
    </ProductListContainer>
  )
}
