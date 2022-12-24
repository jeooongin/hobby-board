import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.type;
    default: {
      const combineReducer = combineReducers({
        user: userSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
