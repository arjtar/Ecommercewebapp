import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import  {useForm} from "react-hook-form";
import * as Yup from "yup";
import { InputLabel } from "../../components/common/form/label.component";
import { CancelButton, SingleImageUpload, StatusSelector, TextInputComponent,SubmitButton } from "../../components/common/form/input.component";
import { useNavigate, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import brandSvc from "./brand.service";
import LoadingComponent from "../../components/loading/loading.component";
import { ToggleSwitch} from "flowbite-react";



const AdminBrandEdit =() =>{

  const [isFeatured, setIsFeatured] = useState<boolean>(false)

 const brandDTO = Yup.object({
    name: Yup.string().min(2).required(),
    status:Yup.object({
        label: Yup.string().required(),
        value: Yup.mixed().required()
    }) .required(),
    
    isFeatured: Yup.boolean().default(false),
    image: Yup.mixed().required()

 });

 const [loading, setLoading] = useState<boolean>(true)

 const {control, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(brandDTO)
 })

const navigate = useNavigate();
const params = useParams();
const [detail, setDetail] = useState<any>();

const getBrandDetail = useCallback(async()=>{
try{
  const response :any = await brandSvc.getRequest('/brand/',+params.id, {auth: true})
  let brandDetail = {
    ...response.result,
    image: import.meta.env.VITE_IMAGE_URL+"brand/"+response.result.image

  }
  setDetail(brandDetail)
  setValue('name', response.result.detail)
  setValue('isFeatured', response.result.isFeatured)
  setIsFeatured(response.result.isFeatured)
  setValue('status',{
    label: response.result.status === 'active' ? "Publish": "Unpublish",
    value: response.result.status

  })

  setValue('image', response.result.image);
  setLoading(false)

}catch(exception){
  toast.error("brand cannot be fetched.")
  navigate("/admin/brand")
}
}, [params])

useEffect(() => {
getBrandDetail()
},[params])


 const submitEvent = async(data: any) => {
  setLoading(true);
  try{
  const submitData = {
    ...data,
    status: data.status.value,
    isFeatured: isFeatured

  }
  console.log(submitData)
  
  //  await brandSvc.postRequest('/brand',submitData,{auth: true, file: true})
  //  toast.success("brand Edit successsfully")
  //  navigate("/admin/brand")

   }catch(exception){
    console.log(exception);
    toast.error("brand cannot be update at this moment.")

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
                <ToggleSwitch checked={isFeatured} label="" onChange={setIsFeatured} />

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

         <SubmitButton loading= {loading as boolean} btnTxt="Add brand"></SubmitButton>
      </form>
        </>
      }
  </div>

  </section>  
    
</>)
} 

export default AdminBrandEdit;