import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

import { combineReducers } from 'redux'
import {initState} from './state'


const store = createStore(combineReducers(reducer), initState, applyMiddleware(thunk))

export default store;