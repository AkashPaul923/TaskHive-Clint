import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const TaskCard = ({task, refetch}) => {
    const handleTaskDelete = (id) => {
        console.log( id );
        axios.delete(`http://localhost:5000/tasks/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
                Swal.fire({
                    icon: "success",
                    title: "Your task has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }
        })
    }
    return (
        <div className='p-4 border rounded-2xl bg-base-300 m-3 '>
            <p className='text-2xl font-semibold'>{task.taskName}</p>
            <p>{task.description}</p>
            <button className='btn'><FaEdit></FaEdit></button>
            <button onClick={()=>handleTaskDelete(task._id)} className='btn'><FaTrashAlt></FaTrashAlt></button>
        </div>
    );
};

export default TaskCard;