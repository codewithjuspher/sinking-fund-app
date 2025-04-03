import Layout from "@/components/Layout/Layout";
import PrivateRoute from "@/components/Private/PrivateRoute";
import { AuthProvider } from "@/context/AuthContext";
import CreateOrganizationPage from "@/modules/main/components/users/pages/CreateOrganizationPage";
import LoginPage from "@/modules/main/components/users/pages/LoginPage";
import OrganizationPage from "@/modules/main/pages/OrganizationPage";
import RoleSelectorPage from "@/modules/main/components/users/pages/RoleSelectorPage";
import "@/styles/global.css"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";

const App: React.FC = () => {

    return (
        <AuthProvider>
            <UserProvider>
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
            </UserProvider>
        </AuthProvider>
    );
};

export default App;