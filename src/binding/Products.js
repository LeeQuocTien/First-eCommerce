import { connect } from "react-redux";

import Products from "../components/Products";
import { fetchProducts } from "../redux/product";

const mapStatetoProps = (state) => ({
  products: state.product.products
})

const mapActionstoProps = {
  fetchProducts
}

export default connect(mapStatetoProps, mapActionstoProps)(Products);