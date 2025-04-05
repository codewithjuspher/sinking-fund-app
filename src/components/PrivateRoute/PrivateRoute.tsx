import { AuthContext } from "@/context";
import { LayoutProps } from "@/types";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Loading } from "@/components";

const PrivateRoute: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const [delayedLoading, setDelayedLoading] = useState(true);

    /**
 * Handles delayed loading state for authentication.
 * 
 * This `useEffect` is designed to:
 * - Introduce a delay in the `delayedLoading` state when `loading` is true, 
 *   ensuring smooth transitions or preventing flicker during fast state changes.
 * - Use a `setTimeout` to reset `delayedLoading` after 3 seconds.
 * - Clean up the timer when the component unmounts or `loading` state changes.
 */
    useEffect(() => {
        if (loading) {
            // Start a timer to delay loading state by 3 seconds
            const timer = setTimeout(() => {
                setDelayedLoading(false); // Reset delayed loading after 3 seconds
            }, 3000);

            // Clean up the timer when `loading` changes or the component unmounts
            return () => clearTimeout(timer);
        } else {
            // Reset delayed loading immediately if `loading` is false
            setDelayedLoading(false);
        }
    }, [loading]); // Dependency array ensures this effect runs only when `loading` changes

    /**
     * Conditionally render the appropriate content based on authentication state.
     * 
     * - If either `loading` or `delayedLoading` is true, display a `Loading` spinner 
     *   with a message ("Authenticating, please wait...").
     * - If the user is not authenticated, redirect to the `/login` page.
     * - If the user is authenticated, render the child components.
     */
    if (delayedLoading || loading) {
        return <Loading message="Authenticating, please wait..." />;
    }

    // Redirect unauthenticated users to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render authenticated content
    return <>{children}</>;
};

export default PrivateRoute;