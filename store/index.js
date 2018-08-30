/**
 * 状态数据存储的地方
 */

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'



// state
const exampleInitialState = {
    mark_onoff: false
}

// constant
export const actionTypes = {
    /* loading显示隐藏开关 */
    MARK_ONOFF: 'MARK_ONOFF',
}

/* reducer */
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.MARK_ONOFF:
            return Object.assign({}, state, {
                mark_onoff: action.mark_onoff
            })
        default:
            return state
    }
}

/* action */
export const startClock = dispatch => {
    return setInterval(() => {
        // Dispatch `TICK` every 1 second
        dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}



/* 创建store */
export function initializeStore(initialState = exampleInitialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}