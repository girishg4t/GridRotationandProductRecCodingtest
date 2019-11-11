import { createStore, combineReducers } from 'redux';
import counterReducer from './../reducers/counterReducer'

export default function configureStore() {

    const appReducer = combineReducers({
        counter: counterReducer
    });

    let store = createStore(appReducer);
    return store;
}