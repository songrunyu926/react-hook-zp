/*
提示找不到页面的UI路由组件
 */

import React from "react"
import {Button} from "antd-mobile"

function NotFound({history}) {



    return (
      <div>
        <div>
          <h2>抱歉，找不到该页面!</h2>
          <Button
            type="primary"
            onClick={() => history.replace('/')}
          >
            回到首页
          </Button>
        </div>
      </div>
    )
  
}

export default NotFound
