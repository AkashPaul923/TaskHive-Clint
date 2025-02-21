import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        setLoading(true)
        console.log(data);
        loginUser(data.email, data.password)
        .then(res => {
            navigate('/')
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
        })
        
    };

    if(loading){
        return <progress class="progress my-40 block mx-auto w-56"></progress>
    }

    return (
        <div className="flex items-center justify-center min-h-screen font-sans">
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

export default Login;
