import { Carousel} from "flowbite-react"
import {useEffect,useState} from "react"
import bannerSvc from "../../pages/banner/banner.service"


export const HomePageBanner = () =>{
    const [bannerData, setBannerData] = useState([])
    let [loading, setLoading] = useState(true)

    const getBanners = async()=>{
    try{
      const response = await bannerSvc.getRequest("/banner/list-home");
      setBannerData(response.result);
      setLoading(false)

    } catch(exception){

    }  finally{

      }
    }


// setLoading(false); not allowed to 
// after renders
useEffect(() =>{
  
  getBanners();
},[])



// useEffect(()=>{
//   console.log("loaded component updated callme")
// },[bannerData,loading])

  return(<>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
{
  loading ? <>loading...</> : <>


      <Carousel>
        {
          bannerData && bannerData.map((banner: any, ind: number) =>(
            <a href={banner.link} target="_banner" key={ind}>
            <img src={import.meta.env.VITE_IMAGE_URL+'/banner/'+banner.image} key={ind} alt="..." />
            </a>
          ))
        }
    
      </Carousel></>
  }

    </div>
   </>
  )
  }
