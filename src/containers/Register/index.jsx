//注册路由组件
import React, {useState} from "react";
import {
  NavBar,
  WhiteSpace,
  WingBlank,
  List,
  InputItem,
  Radio,
  Button,
  Toast
} from "antd-mobile";
import Logo from "../../components/Logo";
import {connect} from 'react-redux'
import { registerAsync } from '../../redux/action-creators'

const { Item } = List;

function Register({history, registerAsync, user}) {

  //定义状态
  const [ username, setUsername ] = useState('')
  const [ password , setPassword ] = useState('')
  const [ password2 , setPassword2 ] = useState('')
  const [ type, setType ] = useState('xiannv')

  //注册
  const register = async () => {
      await registerAsync({username, password, password2, type})
      if(user.get('msg') !== ''){
        Toast.fail(user.get('msg'), 2)
        setPassword('')
        setPassword2('')
      }else {
        // history.replace('/')
      }
  }


  return (
    <div>
      <NavBar mode="dark">喵喵招聘</NavBar>
      <Logo></Logo>
      <WingBlank size="lg">
        <List>
          <WhiteSpace />
          <InputItem value={username} onChange={value => setUsername(value)} placeholder="请输入用户名">用户名:</InputItem>
          <WhiteSpace />
          <InputItem value={password} onChange={value => setPassword(value)} type="password" placeholder="请输入密码">
            密&nbsp;&nbsp;&nbsp;码:
          </InputItem>
          <WhiteSpace />
          <InputItem value={password2} onChange={value => setPassword2(value)} type="password" placeholder="请确认密码">
            确认密码:
          </InputItem>
          <WhiteSpace />
          <Item>
            <span>用户类型: </span>
            &nbsp;&nbsp;&nbsp;
            <Radio value={type} name="type" checked={type === 'xiannv'} onChange={() => setType('xiannv')}>仙女</Radio>
            &nbsp;&nbsp;&nbsp;
            <Radio value={type} name="type" checked={type === 'laoban'} onChange={() => setType('laoban')}>老板</Radio>
          </Item>
          <WhiteSpace />
          <Button type="primary" onClick={register}>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
          <WhiteSpace />
          <Button onClick={() => history.replace('/login')}>已有账户</Button>
        </List>
      </WingBlank>
    </div>
  );
}

export default connect(state => ({user: state.get('user')}), {registerAsync})(Register);
