import { connect } from 'react-redux';

import Home from "../pages/Home";
import { postCartItems } from '../redux/cart';

const mapStatetoProps = (state) => ({
  products: state.product.products
});

const mapActionstoProps = {
  postCartItems
}


export default connect(mapStatetoProps, mapActionstoProps)(Home);

