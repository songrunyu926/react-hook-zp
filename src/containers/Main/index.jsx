//主界面路由组件
/* 
  1 实现自动登录
  如果cookie中有userid，发送请求获取对应的user
  如果coolie中没有userid 自动进入login界面
  2 已经登录 如果请求根路径 
  根据user的type和user的header 来计算出要跳转的路径
*/
import React, { useEffect } from "react";
import { secondRoutes, navRoutes } from "../../config/routes";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Toast, NavBar } from "antd-mobile";
import cookies from "js-cookie";
import { userAsync } from "../../redux/action-creators";
import NavFooter from '../../components/NavFooter'

function Main({ history, location, user, userAsync }) {
  //流程分析

  //读取cookie中的userid  没有就重定向到登录页面 有的话就读取redux中的数据
  //redux中有数据 直接显示对应的界面   没有的话根据userid去请求数据

  //这里的逻辑是指直接访问某一个路由的逻辑

  useEffect(() => {
    goFunc(history, location, user, userAsync);
    // eslint-disable-next-line
  }, []);

  const path = location.pathname;

  //当前子路由
  const currentNav = navRoutes.find(route => route.path === path);

  if(currentNav) {
    // 决定哪个路由需要隐藏
    if(user.type === 'laoban') {
      // 隐藏数组的第1个
      navRoutes[0].hide = true
    } else {
      // 隐藏数组的第2个
      navRoutes[1].hide = true
    }
  }
  //渲染了两次
  console.log(1111)
  return (
    <>
      { currentNav ? <NavBar>{currentNav.title}</NavBar> : null}
      <div>
        <Switch>
          {navRoutes.map((route, index) => (
            <Route
              path={route.path}
              component={route.component}
              key={index}
            ></Route>
          ))}
          {secondRoutes.map((route, index) => (
            <Route {...route} key={index + 3}></Route>
          ))}
        </Switch>
      </div>
      {currentNav ?  <NavFooter navRoutes={navRoutes} />: null}
    </>
  );
}

export default connect(state => ({ user: state.user }), { userAsync })(Main);

//根据use的_id和rookie的userid判断跳转的路径
async function goFunc(history, location, user, userAsync) {
  const userId = cookies.get("userid");

  if (!userId) {
    history.replace("/login");
  } else {
    if (!user._id) {
      let result = await userAsync();
      if (result) {
        Toast.fail(result, 2);
        history.replace("/login");
      }
    } else {
      //读取访问的是哪一个路由
      let path = location.pathname;
      if (path === "/") {
        path = user.type === "laoban" ? "/laoban" : "/xiannv";
        path = user.header ? path : path + "info";
        history.replace(path);
      }
    }
  }
}


