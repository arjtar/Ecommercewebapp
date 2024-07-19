import{useController, Controller} from "react-hook-form"
import { INPUT_TYPE, ITextInputComponent } from "./input.contract"

export const TextInputComponent = ({type=INPUT_TYPE.TEXT, defaultValue='', name, control, msg}: ITextInputComponent) =>{
  const {field} = useController({
  control: control,
  name: name,
  defaultValue: defaultValue,
  rules: {
    required:true
  }
})
    return(<>
       
       <input
                 type={type}
                 id={name}
                {...field}
              
                 className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
               />
               <span className="text-sm italic text-red-700">{msg}</span>
       </>)
   }


   export const TextAreaInputComponent =({control, defaultValue='', name, msg}:ITextInputComponent)=>{
    

    const {field} = useController({
    control: control,
    name: name,
    defaultValue: defaultValue
})
       return(<>
       <textarea
              id={name}
              rows={4}
              {...field}
              className=" resize-none mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            ></textarea>
            <span className="text-sm italic text-red-700">{msg}</span>
  
    </>)
}

export const RoleSelector = ({control, name ,defaultValue, msg}:ITextInputComponent)=>{
  return(<>
  <Controller
       control={control}
       name={name}
       defaultValue={defaultValue}
       
       render={({field: {onChange}})=>(
       <select

         id={name}
         onChange={onChange}
         className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      >
   <option value ="customer">Buyer</option>
   <option value ="seller">seller</option>
   </select>
  )}
  />
 <span className="text-sm italic text-red-700">{msg}</span>
  </>)
}


