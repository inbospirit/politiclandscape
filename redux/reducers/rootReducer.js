import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Example: auth reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add your reducers here
});

export default rootReducer;




