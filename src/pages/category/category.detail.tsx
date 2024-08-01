
import { useEffect } from "react";

import { useParams,useSearchParams } from "react-router-dom";


import HomePageTitle from "../../components/common/title/homepage-title.component";
import SingleProductComponent from "../../components/product/single-product.component";

const CategoryDetailPage = () => {

  const params = useParams();
    const [query, setQuery] = useSearchParams();

    const handleFilterClick = (price: string) => {
      setQuery({
        price: price
      })
    }

    useEffect(() => {
      console.log(query.get("price"))
  },[query])


  return(<>


<HomePageTitle title={`category Detail of ${params.slug}`}  
             url={`/category/${params.slug}`}/>



<button className="me-3" onClick={(e) =>{
    e.preventDefault()
    handleFilterClick('10000-20000')
  }}>10000-20000</button>

<button className="me-3" onClick={(e) =>{
    e.preventDefault()
    handleFilterClick('30000-40000')
  }}>30000-40000</button>
  

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:gris-cols-3 xl:gris-cols-5 mx-3 md:mx-20 py-5 gap-2 mt-5">

  
  {
    [...Array(25)].map((_, i:number) => (
      <SingleProductComponent  key={i} />
    ))
  }

</div>
 
  
  
</>)
}

export default CategoryDetailPage;



 
