import { useLoaderData, useParams } from "react-router-dom";

const PlaceDetails = () => {

    const places = useLoaderData();
    const { id } = useParams();

    const place = places.find(data => data.id === parseInt(id));

    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = place;


    return (
        <>
        <div className="px-2">
            <div className="max-w-6xl mx-auto rounded-xl bg-base-200 my-8 px-6">
                <div className="hero-content gap-8 justify-between flex-col lg:flex-row">
                    <div className=" w-1/2">
                        <img src={image} className=" rounded-lg shadow-2xl w-full" />

                    </div>

                    <div className="space-y-2 flex-1">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">{estate_title}</h1>

                            <p className="px-4 text-center rounded-lg bg-green-200 text-green-700 font-bold h-7">{status}</p>

                        </div>

                        <p><span className="font-bold">Segment Type: </span>{segment_name}</p>

                        <hr className="border-gray-300" />

                        <p className="text-lg"><b>Description: </b>{description}</p>

                        <hr className="border-gray-300" />

                        <h3 className="text-lg font-bold">Details:</h3>
                        <div className="ml-2 text-gray-600">
                            <p><b>Location: </b>{location}</p>
                            <p><b>Area: </b>{area}</p>
                            <p><b>Price: </b>{price}</p>

                        </div>

                        <hr className="border-gray-300" />

                        <h3 className="text-lg font-bold">Facilities:</h3>
                        <div className="ml-2 text-gray-600">
                            {
                                facilities.map((facility, index) => <li className=' p-1 text-sm' key={index}>{facility}</li>)
                            }

                        </div>



                    </div>
                </div>
            </div>

        </div>
        </>



    );
};

export default PlaceDetails;