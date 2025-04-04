import Layout from "@/components/Layout/Layout";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
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
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/sinking-fund"
                                element={
                                    <PrivateRoute>
                                        <RoleSelectorPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/sinking-fund/:id"
                                element={
                                    <PrivateRoute>
                                        <OrganizationPage />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/create-sinking-fund"
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