//登录路由组件
import React, {useState, useRef} from "react";
import {
  NavBar,
  WhiteSpace,
  WingBlank,
  List,
  InputItem,
  Button,
  Toast
} from "antd-mobile";
import Logo from "../../components/Logo";
import {connect} from 'react-redux'
import { loginAsync } from '../../redux/action-creators'


function Login({history, loginAsync}) {
  //定义状态
  const [ username, setUsername ] = useState('')
  const [ password , setPassword ] = useState('')

  const passwordRef = useRef('')

  //注册
  const register = async () => {
    if(!username){
      Toast.fail('请输入用户名', 2)
      setPassword('')
      return
    }
    if(!password){
      Toast.fail('请输入密码', 2)
      setPassword('')
      passwordRef.current.state.value = ''
      return
    }
    const result = await loginAsync({username, password})
    if(typeof result === 'string') {
      Toast.fail(result, 2)
      setPassword('')
      passwordRef.current.state.value = ''
    } else {
      let path =result.type === 'laoban' ? '/laoban' : '/xiannv'

      path = result.header ? path : path + 'info'
      
      history.replace(path)
    }
  }


  return (
    <div>
      <NavBar mode="dark">喵喵招聘</NavBar>
      <Logo></Logo>
      <WingBlank size="lg">
        <List>
          <WhiteSpace />
          <InputItem onChange={value => setUsername(value)} placeholder="请输入用户名">用户名:</InputItem>
          <WhiteSpace />
          <InputItem ref={passwordRef} onChange={value => setPassword(value)} type="password" placeholder="请输入密码">
            密&nbsp;&nbsp;&nbsp;码:
          </InputItem>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={register}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
          <WhiteSpace />
          <Button onClick={() => history.replace('/register')}>还没有账户</Button>
        </List>
      </WingBlank>
    </div>
  );
}

export default connect(null, {loginAsync})(Login);

