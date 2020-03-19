import { TITLE, STATE } from './types'

export const setTitle = (title) => {
    return {
        type: TITLE,
        data: title
    }
}

export const setState = (state) => {
    return {
        type: STATE,
        data: state
    }
}