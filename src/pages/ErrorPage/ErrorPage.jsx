
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>404 not found. </h2>
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;