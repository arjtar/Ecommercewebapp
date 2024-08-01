
import { HomePageBanner } from "../../components/banner/banner.component.tsx";
import { CardWithImage } from "../../components/common/card/single-card.component.tsx";
import HomePageTitle from "../../components/common/title/homepage-title.component.tsx";
import SingleProductComponent from "../../components/product/single-product.component.tsx";
import './index.css'
// import "flow-bite"


const LandingPage = ()=>{
  
  return(<>




<HomePageBanner />

<HomePageTitle title="Categories" url="/categories"/>

<div className="md:flex lg:flex sm:grid-cols-1 mx-3 md:mx-20 py-5 gap-2 mt-5">

  {
    [...Array(6)].map((_,i:number)=>(
      <CardWithImage
      key={i}
      title="Bike"
      image="https://static-01.daraz.com.np/p/09eef64eb0fdd0cc57a54789c93c6b7a.jpg_300x0q75.webp"
      url="/category/gaming-bikes"
    />
    )) 
  }

  </div>





<HomePageTitle title="It's For You" url="/View All"/>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:gris-cols-3 xl:gris-cols-5 mx-3 md:mx-20 py-5 gap-2 mt-5">

  {
    [...Array(26)].map((_, i:number) => (
      <SingleProductComponent  key={i} />
    ))
  }

</div>




 <footer className=" bg-slate-400 h-40 mt-10 py-3 content-center">
  <p className="text-center">
   <span className="mx-3"></span> &copy; All right reserved,
   <span>
    Designed and Developed by Teams.
   </span>
    <a className="ms-2 text-teal-900 hover:cursor-pointer target:-blank" href="https://react.dev/learn/choosing-the-state-structure">All Time Best</a>
  </p>
 </footer>

</>)

   }


   
export default LandingPage
