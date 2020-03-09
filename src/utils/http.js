import axios, {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { Message } from 'element-ui'

const server = axios.create({
  timeout = "1000"
})
// 请求拦截器
server.interceptors.request.use(config=>{
  return config;
},err(error=>{
  
}))
// 响应拦截器
server.interceptors.response.use(response => {
  return response;
}, err(error => {
  let errMsg = "";
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401:
        errMsg = '登录超时，请您重新登录';
        this.$message.error(errMsg);
        break;
      case 402:
        errMsg = '登录超时，请您重新登录';
        this.$message.error(errMsg);
        break;
      case 403:
        errMsg = '登录超时，请您重新登录';
        this.$message.error(errMsg);
        break;
      case 404:
        errMsg = '登录超时，请您重新登录';
        this.$message.error(errMsg);
        break;
      case 405:
        errMsg = '登录超时，请您重新登录';
        this.$message.error(errMsg);
        break;
      case 500:
        errMsg = '服务器错误';
        this.$message.error(errMsg);
        break;
    }
  }

}))