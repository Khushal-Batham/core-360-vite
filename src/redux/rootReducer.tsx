import { combineReducers } from '@reduxjs/toolkit';

import postReducer from '../pages/accounts/redux/postSlice'; 
import counterReducer from '../pages/accounts/redux/counterSlice'; 

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer
});

export default rootReducer;
