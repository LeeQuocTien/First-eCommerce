import { connect } from "react-redux";

import TopNav from "../components/TopNav";

const mapStatetoProps = (state) => ({
  cartItems: state.cart.cartItems
})


export default connect(mapStatetoProps)(TopNav)