import Layout from "@/components/Layout/Layout";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";
import CreateOrganizationPage from "@/modules/main/components/users/pages/CreateOrganizationPage";
import LoginPage from "@/modules/main/components/users/pages/LoginPage";
import { RoleSelectorPage, PageNotFound } from "@/modules/main/components";
import OrganizationPage from "@/modules/main/pages/OrganizationPage";
import "@/styles"
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary, CustomFallback } from "@/components";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <UserProvider>
                <BrowserRouter>
                    <Layout>
                        <ErrorBoundary fallback={<CustomFallback message="We encountered a problem loading the content." />}>
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
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        </ErrorBoundary>
                    </Layout>
                </BrowserRouter>
            </UserProvider>
        </AuthProvider>
    );
};

export default App;