import { connect } from "react-redux";

import Cart from "../pages/Cart";

const mapStatetoProps = (state) => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStatetoProps)(Cart)