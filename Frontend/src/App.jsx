import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { useStore } from './store'
import CartPage from './components/CartPage'
import ShopPage from './components/ShopPage'

const App = () => {
  const loadProducts = useStore((state) => state.loadProducts)
  const cartCount = useStore((state) =>
    Object.values(state.cart).reduce((total, quantity) => total + quantity, 0),
  )

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <div className="brand">
            <div className="brand-mark">Z</div>
            <div>
              <p className="brand-title">Starter Store</p>
              <p className="brand-subtitle">Zustand demo</p>
            </div>
          </div>
          <nav className="nav">
            <NavLink className="nav-link" to="/">
              Shop
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart <span className="nav-badge">{cartCount}</span>
            </NavLink>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Starter Store · Built with Zustand</p>
          <div className="footer-links">
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
