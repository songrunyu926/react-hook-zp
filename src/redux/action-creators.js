import {
  User
} from '../api'
import {
  AUTH_SUCCESS,
  RECEIVE_USER,
  RESET_USER
} from './action-type'

//user 的 action

//授权成功的同步action
const authSuccess = user => ({
  type: AUTH_SUCCESS,
  data: user
})
//修改用户信息成功的同步action
const receiveUser = user => ({type: RECEIVE_USER, data: user})
//重置用户信息的同步action
const resetUser = () => ({type: RESET_USER})

//注册 的异步action
export const registerAsync = (user) => {
  return async dispatch => {
    //发送请求
    let result = await User.reqRegister(user)
    //调用同步的action
    if (result.code === 0) {
      //分发成功的action
      dispatch(authSuccess(result.data))
    } else {
      return result.msg
    }
  }
}

//登录的 的异步action
export const loginAsync = (user) => {
  return async dispatch => {
    //发送请求
    let result = await User.reqLogin(user)
    //调用同步的action
    if (result.code === 0) {
      //分发成功的action
      dispatch(authSuccess(result.data))
      return result.data
    } else {
      return result.msg
    }
  }
}

//修改数据的异步action
export const updateAsync = user => {
  return async dispatch => {
    //发送请求
    const result = await User.reqUpdate(user)
    if(result.code === 0) {
      dispatch(receiveUser(result.data))
    }else {
      //请求失败 输出错误信息
      dispatch(resetUser())
      return result.msg
    }
  }
}

//获取用户信息的异步action
export const userAsync = () => {
  return async dispatch => {
     //发送请求
     const result = await User.reqUser()
     if(result.code === 0) {
       dispatch(receiveUser(result.data))
     }else {
       //请求失败 输出错误信息
       dispatch(resetUser())
       return result.msg
     }
  }
}
