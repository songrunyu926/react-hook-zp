//把抹平请求的不同封装成一个函数
//axiosInstance 是经过拦截器处理过的axios实例
//interfaceObj是配置的路由接口

export default (axiosInstance, interfaceObj) => {
  //创建一个对象 放入封装发送请求的方法
  const api = {}
  //遍历interfaceObj
  for ( let name in interfaceObj) {
    //解构
    const {
      url,
      method,
      isForm
    } = interfaceObj[name]

    //每一个接口发送请求的方法 data 和 config 是组件发送请求的两个参数
    api[name] = async (data, config = {}) => {
      //传过来的data是一个js对象
      //数据类型转换  将传入的js对象 按需求转化为data(json formdata)
      let resultData = null
      //如果是isForm=true 转换成Formdata数据
      if (data && isForm) {
        resultData = new FormData()
        //formdata的值要使用append方法
        for (let key in data) {
          resultData.append(key, data[key])
        }
      } else {
        //传递json格式数据
        resultData = data
      }

      //请求方式的分类 get和delete 使用params参数 其他的使用data参数
      // eslint-disable-next-line
      switch (method) {
        case 'get':
        case 'delete':
          return await axiosInstance({
            url,
            method,
            params: resultData
          })
        case 'post':
        case 'put':
          let configData = (config && typeof config.data === "object") ? config.data : {};
          let endData;
          if (isForm) {
            for (let key in configData) {
              resultData.append(key, configData[key]);
            }
            endData = resultData;
          } else {
            endData = Object.assign(resultData, configData)
          }
          return await axiosInstance({
            url,
            method,
            data: endData
          })
      }
    }
  }
  return api
}
