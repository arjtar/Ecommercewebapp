import { NavLink } from "react-router-dom";

const LinkComponent=({text, icon="", link}: {text:string, icon? :string, link:string})=>{
  return(<>
<NavLink to={link} className={({isActive}: {isActive: boolean})=> isActive ?'text-cyan-800':'text-gray-700' + "hover:text-cyan" }>
         
          {text} {icon}       
          </NavLink>
  
  </>)
}

export default LinkComponent;