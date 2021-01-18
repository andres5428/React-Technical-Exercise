import { createStore, applyMiddleware} from 'redux';
import { addTodo, initState } from './reducer/addTodoReducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, addTodo);

export const store = createStore(
    persistedReducer,
    initState, // initial state
    applyMiddleware(logger),
);

export const persistor = persistStore(store);
