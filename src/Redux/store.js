import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';
import createSagaMiddleware from "@redux-saga/core";


const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleWare)
})

sagaMiddleWare.run(rootSaga)



export default store;