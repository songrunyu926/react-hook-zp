import {
  User
} from '../api'
import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-type'

//user 的 action

//授权成功的同步action
const authSuccess = user => ({
  type: AUTH_SUCCESS,
  data: user
})
//错误同时信息的同步action
export const errorMsg = msg => ({
  type: ERROR_MSG,
  data: msg
})

//注册 的异步action
export const registerAsync = (user) => {
  return async dispatch => {
    const {
      username,
      password,
      password2,
      type
    } = user
    //前台校验
    if (!username) {
      return dispatch(errorMsg('用户名不能为空！'))
    }
    if (!password) {
      return  dispatch(errorMsg('密码不能为空！')) 
    }
    if (!password2) {
      return  dispatch(errorMsg('确认密码不能为空！')) 
    }
    if (password2 !== password) {
      return dispatch(errorMsg('两次输入的密码不一致！！'))
    }

    //发送请求
    let result = await User.reqRegister({
      username,
      password,
      type
    })
    //调用同步的action
    if (result.code === 0) {
      //分发成功的action
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
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
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}
