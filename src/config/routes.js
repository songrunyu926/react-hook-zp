import Login from '../containers/Login'
import Register from '../containers/Register'
import Main from '../containers/Main'
import LaobanInfo from '../containers/laoban-info'
import XiannvInfo from '../containers/xiannv-info'
import Laoban from '../containers/lanban'
import Xiannv from '../containers/xiannv'
import Message from '../containers/message'
import Personal from '../containers/personal'
import NotFound from '../components/notFound'



export const firstRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: true
  },
  {
    component: Main
  }
]

export const secondRoutes = [
  {
    path: '/laobaninfo',
    component: LaobanInfo,
    exact: true
  },
  {
    path: '/xiannvinfo',
    component: XiannvInfo,
    exact: true
  },
  {
    component: NotFound
  }
 
]

export const navRoutes = [
  {
    path: '/xiannv',
    component: Xiannv,
    title: '老板列表',
    icon: 'laoban',
    text: '老板',
    exact: true
  },
  {
    path: '/laoban',
    component: Laoban,
    title: '仙女列表',
    icon: 'dashen',
    text: '仙女',
    exact: true
  },
  {
    path: '/message',
    component: Message,
    title: '信息列表',
    icon: 'message',
    text: '信息',
    exact: true
  },
  {
    path: '/personal',
    component: Personal,
    title: '个人中心',
    icon: 'personal',
    text: '个人',
    exact: true
  },
 
]
