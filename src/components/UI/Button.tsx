import React from "react";
import "@/styles/components/button.css";
import { ButtonProps } from "@/types";

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
                <span className="button-spinner">
                    <span className="spinner-border animate-spin"></span> Loading...
                </span>
            ) : (
                typeof children === "function"
                    ? children(type)
                    : children
            )}
        </button>
    );
};
export default Button;