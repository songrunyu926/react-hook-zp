//登录路由组件
import React, {useState} from "react";
import {
  NavBar,
  WhiteSpace,
  WingBlank,
  List,
  InputItem,
  Button
} from "antd-mobile";
import Logo from "../../components/Logo";


function Login({history}) {

  //定义状态
  const [ username, setUsername ] = useState('')
  const [ password , setPassword ] = useState('')

  //注册
  const register = () => {
    console.log(username)
    console.log(password)
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
          <InputItem onChange={value => setPassword(value)} type="password" placeholder="请输入密码">
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

export default Login;

