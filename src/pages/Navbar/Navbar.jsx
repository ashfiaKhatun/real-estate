import { Link, NavLink } from "react-router-dom";
import proImg from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { signOutUser, user, loader } = useContext(AuthContext);

    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>

        {
            user &&
                <>
                    <li><NavLink to='/user-profile'>User Profile</NavLink></li>
                    <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
                </>
            
        }
    </>

    const handleSignOut = () => {
        signOutUser()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl"><span className="text-cyan-800">Dream</span> Home</a>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-bold ">
                    {navList}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user ?
                        <>
                            {
                                loader ? <span className="loading loading-dots loading-sm"></span> :
                                    <>
                                        <div className="tooltip tooltip-bottom mr-4" data-tip={user.displayName}>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn bg-cyan-800 hover:bg-cyan-950 text-white" onClick={handleSignOut}>Sign Out</button>
                                    </>
                            }
                        </>
                        :
                        <>
                            {loader ? <span className="loading loading-dots loading-sm text-center"></span> :
                                <>
                                    <div className="avatar mr-4">
                                        <div className="w-12 rounded-full">
                                            <img src={proImg} />
                                        </div>
                                    </div>
                                    <Link to='/signin'><button className="btn bg-cyan-800 text-white">Sign In</button></Link>
                                </>}
                        </>
                }
            </div>

        </div>
    );
};

export default Navbar;