import placeholderProfileImage from "@/assets/images/place-holder.jpg";
import { Footer, Header, Sidebar } from "@/components";
import { useUser } from "@/context";
import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./OrganizationPage.css";

const OrganizationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const handleLogout = async () => {
        const auth = getAuth();
        await auth.signOut();
        setUser(null);
        navigate("/login");
    };

    if (!id) {
        return <h1>No Organization Found. Please provide a valid ID.</h1>;
    }

    return (
        <div className="organization-page">
            <Header
                organizationName={`${id}`}
                userName={user?.name || "Guest"}
                userEmail={user?.email || ""}
                userProfileImage={placeholderProfileImage}
                onLogout={handleLogout}
            />
            <div className="main-content">
                <Sidebar sinkingId={id} />
                <div className="content-area">
                    {/* Main content can go here */}
                    <h2>Organization ID: {id}</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrganizationPage;
