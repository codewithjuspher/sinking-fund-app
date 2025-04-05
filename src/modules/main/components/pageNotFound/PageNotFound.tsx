import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import { Button } from "@/components";

const PageNotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <h1>404</h1>
            <p>The page you're looking for doesn't exist or might have been moved.</p>
            <Button
                onClick={handleGoBack}
                className={styles.backButton}
                ariaLabel="Go back to the home page"
            >
                Go Back Home
            </Button>
        </div>
    );
};

export default PageNotFound;