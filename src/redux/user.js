import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: []
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      createAccountSuccess(state, action){
        state.users = action.payload
      }
    }
})

export const {createAccountSuccess} = user.actions;

export const createAccount = ({firstName, lastName, email, password, address}) => async (dispatch) => {
  const res = await axios.post("http://localhost:9081/users",{firstName, lastName, email, password, address});
  dispatch(createAccountSuccess(res.data))
}

export default user.reducer;








