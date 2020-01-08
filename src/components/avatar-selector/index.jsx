import React, { useState, useMemo } from 'react'
import { List, Grid } from 'antd-mobile'

function avatarList() {
  let avatarList = [];
  for (let i = 0; i < 20; i++) {
    avatarList.push({
      text: '头像' + (i + 1),
      icon: require(`./avatars/头像${i + 1}.png`)
    })
  }
  return avatarList
}

export default function AvatarSelector({changeHeader}) {

  const [header, setHeader] = useState(null)

  const listHeader = header ? (<div>已选择头像<img src={header} alt=""/></div>) : '请选择头像';

  const handleClick = ({icon, text}) => {
    //更改自身组件状态
    setHeader(icon)
    //更改info组件状态
    changeHeader(text)
  }


  const headerList = useMemo(() => avatarList(), [])

  return (
    <List renderHeader={() => listHeader}>
      <Grid data={headerList}
              columnNum={5}
              onClick={handleClick}
              />
    </List>
  )
}
