// @ts-check
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root-reducer";
import { forbiddenWordsMiddleware } from './middleware/string-processing';
import thunk from 'redux-thunk';

const storeEnhancers = compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
    //applyMiddleware(forbiddenWordsMiddleware)
);

export default store;