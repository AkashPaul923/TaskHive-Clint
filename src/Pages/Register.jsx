import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";

const Register = () => {
    const { createUser, loader } = useAuth()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        createUser( data.email, data.password)
        .then(res => {
            console.log(res);
        })
    };

    if(loader){
        return <progress class="progress w-56"></progress>
    }


    return (
        <div
            className="flex items-center justify-center min-h-screen font-sans"
        >
            <div className=" rounded-lg p-8 max-w-xl flex w-11/12 border-2">
                {/* Left Side: Login Form */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Register Account
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Name Input */}
                        <div className="form-control w-full col-span-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your name"
                                className="input input-bordered bg-transparent   backdrop-blur-lg w-full"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* photo Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="URL"
                                {...register("photo", { required: true })}
                                className="input input-bordered bg-transparent backdrop-blur-lg w-full"
                                placeholder="Enter your photo URL"
                            />
                            {errors.photo && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Email Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter your email"
                                className="input input-bordered bg-transparent backdrop-blur-lg w-full"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    pattern:
                                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/,
                                })}
                                placeholder="Enter your password"
                                className="input input-bordered bg-transparent backdrop-blur-lg w-full"
                            />
                            {errors.password && (
                                <span className="text-red-500">
                                    Password must be an uppercase, a lowercase,
                                    a number and minimum six character
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <input
                            type="submit"
                            className="btn btn-outline btn-primary w-full mt-4"
                            value="Sign Up"
                        />
                    </form>

                    {/* Additional Options */}
                    <div className="text-center mt-4">
                        <p className="text-sm ">
                            Already have account?
                            <Link to="/login" className="font-bold ml-2">
                                Please login
                            </Link>
                        </p>
                        <p className="text-sm mt-2">Or sign in with</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
