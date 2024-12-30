import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Importamos thunk correctamente
import taskReducer from './reducers/taskReducers'; // Asegúrate de que el camino es correcto

const rootReducer = combineReducers({
    tasks: taskReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

