import {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import {Helmet} from "react-helmet";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = data => console.log(data);

    return (
        <div className="hero min-h-screen pb-32">
            <Helmet title="house-hunter/Login" />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className="text-center text-4xl font-semibold mt-3">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body py-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {required: "Email Address is required"})}
                            aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="email" className="input input-bordered"
                        />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: true})} type={`${isOpen ? 'text' : 'password'}`} placeholder="password" className="input input-bordered" />
                        <span className="absolute top-[52px] right-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && <p className="text-red-600">{"Password is required"}</p>}
                        <p className="text-red-600">{error}</p>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-slate-600">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">        
                        <button type="submit" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-slate-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Login</span>
                        </button>
                    </div>
                    <p className="label-text-alt mb-5">New to account? <Link className=" link link-hover text-slate-600" to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
