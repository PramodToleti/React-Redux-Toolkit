import React from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks/hooks"

const Navbar: React.FC = () => {
  const cartState = useAppSelector((state) => state.cart)
  const cartCount = cartState.cart.length
  return (
    <nav className=" px-16 h-20 text-xl font-medium flex flex-row justify-between items-center shadow-lg">
      <Link to="/">
        <div>Redux Toolkit</div>
      </Link>
      <Link to="/cart">
        <h1 className="flex gap-2">
          Cart{" "}
          <span className=" bg-black text-base w-6 h-6 px-2 rounded-full text-white flex justify-center items-center  relative -left-1 -top-2">
            {cartCount}
          </span>
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar
