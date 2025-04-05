import React, { Component, ReactNode } from "react";
import { CustomFallback } from "@/components";
import { handleError } from "@/utils";

/**
 * Props for ErrorBoundary:
 * - `fallback` (optional): A custom ReactNode to display when an error occurs.
 * - `children`: The child components wrapped within the ErrorBoundary.
 */
interface ErrorBoundaryProps {
    fallback?: ReactNode;
    children: ReactNode;
}

/**
 * State for ErrorBoundary:
 * - `hasError`: Indicates whether an error has been caught.
 */
interface ErrorBoundaryState {
    hasError: boolean;
}

/**
 * ErrorBoundary Component:
 * - Captures errors in its child components using React's error boundaries mechanism.
 * - Provides fallback UI (either custom or default) for graceful error handling.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }; // Initializes error state to false
    }

    /**
     * Lifecycle Method:
     * Updates state when an error is detected in child components.
     */
    static getDerivedStateFromError() {
        return { hasError: true }; // Sets error state to true
    }

    /**
     * Lifecycle Method:
     * Logs error details and delegates error handling to a utility function.
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        handleError(error, "ErrorBoundary"); // Custom error handling utility
        console.error("Error caught by ErrorBoundary:", error, errorInfo); // Logs error details
    }

    /**
     * Method to reset the error state and allow a retry.
     */
    resetError = () => {
        this.setState({ hasError: false }); // Resets error state
    };

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <CustomFallback
                        message="Oops! Something went wrong."
                        resetError={this.resetError} // Passes error reset function
                    />
                )
            );
        }
        return this.props.children; // Renders children if no error has occurred
    }
}

export default ErrorBoundary;