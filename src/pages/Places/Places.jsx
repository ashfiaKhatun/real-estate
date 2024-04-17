import { useEffect, useState } from "react";
import Place from "../Place/Place";

const Places = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('estates.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className="mt-6 lg:mt-16 max-w-6xl mx-auto">
            <h1 className="text-center text-2xl lg:text-4xl font-bold mb-6 lg:mb-12">Explore Our Sites</h1>
            <div className="grid lg:grid-cols-3 px-2 gap-4 lg:gap-8 my-6">
                {
                    places.map(place => <Place key={place.id} place={place}></Place>)
                }

            </div>
        </div>
    );
};

export default Places;