import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'
import { AUTH_SUCCESS, ERROR_MSG } from './action-type'
//数据结构持久化 修改immutable数据 返回一个新的immutable
const initUserState = Map({
  username: '',
  type: '',
  msg: ''  //错误提示信息
})

//user 的 reducer
function user(state = initUserState, action){
  switch(action.type) {
    case AUTH_SUCCESS:
      return state.merge(action.data)  //浅合并
    case ERROR_MSG:
      return state.set('msg', action.data)
    default:
      return state
  }
  
}



export default combineReducers({
  user
})
