import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddTask = () => {
    const { user } = useAuth()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        const taskInfo= {
            taskName: data.taskName,
            description: data.description,
            completionDate: data.completionDate,
            email: user.email,
            category: 'To-Do',
            creationDate: new Date().toISOString()
        }
        // console.log(taskInfo);
        axios.post('http://localhost:5000/tasks', taskInfo)
        .then(res => {
            if(res.data.insertedId){
                reset()
                Swal.fire({
                    icon: "success",
                    title: "Your task has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-sans">
            <div className=" rounded-lg p-8 max-w-xl flex w-11/12 border-2">
                {/* Left Side: Login Form */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Add a Task
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* task name Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Task Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("taskName", { required: true })}
                                placeholder="Enter task name"
                                className="input input-bordered bg-transparent w-full"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {/* completion date Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Completion Date</span>
                            </label>
                            <input
                                type="date"
                                {...register("completionDate", { required: true })}
                                placeholder="Enter task name"
                                className="input input-bordered bg-transparent w-full"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* description Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                {...register("description", {
                                    required: true,
                                    maxLength: 200,
                                })}
                                placeholder="Enter task description"
                                className="textarea h-36 bg-transparent  w-full"
                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    This field is required and max 200 character
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <input
                            type="submit"
                            className="btn btn-outline btn-primary w-full mt-4"
                            value="Add Task"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
