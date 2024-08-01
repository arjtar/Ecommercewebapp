import { useContext, useState,useEffect } from "react";
import LoadingComponent from "../components/loading/loading.component";
import NoPermission from "../pages/errors/no-permission.page";
import AuthContext from "../context/auth.context";

const AllowUser = ({allowUser, children}: {allowUser: string, children: any}) => {

const [loading, setLoading] = useState<boolean>(true);
const [giveAccess, setAccess] = useState<boolean>(false);

const auth : any = useContext(AuthContext);


useEffect (() => {
    if(auth.loggedInUser) {
        // setLoading(false);
        if(allowUser === auth.loggedInUser.role){
            setAccess(true);
;
        }else{
            setAccess(false)
        }
        setLoading(false)
    }

},[auth])


return(<>
{
    loading ? <>

    <LoadingComponent />
    </>:<>
    {
        giveAccess ? <>{children}</> : <>
        <NoPermission />
        </>

         
    }

    </>
}
</>)

}

export default AllowUser;