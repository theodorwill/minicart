import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <Container fluid style={{padding: "0"}}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Container>
    </CartProvider>
  )
}

export default App
