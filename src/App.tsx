import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
