import { Helmet } from "react-helmet-async";
import Places from "../Places/Places";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Places></Places>
        </div>
    );
};

export default Home;