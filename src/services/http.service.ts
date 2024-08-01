import axiosInstance from "../config/axios.config"
import { toast } from 'react-toastify';
abstract class HttpService {
private headers = {};
private params = {};

    private getHeaders = (config:any) =>  {

        if(config.auth){
            let token = localStorage.getItem("_act") || null;
            if(!token){
                toast.error("please logged in first");
                
                document.location.href = "/login";
            }
            this.headers={
                ...this.headers,
                "Authorization": "Bearer "+token
            }  
        }

        if(config && (config.file || config.files)) {
            this.headers = {
                ...this.headers,
                "Content-Type": "multipart/form-data"
            }
        }

        if(config && config.params){
            this.params= {
            ...config.params,
            ...config.params
        }
        
        }

    } 

    



    

    postRequest = async(url:string, data: any = {}, config:any = null): Promise<any> => {
        try{
            this.getHeaders(config);

            const response = await axiosInstance.post(url, data, {
                headers:{...this.headers},
                params: {...this.params}
            });
             return response;

        }catch(exception){
            console.error("PostRequestException:",exception)
            throw exception
        }
    }

    getRequest = () =>{
        async (url:string, config:any = null)=>{
            try{
                this.getHeaders(config);
                const response = await axiosInstance.get(url, {
                   headers:{...this.headers},
                            params: {...this.params} 
                });
                return response;
            
            }catch(exception) {
                console.error("GetRequestExceptional:", exception)
                throw exception
              }
            }

        }

            

            

    putRequest = async(url:string, data:any ={}, config:  any = null)=>{}

    patchRequest = async(url:string, data:any ={},config: any = null)=>{}

    deleteRequest = async(url:string, config:any = null)=>{

        try{
            this.getHeaders(config);
            const response = await axiosInstance.delete(url, {
               headers:{...this.headers},
                        params: {...this.params} 
            });
            return response;
        
        }catch(exception) {
            console.error("DeleteRequestExceptional:", exception)
            throw exception
          }
        }
    }



export default HttpService;