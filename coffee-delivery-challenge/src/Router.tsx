import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderPlaced } from './pages/Orderplaced'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orderplaced" element={<OrderPlaced />} />
    </Routes>
  )
}
