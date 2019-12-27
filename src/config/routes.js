import Login from '../containers/Login'
import Register from '../containers/Register'
import Main from '../containers/Main'


export default [
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
    component: Main,
    exact: true
  },
]
