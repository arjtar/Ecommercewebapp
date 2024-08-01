import {FaPen, FaTrash} from "react-icons/fa6";
import Swal from "sweetalert2";
const TableActionButtons = ({deleteACTION, Id}:{deleteAction: any, id: string}) =>{

    const handleDelete = (e: any) =>{
        const handleDelete = async(e: any)=>{
        e.preventDefault()
        
        try{}
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        }
    }
}