import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "../features/language/languageSlice";
import userReducer from "../features/users/userSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
});

export default rootReducer;
