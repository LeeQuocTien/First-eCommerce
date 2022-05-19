import { connect } from "react-redux";

import App from "../components/App";

import { fetchCartItems } from "../redux/cart";

const mapStatetoProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapActionstoProps = {
  fetchCartItems
}

export default connect(mapStatetoProps, mapActionstoProps)(App)


