import React from "react";
import styles from "./CustomFallback.module.css";
import { Button } from "@/components";

/**
 * Props interface defining optional message and error reset functionality.
 */
interface CustomFallbackProps {
    message?: string; // Custom error message to display, defaults to a fallback message
    resetError?: () => void; // Callback function to reset the error state
}

/**
 * A fallback UI component for displaying error messages and recovery options.
 * Includes a retry button if a reset function is provided.
 */
const CustomFallback: React.FC<CustomFallbackProps> = ({ message = "Something went wrong.", resetError }) => {
    return (
        <div className={styles.fallback}>
            <h1>Error</h1>
            <p>{message}</p>
            {resetError && (
                <Button
                    onClick={resetError} // Executes the provided reset callback
                    className={styles.retryButton}
                    ariaLabel="Retry loading content" // Ensures accessibility
                >
                    Retry
                </Button>
            )}
            <p>If the issue persists, please contact support.</p>
        </div>
    );
};

export default CustomFallback;