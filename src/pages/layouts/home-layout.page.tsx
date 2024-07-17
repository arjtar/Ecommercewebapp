
const HomePageLayout =()=>{
    return (<>
    <div className="py-5 bg-cyan-200 px-10 ">
        <p className=" mx-0 md:mx-6 lg:mx-10 xl:mx-16">
            Purchase it with Discount.<span className="text-cyan-100">Free Delivery</span>
        </p>
    </div>
    <HomeHeader />

    <outlet/>

    <footer>
        &copy: All Right are Reserved
    </footer>

    </>)
}

export default HomePageLayout