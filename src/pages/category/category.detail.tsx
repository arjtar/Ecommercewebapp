import { useEffect } from "react";
import { Heading1 } from "../../components/common/typography/typography.component";
import { useParams } from "react-router-dom";

import(useParams, useSeaarchParams) from 'react-route-dom'
import {useeffect} from "react"
import { HomePageBanner } from "../../components/banner/banner.component";
import { Button } from "flowbite-react";


const CategoryDetail = () => {
    const params = useParams();
    const [query, setQuery] = useSearchParams();

    const HandleFilterClick = (price: string) => {
      serQuery({
        price: price,
      });
    };

    useEffect(() => [console.log(query.get("price"))]);
  },
  [query];

  return(<>
  <HomeHeader />
  <HomePageTitle title= {`category Detail of ${params.slug}`} />


  <button className="me-5" onclick{(e) =>{
    e.preventDefault()
    handleFilterClick("30000-50000")
}} 30000-50000 </Button>

  
  </>)
