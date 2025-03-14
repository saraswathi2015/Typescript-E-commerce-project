import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductProvider.tsx'
import { CartProvider } from './context/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ProductProvider>
   
  </StrictMode>,
)
