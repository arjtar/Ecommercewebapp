import { Carousel} from "flowbite-react"
import {useEffect,useState} from "react"

export const HomePageBanner = () =>{
    const [bannerData, setBannerData] = useState([])
    let [loading, setLoading] = useState(true)

    const getBanners = async()=>{
    try{

      const response = {data: {result: [], meta: null, message:""}}
      setBannerData(response.data.result);
      setLoading(false)

    } catch(exception){

    }  finally{

    }
    }


// setLoading(false); not allowed to 
// after renders
useEffect(() =>{
  // console.log("update/change call me")
  getBanners();
},[])

useEffect(()=>{
  console.log("component loaded call me")
  setLoading(false)
},[])

useEffect(()=>{
  console.log("loaded component updated callme")
},[bannerData,loading])

  return(<>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
{
  loading ? <>loading...</> : <>


      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel></>
  }

    </div>
   </>
  )
  }
