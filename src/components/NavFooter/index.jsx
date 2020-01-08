import React from 'react'
import { TabBar } from 'antd-mobile'
import { useLocation, useHistory } from 'react-router-dom'
const { Item } = TabBar
function NavFooter({navRoutes}) {
  const history = useHistory()
  const path = useLocation().pathname

  navRoutes = navRoutes.filter(nav => !nav.hide)
  console.log(navRoutes)
  return (
    <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
    <TabBar
    unselectedTintColor="#949494"
    tintColor="#33A3F4"
    barTintColor="white"
    >
      { navRoutes.map(route => (
        <Item 
          key={route.path}
          title={route.title}
          icon={{ uri: require(`./images/${ route.icon }.png`) }}
          selectedIcon={{uri: require(`./images/${ route.icon }-selected.png`)}}
          selected={path === route.path}
          onPress={() => history.replace(route.path)}
        ></Item>
      ) ) }
    </TabBar>
  </div>
  )
}
export default NavFooter
