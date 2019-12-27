import axios from "axios"

const AxiosObj = axios.create({
  //baseURL:"http://localhost:4000",
  timeout:15000
})


AxiosObj.interceptors.request.use(function (config) {
   
  return config;
}, function (error) {
  return Promise.reject(error);
});


AxiosObj.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export default AxiosObj
