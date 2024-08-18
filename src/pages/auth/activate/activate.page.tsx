import { useContext, useEffect, useState } from "react";
import HomePageTitle from "../../../components/common/title/homepage-title.component";
import LoadingComponent from "../../../components/loading/loading.component";
import authSvc from "../auth.service";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import AuthContext from "../../../context/auth.context";
import { toast } from "react-toastify";
 




const ActivationPage = () => {
    const [loading, setLoading] = useState(true)
    let [msg, setMsg] = useState("");
    let [isExpired, setIsExpired] = useState(false)

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);

    const params = useParams()
 
    const getVerified = async() => {
        try{
            const token= params.token;
            await  authSvc.getRequest('/auth/activate/'+token);
            
            setMsg("your account has been activated successfully, please login to continue..")


        }catch(exception: any){

            if (+exception.status=== 400 && exception.data.result && exception.data.result.hasOwnProperty('token') && exception.data.result.token==='expired') {
                setMsg("your token has been expired. Please confirm resending the token,");
                setIsExpired(true)
            } else {
                setMsg("your account has been already activated. please contact eith login")
            }

        }finally {
            setLoading(false)
        }
    };

    const resendToken = async()=>{
        try{
            setLoading(true);
            await authSvc.getRequest("/auth/resend-token/"+params.token);
            setMsg("a new activation email has been sent to your registerd email. Please check for further process")
            // setIsExpired(false);
        }catch(exception) {
            setMsg(" there was a problem while sending to activation email.please contact our admin for further processing")
            // setIsExpired(false);

        }finally{
            setLoading(false)
            setIsExpired(false);

     
        }
    }


    useEffect(() =>{
        getVerified()
    },[])

    useEffect(() =>{
        if(auth.loggedInUser){
          toast.info("You are already loggged in")
          navigate("/" + auth.loggedInUser.role)
        }
      }, [auth])


    return(<>
    
    <HomePageTitle title="Activate your Account" />

   <div className="mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">

   {
loading ? <>
   
    
    <div className="test-center  item-center justify-center ">
    <LoadingComponent size="xl" />
    </div>
    
    </>:<>
   
    <div className="test-center  item-center justify-center ">
    {
        msg ? msg :<></>
    }
    {
        isExpired ? <>
        <div className="flex text-center">
        <Button onClick={resendToken} className="w-[50%] bg-gteal-800" color={"teal"}>
            confirm Resending Activation Link
        </Button>

        </div>
        </>:<></>
    }
   </div> 
   </>
}
</div>


 </>)

}

export default ActivationPage;