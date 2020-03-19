import { TITLE, STATE } from './types'

import { initState } from './state'


export default (state = initState, action = {}) => {
    switch(action.type) {
        case TITLE:
            return {...state, title: action.data}
        case STATE:
            return {...state, state: action.data}
        default:
            return state
    }
}
