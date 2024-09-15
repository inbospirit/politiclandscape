import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Import your combined reducers

// Create the store using the combined reducers
const store = createStore(rootReducer);

export default store;
