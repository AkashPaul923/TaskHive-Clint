import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import TaskCard from "../Components/TaskCard";


const Tasks = () => {
    const {user} = useAuth()
    const { data=[], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/tasks?email=${user.email}`)
            console.log(res.data[0].categories);
            return res.data[0].categories
            
        }
    })

    if(isLoading){
        return <p>Loading</p>
    }
    return (
        <div className="max-w-[1920px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">To Do</p>
                    <div>
                        {
                            data[0].tasks.map(task => <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>)
                        }
                    </div>
                </div>
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">In Progress</p>
                    <div>
                        {
                            data[1].tasks.map(task => <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>)
                        }
                    </div>
                </div>
                <div className="border-3 rounded-3xl border-neutral">
                    <p className="text-center bg-neutral text-base-100 rounded-t-3xl text-2xl font-bold py-3">Done</p>
                    <div>
                        {
                            data[2].tasks.map(task => <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;