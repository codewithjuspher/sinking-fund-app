import { AuthContext } from "@/context";
import { LayoutProps } from "@/types";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "@/components/Loading";

const PrivateRoute: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const [delayedLoading, setDelayedLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setDelayedLoading(false);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setDelayedLoading(false);
        }
    }, [loading]);

    if (delayedLoading || loading) {
        return <Loading message="Authenticating, please wait..." />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;