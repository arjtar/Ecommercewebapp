import{ Navbar, MegaMenu} from "flowbite-react"
import { NavLink } from "react-router-dom";

const LinkComponent=({text, icon="", link}: {text:string, icon? :string, link:string})=>{
  return(<>
<NavLink to={link} className={({isActive}: {isActive: boolean})=> isActive ?'text-cyan-800':'text-gray-700' + "hover:text-cyan" }>
         
          {text} {icon}       
          </NavLink>
  
  </>)

}

const HomeHeader =()=>{
  return(<>
  <Navbar fluid rounded className="bg-gray-200 h-20 py-5 border-gray-200">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand >
      <div className="flex md:order-2">
        <Navbar.Collapse>
     
        
        <LinkComponent link="/register" icon="&rarr;" text="Register"/>
        <LinkComponent link="/login" icon="&rarr;" text="login"/>


          
          <Navbar.Link href="/login">login &rarr;</Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
        <LinkComponent link="/"  text="Home"/>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        
        <MegaMenu>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
        <Navbar.Brand href="/">
          <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </Navbar.Brand>
        <div className="order-2 hidden items-center md:flex">
          <a
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
          {/* <Button href="#">Sign up</Button> */}
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>Company</>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Pro Version
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Blog
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Playground
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                      License
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>

        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  
  </>)
}

export default HomeHeader;



