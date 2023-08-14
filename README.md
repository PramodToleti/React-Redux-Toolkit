# React Redux Toolkit E-commerce Store 🛒

Welcome to the React Redux Toolkit E-commerce Store repository! This project showcases a simple e-commerce store built using Vite, React with TypeScript, and Tailwind CSS. Learn how to leverage Redux Toolkit for state management and fetch data from an external API.

## Tech Stack 👩‍💻👨‍💻

- [Vite](https://vitejs.dev/): A fast build tool for modern web development.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A strict syntactical superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Redux Toolkit](https://redux-toolkit.js.org/): A library for efficient Redux development.

## Getting Started 🚀

To run the project on your local machine, follow these steps:

1. Clone the repository:
git clone https://github.com/PramodToleti/React-Redux-Toolkit.git

2. Install dependencies:
npm install

3. Start the development server:
npm run dev


## Features ✨

- **Home Route ("/"):** Displays a list of products fetched from [fakestoreapi.com](https://fakestoreapi.com/products).
- **Cart Route ("/cart"):** Shows the items you've added to the cart.
- **State Management:** Utilizes Redux Toolkit for managing both product data and cart state.
- **API Fetching:** Employs `createAsyncThunk` to fetch products from the API.
- **Responsive Design:** Designed using Tailwind CSS to ensure a seamless and visually appealing layout.

## Folder Structure 📁

- `src/`
- `components/`: Contains reusable components used throughout the app.
- `redux/`: Houses the Redux-related logic.
 - `store.js`: Initializes the Redux store.
 - `slices/`: Contains individual reducer logic using slices.
   - `cartSlice.js`: Manages cart-related state and actions.
   - `productsSlice.js`: Manages product list-related state and actions.
 - `hooks/`: Provides custom hooks for Redux store interactions.

## Redux Toolkit Flowchart 🔄

![Redux Toolkit Flowchart](./images/redux_toolkit_flowchart.png)

## Learn More 📚

Explore the comprehensive [Redux Toolkit Documentation](https://redux-toolkit.js.org/) to deepen your understanding of how Redux Toolkit simplifies state management in your applications.

## Contributing 🤝

Feel free to contribute to this project by opening issues or submitting pull requests. Any feedback or enhancements are highly encouraged and appreciated!

## License 📄

This project is licensed under the [MIT License](LICENSE).