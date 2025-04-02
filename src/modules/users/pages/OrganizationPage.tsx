import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { logoutUser } from "@/modules/users/services/authService";

const OrganizationPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate("/");
    };

    if (!id) {
        return <h1>No Organization Found. Please provide a valid ID.</h1>;
    }

    return (
        <div>
            <h1>Welcome to Organization: {id}</h1>
            <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
            >
                Back to Dashboard
            </button>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
            >
                Logout
            </button>
        </div>
    );
};

export default OrganizationPage;