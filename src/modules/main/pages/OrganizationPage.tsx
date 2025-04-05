import placeholderProfileImage from "@/assets/images/place-holder.jpg";
import { Content, Footer, Header, Sidebar } from "@/components";
import { useUser } from "@/context";
import { ContributionsViewPage, DashboardPage } from "@/modules/main/components";
import { getAuth } from "firebase/auth";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './OrganizationPage.css';

const OrganizationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useUser();

    // If no ID is provided, return an error message to the user.
    if (!id) {
        return <h1>No Organization Found. Please provide a valid ID.</h1>;
    }

    // Extract query parameters from the current location's search string.
    const params = new URLSearchParams(location.search);
    // Get the `page` parameter or default to "dashboard" if it is not provided.
    const activePage = params.get("page") || "dashboard";

    /**
     * Function to render content based on the active page.
     */
    const renderContent = () => {
        try {
            switch (activePage) {
                case "dashboard":
                    // Render the DashboardPage component when `activePage` is "dashboard".
                    return <DashboardPage />;
                case "contributions/view":
                    return <ContributionsViewPage />;
                default:
                    // Render a default error message for unrecognized pages.
                    return <h1>Page not found.</h1>;
            }
        } catch (error) {
            console.error("Error rendering content:", error);
            return <h1>An error occurred while loading the page.</h1>;
        }
    };

    return (
        <div className="organization-page">
            <Header
                organizationName={`${id}`}
                userName={user?.name || "Guest"}
                userEmail={user?.email || ""}
                userProfileImage={user?.profileImage || placeholderProfileImage}
                onLogout={() => {
                    try {
                        const auth = getAuth();
                        auth.signOut().then(() => navigate("/login"));
                    } catch (error) {
                        console.error("Error during logout:", error);
                    }
                }}
            />
            <div className="main-content">
                <Sidebar sinkingId={id} />
                <Content>{renderContent()}</Content>
            </div>
            <Footer />
        </div>
    );
};

export default OrganizationPage;