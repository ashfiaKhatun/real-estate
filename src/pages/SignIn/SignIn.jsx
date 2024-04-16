import { Form, Link } from "react-router-dom";

const SignIn = () => {

    const submitSignIn = e => {
        e.preventDefault();

        const form = new Form(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-6">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={submitSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <div>
                        <p>New here? Please <Link to='/signup'><button className="btn btn-link">Sign Up</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;