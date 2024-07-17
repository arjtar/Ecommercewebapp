import {card} from "flowbite-react"
export interface CardWithImageProps {
image: string,
title: string,
url: string
}

export const CardWithImageProps = ({image, title, url}: CardWithImageProps)=>{
return(
    <card
    className="mb-3 sm:w-full"
    imgAlt = {title}
    imgSrc={image}
     >

     <a href = {url} className="text-2xl font-bold tracking-light ">
    {title}
    <a>
 </card>
</>)
}

 
