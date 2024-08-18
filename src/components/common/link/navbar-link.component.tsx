import { NavLink } from "react-router-dom";

export const LinkComponent=({text, icon="", link}: {text:string, icon? :string | any, link:string})=>{
  return(<>
<NavLink to={link} className={({isActive}: {isActive: boolean})=> isActive ?'text-cyan-800':'text-gray-700' + "hover:text-cyan-700 flex " }>
         
          {text} {icon}       
          </NavLink>
  
  </>)
}

