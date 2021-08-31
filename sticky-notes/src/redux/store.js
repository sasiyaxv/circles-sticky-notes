import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mySaga } from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const middleWareEnhancer = applyMiddleware(sagaMiddleWare);

const composedEnhancers = composeWithDevTools(...[middleWareEnhancer]);

export default createStore(rootReducer, composedEnhancers);
sagMiddleWare.run(mySaga);
