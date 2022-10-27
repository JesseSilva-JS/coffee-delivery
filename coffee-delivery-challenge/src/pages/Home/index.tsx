import { Header } from '../../components/Header'
import { HomeContainer, BannerMain } from './styles'
import BannerMainCoffeeDelivery from '../../assets/img/banner-main-coffee-delivery.png'
import { ProductList } from '../../components/ProductList'
export function Home() {
  return (
    <HomeContainer>
      <Header />

      <BannerMain src={BannerMainCoffeeDelivery} />

      <ProductList />
    </HomeContainer>
  )
}
