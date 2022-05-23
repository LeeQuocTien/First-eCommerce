import { connect } from "react-redux";

import App from "../components/App";

import { fetchCartItems } from "../redux/cart";
import { fetchProducts } from "../redux/product";

const mapStatetoProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapActionstoProps = {
  fetchCartItems,
  fetchProducts
}

export default connect(mapStatetoProps, mapActionstoProps)(App)


