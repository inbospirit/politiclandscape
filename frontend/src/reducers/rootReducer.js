import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your authentication reducer

// Combine your reducers
const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers if needed
});

export default rootReducer;
