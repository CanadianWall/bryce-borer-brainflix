import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    let navigateFunction = useNavigate();
    const handleRedirect = () => {
        navigateFunction('/')
    }
    return (
        <>
            <h1>404</h1>
            <button onClick={handleRedirect}>Go to Home Page</button>
        </>
    );
}

export default NotFoundPage;