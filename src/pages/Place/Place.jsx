import { Link } from "react-router-dom";

const Place = ({ place }) => {

    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities } = place;

    return (
        <div className="card card-compact shadow-xl border">
            <figure className="p-6 "><img className="rounded-lg h-44 w-full" src={image} /></figure>

            <div className="card-body">
                <div className="flex gap-8">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="px-4 rounded-full text-white mt-2 bg-gray-700 h-6">{status}</p>

                </div>
                <hr />
                <div className="flex items-center text-lg">
                    <p className="text-gray-700 ">{segment_name}</p>
                    <p className="text-right"><b>Price: {price}</b></p>

                </div>
                <hr />

                <div className="text-gray-500">
                    {
                        facilities.map((facility, idx) => <li key={idx} className="">{facility}</li>)
                    }
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/place/${id}`}><button className="btn bg-gray-300 hover:bg-gray-400 font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Place;