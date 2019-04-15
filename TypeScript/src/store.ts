import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga'
import  rootReducer from './reducers/rootReducers'
// import { helloSaga} from '../saga'
import thunk from 'redux-thunk';

// const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer,
    applyMiddleware(thunk)

    // applyMiddleware(sagaMiddleware)
    )
// sagaMiddleware.run(helloSaga);
