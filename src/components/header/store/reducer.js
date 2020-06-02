import * as constants from './constants'
// import { fromJS } from 'immutable'

// const defaultState = fromJS({
//     myData: null
// })

// 初始默认的state
const defaultState = {
    myData: null
}

// const setData = (state, action) => {
//     return state.set('myData', action.data)
// }

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state)

    switch(action.type) {
        case constants.SET_DATA:
            // return setData(state, action)
            newState.myData = action.data
            return newState
        default:
            return state
    }
}