import { KEY_PRESSED } from './action-types'

export const keyPressed = key => {
    return {
        type: KEY_PRESSED,
        key
    }
}