import { Card } from "flowbite-react";
import { FaUser } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
       


        <div className=" rounded-lg dark:border-gray-600 h-32 md:h-64">

        <Card className="max-w-sm" bg-red-800>
      <h5 className="flex text-2xl font-bold tracking-tight text-white ">
        Customer <FaUser></FaUser>
      </h5>
      <strong className="test-3xl text-white ">
        1000
      </strong>
    </Card>
</div>

    <div className=" rounded-lg dark:border-gray-600 h-32 md:h-64">

        <Card className="max-w-sm" bg-blue-800>
      <h5 className="flex text-2xl font-bold tracking-tight text-white ">
        Product <FaUser></FaUser>
      </h5>
      <strong className="test-3xl text-white ">
        1000
      </strong>
    </Card>
</div>


    <div className=" rounded-lg dark:border-gray-600 h-32 md:h-64">

        <Card className="max-w-sm" bg-red-800>
      <h5 className="flex text-2xl font-bold tracking-tight text-white ">
        Income <FaUser></FaUser>
      </h5>
      <strong className="test-3xl text-white ">
        {
          new Intl.NumberFormat("np", {style: "currency", currency:'NRS'}). format(4567)
        }
      </strong>
    </Card>

    </div>


    <div className=" rounded-lg dark:border-gray-600 h-32 md:h-64">

        <Card className="max-w-sm" bg-teal-800>
      <h5 className="flex text-2xl font-bold tracking-tight text-white ">
        New Orders <FaUser></FaUser>
      </h5>
      <strong className="test-3xl text-white ">
       10
      </strong>
    </Card>

    </div>

   
        
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </>
  );
};
export default AdminDashboard;
