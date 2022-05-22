import { connect } from "react-redux";

import Cart from "../pages/Cart";
import { deletePost, checkoutCartItems } from "../redux/cart";

const mapStatetoProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapActionstoProps = {
  deletePost,
  checkoutCartItems
}
export default connect(mapStatetoProps, mapActionstoProps)(Cart)