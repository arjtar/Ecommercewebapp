import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 50000,
    timeoutErrorMessage: "server timed out",
    headers:{
        "Content-Type":"application/json"
  }
});

axiosInstance.interceptors.response.use(
(response) => {
    // console.log("success Interceptor", response)
    return response;
  },
(exception)=> {
    console.log("Error Interceptor", exception)
    throw exception
   }
 )
export default axiosInstance
