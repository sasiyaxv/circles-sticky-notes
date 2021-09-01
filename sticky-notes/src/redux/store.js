import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mySaga } from "./sagas";
import rootReducer from "./reducers";

import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();

const middleWareEnhancer = applyMiddleware(sagaMiddleWare);

const composedEnhancers = composeWithDevTools(...[middleWareEnhancer]);

export default createStore(rootReducer, composedEnhancers);
sagaMiddleWare.run(mySaga);
