import { TITLE } from './types'

import { initState } from './state'


const setTitle = (state = initState, action = {}) => {
    switch(action.type) {
        case TITLE:
            return {...state, title: action.data}
        default:
            return state
    }
}


export default setTitle