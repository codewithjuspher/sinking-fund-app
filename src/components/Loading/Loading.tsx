import React from "react";
import "./Loading.css"; // CSS file for styling the loading component

/**
 * Loading Component
 * 
 * Purpose:
 * - Provides a visual indication that content is being loaded.
 * - Displays a customizable loading message and a spinner animation.
 * 
 * Props:
 * - `message`: Optional prop to specify a custom loading message. Defaults to "Loading..." if not provided.
 */

interface LoadingProps {
    message?: string; // Custom loading message
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
    return (
        <div className="loading-container">
            {/* Spinner Animation */}
            <div className="spinner"></div>
            {/* Loading Message */}
            <p className="loading-message">{message}</p>
        </div>
    );
};

export default Loading;