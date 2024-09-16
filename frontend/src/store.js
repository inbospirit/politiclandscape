import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Importa redux-thunk
import rootReducer from './reducers/rootReducer'; // Importa tus reducers combinados

// Aplica el middleware redux-thunk
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Añade thunk al store
);

export default store;
