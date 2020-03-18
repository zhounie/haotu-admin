import { TITLE } from './types'

import { combineReducers } from 'redux'

const initState = {
    title: ''
}

const setTitle = (state = initState, action = {}) => {
    switch(action.type) {
        case TITLE:
            return {...state, title: action.data}
        default:
            return state
    }
}


export const reducer = combineReducers({
    setTitle
})