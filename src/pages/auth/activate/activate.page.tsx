import { useEffect, useState } from "react"
import HomePageTitle from "../../../components/common/title/homepage-title.component";
import LoadingComponent from "../../../components/loading/loading.component";
import authSvc from "../auth.service";



const ActivationPage = () =>{
    const [loading, setLoading] = useState(true)
    const params = useParams()
 
    const getVerified =async() =>{
        try{
            const token= params.token;
            const response = await authSvc.getRequest('/auth/activate/+token');

        }catch(exception){

        }
    }


    useEffect(() =>{
        getVerified()

    },[])
    return(<>
    
    <HomePageTitle title="Activate your Account" />

   <div className="mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">
{
    loading ? <>
   
    
    <div className="test-center  item-center justify-center ">
    <LoadingComponent size="xl" />
    </div>
    
    </>:<></>


}
  </div>


    </>)
}

export default ActivationPage