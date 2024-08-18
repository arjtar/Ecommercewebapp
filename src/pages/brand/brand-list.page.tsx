import { NavLink } from "react-router-dom";
import { FaPlus, FaSearch,  } from "react-icons/fa";
import { Table, Pagination, TextInput, Badge} from "flowbite-react";
import { useEffect, useState } from "react";
import { TableRowSkeleton } from "../../components/table/skeleton.component";
import brandSvc from "./brand.service";
import {toast } from 'react-toastify';
import { useCallback } from "react";
import TableActionButtons from "../../components/table/action-button.component";

const AdminBrandList = () =>{

   const [pagiantionData, setPaginationData] = useState({
      currentPage: 1,
      totalPages: 1,
   });

   const [brand, setBrand] = useState<any>();
   const [loading, setLoading] = useState<boolean>(true);
   const [keyword, setKeyword] = useState<string>();


  const onPageChange = (page: number) => {
   setPaginationData({
      ...pagiantionData,
      currentPage: page

   })
   loadAllBrands({
    currentPage: page,
    limit: 10,
    search: null
   })
  
  }

  const loadAllBrands = useCallback(async({currentPage=1, limit=10, search=''}: {currentPage?: number, limit?:number, search?: string | null })=>{
    setLoading(true);

    try{
     const response:any = await brandSvc.getRequest("/brand",{auth:true, params: {limit: limit, page: currentPage, search: search}})
     setBrand(response.result)
     setPaginationData({
      ...pagiantionData,
      currentPage: response.meta.currentPages,
      totalPages: response.meta.totalPages
     })
    }catch(exception) {
      console.error(exception)
      toast.error("cannot load brand, please reload the page again")
    }finally{
      setLoading(false)
    }
  },[pagiantionData, keyword])

    useEffect(() =>{
      loadAllBrands({
        currentPage:1,
        limit: 10
    })
    },[])

    useEffect(() =>{
      const handler = setTimeout(()=>{
        loadAllBrands({
          currentPage: 1,
          limit: 10,
          search: keyword
        })
      },2000)
      return()=>{
        clearTimeout(handler);
      }
     
    },[keyword])

    const deleteData = useCallback(async(id: string) =>{
      try{
        setLoading(true)
        await brandSvc.deleteRequest('/brand/'+ id, {auth:true})
        toast.success("brand Deleted successfully")
        loadAllBrands({
          currentPage:1,
          limit: 10
        })
        setLoading(false);

      } catch(exception) {
        toast.error("brand cannot be deleted at this moment")
      }
    },[])


    return (<>
    <div className="my-5 border-b border-spacing-8 border-gray-700 flex-justify-between">
        <h1 className="text-3xl font-semibold py-3">
             Brand List page</h1>
             
                <NavLink to={'/admin/brand/create'}> className = {'flex  bg-teal-700 px-5 text-center py-3 rounded-md mb-3 text-white'}
                   <FaPlus /> Add brand

                </NavLink>
             


             <div className="overflow-x-auto my-5">

           <div  className="flex overflow-x-auto sm:justify-end my-5 className=w-1/4"></div> 

           <TextInput onChange={(e) => {
          e.preventDefault();
          setKeyword(e.target.value)
         }}
        id="email4" type="email" rightIcon={FaSearch} placeholder="search" required
         />


      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="bg-slate-800 test-white py-4">Name</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 test-white py-4">FEATURED</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 test-white py-4">Ststus</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 test-white py-4">Images</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 test-white py-4">
            Actions
            {/* <span className="sr-only">Edit</span> */}
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">


         {

            loading ? <>

            <TableRowSkeleton rows={3} cols={5} />

            </> :(
               brand ? <>
             
              {
            brand.map((row: any, indx: number) =>(
          <Table.Row key={indx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{row.name}</Table.Cell>
            {row.isFeatured ? "yes" : "No"}

            <a href={row.link} className="font-medium text-teal-600 hover:underline hover:text-teal-800" target="_brand"> {row.link}</a>
           
            <Table.Cell>
              <Badge color= {row.status === 'active' ? 'green' : "red"} size= {"sm"}>
                  {row.status === 'active' ? "publish": "unpublish"}
              </Badge>
            </Table.Cell>
            <Table.Cell>

              <img src={import.meta.env.VITE_IMAGE_URL+'brand/'+row.image} className="max-w-25"/>
            </Table.Cell>

            <Table.Cell className="flex">
             
           <TableActionButtons
           deleteAction={deleteData}
           id={row._id}
           editUrl={'/admin/brand/'+row._id+'/edit'}
           
           />

            </Table.Cell>
          </Table.Row>
        ))
      }
          </> : <>
               Add some data
               </>
            )
         }
         
        </Table.Body>
      </Table>


      <div className="flex overflow-x-auto sm:justify-end">
      <Pagination currentPage={pagiantionData.currentPage} totalPages={pagiantionData.totalPages} onPageChange={onPageChange} />
    </div>
    </div>
    </div>
    </>)
}
export default AdminBrandList;

//table search ra pagination