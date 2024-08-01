import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { TextInputComponent } from "../../../components/common/form/input.component";
import { INPUT_TYPE } from "../../../components/common/form/input.contract";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
import { useNavigate  } from "react-router-dom";
import AuthContext from "../../../context/auth.context";
import { useEffect, useContext } from "react";



const LoginPage = () => {
  const navigate = useNavigate();

  const auth: any = useContext(AuthContext);

    const LoginDTO = Yup.object({
        email: Yup.string().email().required(),
        password:Yup.string().required()
    })

    const {control, handleSubmit, formState: {errors}}= useForm({
        resolver: yupResolver(LoginDTO)
    })

    const loginAction = async(data: any) =>{
      try{
        const response = await authSvc.postRequest('auth/login', data);
        localStorage.setItem('_act ', response.result.token.access)
        localStorage.setItem('_rft ', response.result.token.refresh)
        toast.success("welcome to" +response.result.userDetail.role+ "pannel")
        auth.setLoggedInUser(response.result.userDetail);

        navigate('/'+response.result.userDetail.role)
        


      }catch(exception){
        console.log(exception)
        toast.error("Error while loging to file")
      }
    }

    useEffect(() =>{
      if(auth.loggedInUser){
        toast.info("You are already loggged in")
        navigate("/" + auth.loggedInUser.role)
      }
    }, [auth])

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Login
          
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(loginAction)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                    <TextInputComponent
                    control={control}
                    name ="email"
                    type={INPUT_TYPE.EMAIL}
                    msg={errors?.email?.message}
                    />
                  
                  
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                <TextInputComponent 
                control={control}
                name ="password"
                type={INPUT_TYPE.PASSWORD}
                msg={errors?.password?.message}
                />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-teal-800 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:underline dark:text-teal-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
