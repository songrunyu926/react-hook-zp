import React,{ useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { NavBar, InputItem, Button, TextareaItem, Toast} from 'antd-mobile'
import AvatarSelector from '../../components/avatar-selector'
import { updateAsync } from '../../redux/action-creators'

 function XiannvInfo({history, updateAsync}) {

  const [header, setHeader] = useState('')
  const [post, setPost] = useState('')
  const [info, setInfo] = useState('')

  //更改头像的方法 要传给AvatarSelector组件
  const changeHeader = useCallback(head => setHeader(head),[])
 
  const save = useCallback(async () => {
    if (header === "") {
      Toast.fail("请先选择头像", 2);
    } else {
      // 获取结果
      const result = await updateAsync({ header, post, info });
      // 判断结果
      if (result) {
        Toast.fail(result, 2);
        history.replace('/login')
      }else {
        history.replace('/xiannv')
      }
    }
  // eslint-disable-next-line
  }, [header, post, info]);
  

  return (
    <div>
      <NavBar> 完善仙女信息 </NavBar>
      <AvatarSelector changeHeader={changeHeader} />
      <br/>
      <br/>
      <InputItem placeholder="请输入求职岗位" onChange={val => setPost(val)}>求职岗位:</InputItem>
      <TextareaItem title="个人介绍:" onChange={val => setInfo(val)} rows={3} />
      <br/>
      <br/>
      <Button type='primary' onClick={save}>保存完整信息</Button>
    </div>
  )
}

export default connect(null,{updateAsync})(XiannvInfo)
