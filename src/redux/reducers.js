import { combineReducers } from 'redux'
//import { Map } from 'immutable'
import { AUTH_SUCCESS, RECEIVE_USER, RESET_USER } from './action-type'
//数据结构持久化 修改immutable数据 返回一个新的immutable
const initUserState ={
  username: '',
  type: ''
}

//user 的 reducer
function user(state = initUserState, action){
  switch(action.type) {
    case AUTH_SUCCESS:
      return action.data  //浅合并
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return initUserState
    default:
      return state
  } 
}



export default combineReducers({
  user
})
