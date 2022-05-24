import { connect } from "react-redux";

import Register from "../pages/Register";

import { createAccount } from "../redux/user";

const mapStatetoProps = (state) => ({
  users: state.user.users
})

const mapActionstoProps = {
  createAccount
}

export default connect(mapStatetoProps, mapActionstoProps)(Register)