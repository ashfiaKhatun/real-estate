import { Helmet } from "react-helmet-async";
import Places from "../Places/Places";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Places></Places>
        </div>
    );
};

export default Home;