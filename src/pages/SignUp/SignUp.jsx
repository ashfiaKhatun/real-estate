import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const submitSignUp = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        if (password.length < 6) {
            toast.error('Password should be atleast 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should be atleast one uppercase characters');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Password should be atleast one lowercase characters');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUser(name, photo)
                    .catch(error => console.log(error))
            })

            .catch(error => console.log(error))
        e.target.reset();
        navigate('/');
    }

    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-6">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>

                    </div>
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100 px-8">
                        <form className="card-body" onSubmit={submitSignUp}>
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full" required />

                                    <span className="absolute top-4 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-800 hover:bg-cyan-950 text-white">Sign Up</button>
                            </div>
                        </form>
                        <div className="text-center mb-2">
                            <p>Already have any account? Please <Link to='/signin'><button className="btn btn-link">Sign In</button></Link></p>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default SignUp;