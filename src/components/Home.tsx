import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { fetchProducts } from "../redux/slices/productsSlice"
import { add } from "../redux/slices/cartSlice"
import { toast } from "react-hot-toast"
import { TailSpin } from "react-loader-spinner"

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  category: string
  rating: object
}

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  useEffect(() => {
    if (!state.products.hasFetched) {
      dispatch(fetchProducts())
    }
  }, [dispatch, state.products.hasFetched])

  const renderProducts = () =>
    state.products.isLoading ? (
      <div className="h-screen w-screen flex justify-center items-center text-2xl">
        <TailSpin
          height="60"
          width="60"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    ) : (
      <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
        {state.products.data &&
          state.products.data.map((each: Product) => (
            <div
              className=" flex flex-col justify-center p-4 rounded-xl items-center mb-8 sm:mb-10 w-full max-w-xs sm:w-4/12 shadow-lg "
              key={each.id}
            >
              <img
                src={each.image}
                alt="product-image"
                className=" h-36 mix-blend-multiply mb-7"
              />
              <h1 className="text-sm text-center">{each.title}</h1>
              <p className="text-xl font-medium mt-5">${each.price}</p>
              <div className="flex flex-row gap-4 mt-7">
                {/*  <button
                  className="bg-blue-500  text-white p-2 rounded-full text-xs font-medium hover:bg-blue-600 transition-all ease"
                  type="button"
                >
                  Buy Now
                </button> */}
                <button
                  className=" bg-blue-500  text-white p-2 rounded-full text-xs font-medium hover:bg-blue-600 transition-all ease"
                  type="button"
                  onClick={() => {
                    dispatch(add(each))
                    toast.success("Added to Cart 🥳")
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    )

  return renderProducts()
}

export default Home
