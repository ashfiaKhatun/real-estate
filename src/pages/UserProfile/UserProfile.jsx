import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const { user, loader } = useContext(AuthContext)

    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>

            <div className="text-center">
                {
                    loader && <span className="loading loading-dots loading-lg"></span>
                }
            </div>

            <div className="my-12">

                    <div className="text-center space-y-4">
                        <div className="avatar flex justify-center border border-gray-400 p-1 w-24 mx-auto rounded-full">
                            <div className="rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-center">{user.displayName}</h3>

                        <p className="text-xl"><span className="font-bold">Email:</span> {user.email}</p>
                    </div>


                    <div className="text-center mt-4">
                        <Link to='/update-profile'><button className="btn btn-outline btn-success">Update profile</button></Link>
                    </div>
            </div>

        </div>
    );
};

export default UserProfile;