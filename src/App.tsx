import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import LoginPage from "@/modules/users/pages/LoginPage";
import RoleSelectorPage from "@/modules/users/pages/RoleSelectorPage";
import OrganizationPage from "@/modules/users/pages/OrganizationPage";
import CreateOrganizationPage from "@/modules/users/pages/CreateOrganizationPage";
import { checkTokenExpiration, scheduleTokenRefresh } from "@/modules/users/services/authService";
import { AuthProvider } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import "@/styles/global.css";

const App: React.FC = () => {
    useEffect(() => {
        scheduleTokenRefresh();
        const interval = setInterval(() => {
            checkTokenExpiration();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route
                            path="/path"
                            element={
                                <PrivateRoute>
                                    <RoleSelectorPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/organization/:id"
                            element={
                                <PrivateRoute>
                                    <OrganizationPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/create-organization"
                            element={
                                <PrivateRoute>
                                    <CreateOrganizationPage />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;