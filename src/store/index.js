import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
const initState = {
    title: ''
}

const store = createStore(reducer, initState)

export default store;