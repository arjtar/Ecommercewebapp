import { BrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing";

const RouterConfig = ()=>{
    return(<>
    
<BrowserRouter>
<Routes>
  
  <Route path='/' element={<LandingPage/>}> </Route>

  <Route path='/register' element={<RegisterPage />}></Route>

  <Route path='/category:slug' element={<CategoryDetailPage/>}></Route>


  <Route path='*' element = {<NotFound />} </Route>
  

< /Routes>

</BrowserRouter>

   </> )
}
export default RouterConfig