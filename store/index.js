/**
 * 状态数据存储的地方
 */

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'



// 初始化数据
const exampleInitialState = {
    mark_onoff: false,          /* loading开关 */
    navigation_message: [       /* 导航数据 */
        {
            btn_text: '电影',
            key: 'film'
        }, {
            btn_text: '电视剧',
            key: 'tv_play'
        }, {
            btn_text: '综艺',
            key: 'variety'
        }, {
            btn_text: '恐怖',
            key: 'terror'
        }, {
            btn_text: '动漫',
            key: 'cartoon'
        }
    ],
    banner_message: [           /* 从视频数据中，取出对应的数据 */
    ],
    vedio_message: [            /* 视频数据 */
    ]
}

// constant
export const actionTypes = {
    /* loading显示隐藏开关 */
    MARK_ONOFF: 'MARK_ONOFF',
    /* 导航数据 */
    NAVIGATION_MESSAGE: 'NAVIGATION_MESSAGE',
    /* 视频数据 */
    VEDIO_MESSAGE: 'VEDIO_MESSAGE'
}

/* reducer */
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.MARK_ONOFF:
            return Object.assign({}, state, {
                mark_onoff: action.mark_onoff
            })
        case actionTypes.NAVIGATION_MESSAGE:
            return Object.assign({}, state, {
                navigation_message: action.navigation_message
            })
        case actionTypes.VEDIO_MESSAGE:
            return Object.assign({}, state, {
                vedio_message: action.vedio_message,
                banner_message: action.vedio_message.slice(0,5)
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