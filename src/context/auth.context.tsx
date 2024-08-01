import {createContext,useState , useEffect} from "react";
import authSvc from "../pages/auth/auth.service";
import LoadingComponent from "../components/loading/loading.component";

let AuthContext = createContext({});

 export const AuthProvider =  ({children}: {children: any}) =>{

let [loggedInUser, setLoggedInUser] = useState();
let [loading, setloading] = useState<boolean>();


 const getLoggedInUser = async() => {
    setloading(true);

    try{
        const response: any = await authSvc.getRequest("/auth/me", {auth: true});
        setLoggedInUser(response.result)
        setloading(false)
    }catch(exception: any){
        if(exception.status === 401){
            if(exception.data.message === "jwt expired"){

            }
            localStorage.removeItem("_act")
            localStorage.removeItem("_rft")


        }
            setloading(false)
    
    }
}

useEffect(() =>{
    const token = localStorage.getItem("_act")
    if (token){
        getLoggedInUser()

    } else {
        setloading(false)
    }
},[])


return(
<AuthContext.Provider value = {{loggedInUser, setLoggedInUser}}>
{
    loading ? <>
    <LoadingComponent/>
    </> : <>{children}</>
}

</AuthContext.Provider>
)

}
export default AuthContext;