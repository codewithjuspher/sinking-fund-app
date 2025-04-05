import React from "react";
import "./button.css"; // CSS file for button styles
import { ButtonProps } from "@/types";

/**
 * Button Component
 * 
 * Purpose:
 * - Renders a customizable button with optional loading state.
 * - Supports both text and function-based children for flexibility.
 * 
 * Props:
 * - `onClick`: Function to be executed when the button is clicked.
 * - `type`: Specifies the type of the button (default is "button").
 * - `disabled`: Disables the button when set to true.
 * - `className`: Allows additional custom classes to be applied.
 * - `ariaLabel`: Accessible label for the button.
 * - `loading`: Displays a spinner and disables the button when set to true.
 * - `children`: Content or function rendered inside the button.
 */

const Button: React.FC<ButtonProps> = ({
    onClick,
    type = "button", 
    disabled = false,
    className = "",
    ariaLabel,
    loading = false, 
    children, 
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading} 
            aria-label={ariaLabel}
            className={`transition ease-in-out duration-200 ${className}`} 
        >
            {loading ? (
                // Loading state: Renders a spinner with text
                <span className="button-spinner">
                    <span className="spinner-border animate-spin"></span> Loading...
                </span>
            ) : (
                // Default state: Renders children content (text or function-based)
                typeof children === "function" ? children(type) : children
            )}
        </button>
    );
};

export default Button;