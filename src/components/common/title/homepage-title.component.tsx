
export interface HomePageTitleProps {
    title: string,
    url: string
}

const HomePageTitle =({title, url}: HomePageTitleProps)=>{
    return(<>
    <div className="flex-justify-between mx-3 md:mx-20 mt-5 border-b border-solid border-gray-400 bg-slate-100 p-3 " >
  <h1>{title}</h1>
  <a  href={url} className="text-teal-800 text-xl font-bold py-3 hover:cursor-pointer">
    View All &rarr;
  </a>
</div>
    
    </>)

}
export default HomePageTitle