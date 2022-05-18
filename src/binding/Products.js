import { connect } from "react-redux";

import Products from "../pages/Products";
import { fetchProducts } from "../redux/product";
import { postCartItems } from "../redux/cart";

const mapStatetoProps = (state) => ({
  products: state.product.products
})

const mapActionstoProps = {
  fetchProducts,
  postCartItems
}

export default connect(mapStatetoProps, mapActionstoProps)(Products);