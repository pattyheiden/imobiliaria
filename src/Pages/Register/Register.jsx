import {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import {Helmet} from "react-helmet";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Register = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
console.log(data);
        
        const formData = new FormData();
        formData.append('image', data.photo[0])

// TODO

        // if (data.password === data.confirm) {
        //     fetch(img_hosting_url, {
        //         method: 'POST',
        //         body: formData
        //     })
        //         .then(res => res.json())
        //         .then(imgResponse => {
        //             console.log(imgResponse);
        //             const imgURL = imgResponse.data.display_url;

        //             signUpUser(data.email, data.password)
        //                 .then(result => {
        //                     const newUser = result.user;
        //                     console.log(newUser);
        //                     updateUser(data.name, imgURL)
        //                         .then(() => {
        //                             const savedUser = {name: data.name, email: data.email}
        //                             fetch('https://summer-camp-school-server-coral-one.vercel.app/users', {
        //                                 method: 'POST',
        //                                 headers: {'Content-Type': 'application/json'},
        //                                 body: JSON.stringify(savedUser)
        //                             })
        //                                 .then(res => res.json())
        //                                 .then(() => {
        //                                     toast.success('Register Successful!')
        //                                     navigate(from, {replace: true});
        //                                 })
        //                             reset();
        //                         })
        //                         .catch(err => {
        //                             setLoading(false)
        //                             console.log(err)
        //                             toast.error(err.message);
        //                         });
        //                 })
        //                 .catch(err => {
        //                     setLoading(false)
        //                     console.log(err)
        //                     toast.error(err.message);
        //                 })
        //         })
        //         .catch(err => {
        //             setLoading(false)
        //             console.log(err)
        //             toast.error(err.message);
        //         })

        //     return;

        // } else {
        //     toast.error('Please enter right password')
        // }
    };



    return (
        <div className="hero min-h-screen pb-32">
            <Helmet title="House-hunter/Register" />
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <h2 className="text-center text-4xl font-semibold mt-3">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body py-2">
                    <div className="flex gap-x-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name<span className="text-red-600">*</span></span>
                            </label>
                            <input
                                {...register("name", {required: true})}
                                aria-invalid={errors.name ? "true" : "false"} type="text" placeholder="name" className="input input-bordered"
                            />
                            {errors.name && <p className="text-red-600">{"Please enter your name"}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email<span className="text-red-600">*</span></span>
                            </label>
                            <input
                                {...register("email", {required: true})}
                                type="email" placeholder="email" className="input input-bordered"
                            />
                            {errors.email && <p className="text-red-600">{"Email is required"}</p>}
                        </div>
                    </div>
                    
                    <div className="flex gap-x-4">
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password<span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("password", {required: true, minLength: 6})} type={`${isOpen ? 'text' : 'password'}`} placeholder="password" className="input input-bordered" />
                            <span className="absolute top-[52px] right-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaEye /> : <FaEyeSlash />}</span>
                            {errors.password?.type === 'required' && <p className="text-red-600">{"Password is required"}</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">{"Password Must be 6 characters or more"}</p>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password<span className="text-red-600">*</span></span>
                            </label>
                            <input {...register("confirm", {required: true})} type={`${confirm ? 'text' : 'password'}`} placeholder="Confirm password" className="input input-bordered" />
                            <span className="absolute top-[52px] right-2" onClick={() => setConfirm(!confirm)}>{confirm ? <FaEye /> : <FaEyeSlash />}</span>
                            {errors.confirm?.type === 'required' && <p className="text-red-600">{"Password is required"}</p>}
                        </div>
                    </div>
                    
                    
                    {/* TODo */}
                    <div className="flex items-end">
                            <div className="form-control w-20">
                                <label className="label">
                                    <span className="label-text">Phone<span className="text-red-600">*</span></span>
                                </label>
                                <input defaultValue="+880" {...register("phone", {required: true})} className="input input-bordered pt-2" readOnly/>
                            </div>
                            <div className="form-control w-full">
                                <input
                                    {...register("number", {required: true,minLength:10, maxLength: 10 })}
                                    aria-invalid={errors.number ? "true" : "false"} type="text" placeholder="ten digit number" className="input input-bordered outline-none"
                                />
                            </div>
                        </div>
                        {errors.number && <p className="text-red-600 ms-20">{"Please enter 10 digit number"}</p>}
                    
                    
                    <div className="flex gap-x-4">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL<span className="text-red-600">*</span></span>
                            </label>
                            <input
                                {...register("photo", {required: true})}
                                aria-invalid={errors.photo ? "true" : "false"} type="file" className="input input-bordered pt-2"
                            />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Role <span className="text-red-600">*</span></span>
                            </label>
                            <select {...register("role")} className="input input-bordered outline-none" max="4" >
                                <option value="renter">Renter</option>
                                <option value="owner">Owner</option>
                            </select>
                        {errors.email && <p className="text-red-600">{"Email is required"}</p>}
                    </div>
                    </div>
                            <div className="flex justify-between">
                                {errors.photo && <p className="text-red-600">{"Please insert photo"}</p>}
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
                    <p className="label-text-alt mb-5">Already have an account? <Link className=" link link-hover" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;