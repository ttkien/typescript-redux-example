import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import  rootReducer from './rootReducers'
import { helloSaga} from '../../saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware)
    )
sagaMiddleware.run(helloSaga);


