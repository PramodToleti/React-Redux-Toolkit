import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { remove } from "../redux/slices/cartSlice"
import { toast } from "react-hot-toast"

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  category: string
  rating: object
}

const Cart = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.cart)
  const products = state.cart

  console.log(products)

  if (products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-96 w-screen">
        <h1 className=" text-2xl mb-4">Cart is Empty</h1>
        <Link to="/">
          <button
            className=" bg-indigo-400 text-white p-3 rounded-full text-sm"
            type="button"
          >
            Shop Now
          </button>
        </Link>
      </div>
    )
  }
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
      {products &&
        products.map((each: Product) => (
          <div
            className=" flex flex-col justify-center p-4 rounded-xl items-center mb-8 sm:mb-10 w-full max-w-xs sm:w-4/12 shadow-lg "
            key={each.id}
          >
            <img
              src={each.image}
              alt="product-image"
              className=" h-44 mix-blend-multiply mb-7"
            />
            <h1 className="text-sm text-center">{each.title}</h1>
            <p className="text-sm font-medium mt-5">${each.price}</p>
            <div className="flex flex-row gap-4 mt-4">
              <button
                className=" bg-blue-500 text-white p-2 rounded-full text-xs font-medium hover:bg-blue-600 transition-all ease"
                type="button"
              >
                Checkout
              </button>
              <button
                className=" bg-red-500 text-white p-2 rounded-full text-xs font-medium hover:bg-red-600 transition-all ease"
                type="button"
                onClick={() => {
                  dispatch(remove(each.id))
                  toast.success("Item removed from Cart 🛒")
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Cart
