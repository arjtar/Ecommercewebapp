import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import RegisterPage from "../pages/auth/register/register.page"
import NotFound from "../pages/errors/not-found.page"
import CategoryDetailPage from "../pages/category/category.detail";
import HomePageLayout from "../pages/layouts/home-layout.page";
import AdminDashboard from "../pages/dashboard/admin-dashboard.component";
import AdminPageLayout from "../pages/layouts/admin-layout.page";


const RouterConfig = ()=>{
    return(<>
    
<BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePageLayout />}>  
    <Route index element={<LandingPage />}></Route>
    <Route path='register' element={<RegisterPage />}></Route>

   <Route path='category:slug' element={<CategoryDetailPage/>}></Route>


  <Route path='*' element = {<NotFound />}></Route> 
  </Route>

  <Route path="/admin" element={<AdminPageLayout />}>
    <Route index element={<AdminDashboard/>}></Route>
  </Route>

  </Routes>

  </BrowserRouter>

  </>)
}

export default RouterConfig