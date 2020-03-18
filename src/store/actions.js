import { TITLE } from './types'

export const setTitle = (title) => {
    return {
        tpye: TITLE,
        data: title
    }
}