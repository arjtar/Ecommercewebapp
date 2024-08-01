import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import  {useForm} from "react-hook-form";
import * as Yup from "yup";
import { InputLabel } from "../../components/common/form/label.component";
import { CancelButton, SingleImageUpload, StatusSelector, TextInputComponent,SubmitButton } from "../../components/common/form/input.component";
import { INPUT_TYPE } from "../../components/common/form/input.contract";
import { useNavigate, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import bannerSvc from "./banner.service";
import LoadingComponent from "../../components/loading/loading.component";


const AdminBannerEdit =() =>{
 const bannerDTO = Yup.object({
    name: Yup.string().min(2).required(),
    status:Yup.object({
        label: Yup.string().required(),
        value: Yup.mixed().required()
    }) .required(),
    
    link: Yup.string().url(),
    image: Yup.mixed().required()

 });

 const [loading, setLoading] = useState<boolean>(true)

 const {control, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(bannerDTO)
 })

const navigate = useNavigate();
const params = useParams();
const [detail, setDetail] = useState<any>();

const getBannerDetail = useCallback(async()=>{
try{
  const response :any = await bannerSvc.getRequest('/banner/',+params.id, {auth: true})
  let bannerDetail = {
    ...response.result,
    image: import.meta.env.VITE_IMAGE_URL+"banner/"+response.result.image

  }
  setDetail(bannerDetail)
  setValue('name', response.result.detail)
  setValue('link', response.result.link)
  setValue('status',{
    label: response.result.status === 'active' ? "Publish": "Unpublish",
    value: response.result.status

  })

  setValue('image', response.result.image);
  setLoading(false)

}catch(exception){
  toast.error("Banner cannot be fetched.")
  navigate("/admin/banner")
}
}, [params])

useEffect(() => {
getBannerDetail()
},[params])


 const submitEvent = async(data: any) => {
  setLoading(true);
  try{
  const submitData = {
    ...data,
    status: data.status.value
  }
  console.log(submitData)
  
  //  await bannerSvc.postRequest('/banner',submitData,{auth: true, file: true})
  //  toast.success("Banner Edit successsfully")
  //  navigate("/admin/banner")

   }catch(exception){
    console.log(exception);
    toast.error("Banner cannot be update at this moment.")

   }finally{
    setLoading(false)
   }
  }

    
   

    return(<>
    <section className="bg- white dark:bg-gray-900">
     <div className="py-8 px-4 mx-auto  lg:py-12">
      <h2 className="mb-7 text-2xl font-semibold text-gray-900 dark:text-white">Edit a new Product</h2>
      {
        loading ? <>
        <LoadingComponent/>

        </>:<>
        <form onSubmit={handleSubmit(submitEvent)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

            
              <div className="sm:col-span-2">
                <InputLabel htmlFor="name">Name: </InputLabel>
              
              <TextInputComponent
              name= "name"
              control= {control}
              msg={errors?.name?.message}
              />
              </div>

            <div className="sm:col-span-2">
                <InputLabel htmlFor="link">Link: </InputLabel>
                <TextInputComponent
              name= "link"
              type= {INPUT_TYPE.URL}
              control= {control}
              msg={errors?.link?.message}
              />
              </div>
            

            <div className="sm:col-span-2">
                <InputLabel htmlFor="link">Status: </InputLabel>
                <StatusSelector
              name= "status"
              
              control= {control}
              msg={errors?.status?.message}
              />
              </div>

              <div className="sm:col-span-2">
                <InputLabel htmlFor="link">Status: </InputLabel>
                <SingleImageUpload 
                name= "image"
                msg = {errors?.image?.message}
                setValue={setValue}
                imageUrl = {detail && detail.image}
                
                />
             
              </div>
                  
          </div>
          <CancelButton loading={loading as boolean} btnTxt="cancel"></CancelButton>

         <SubmitButton loading= {loading as boolean} btnTxt="Add Banner"></SubmitButton>
      </form>
        </>
      }
  </div>

  </section>  
    
</>)
} 

export default AdminBannerEdit;