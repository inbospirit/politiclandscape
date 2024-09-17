import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Make sure this path is correct

// Create store with thunk middleware
const store = createStore(
  rootReducer, // Your combined reducers
  applyMiddleware(thunk) // Apply redux-thunk middleware
);

export default store;


