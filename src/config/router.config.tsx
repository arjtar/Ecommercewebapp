import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import {RegisterPage, LoginPage, ActivationPage} from "../pages/auth"
import NotFound from "../pages/errors/not-found.page"
import CategoryDetailPage from "../pages/category/category.detail";
import {HomePageLayout,AdminPageLayout} from "../pages/layouts";
import AdminDashboard from "../pages/dashboard/admin-dashboard.component";


import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const RouterConfig = ()=>{
    return(<>
    <ToastContainer
    theme="colored"
    />

<BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePageLayout />}>  
    <Route index element={<LandingPage />}></Route>
    <Route path='register' element={<RegisterPage />}></Route>
    <Route path='login' element={<LoginPage />}> </Route>
    <Route path='/activate/:token' element={<ActivationPage/>}> </Route>


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