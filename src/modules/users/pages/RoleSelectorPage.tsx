import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "@/modules/users/services/authService";
import { registeredOrganizations } from "@/modules/users/data/mockData";
import "./RoleSelectorPage.css";

const RoleSelectorPage: React.FC = () => {
    const [sinkingFundId, setSinkingFundId] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const isValidOrganization = (id: string): boolean => {
        return registeredOrganizations.some((org) => org.id === id);
    };

    const handleJoinSinkingFund = async () => {
        setError("");

        await refreshToken(); 

        if (!sinkingFundId.trim()) {
            setError("Please provide a valid Sinking Fund ID.");
            return;
        }

        if (isValidOrganization(sinkingFundId.trim())) {
            navigate(`/organization/${sinkingFundId.trim()}`);
        } else {
            setError("The provided Sinking Fund ID does not exist.");
        }
    };

    const handleCreateNewOrganization = () => {
        setError("");
        navigate("/create-organization");
    };

    return (
        <div className="role-selector-container">
            <h1 className="role-selector-title">Choose Your Sinking Fund Path</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Enter Sinking Fund ID"
                    value={sinkingFundId}
                    onChange={(e) => {
                        setSinkingFundId(e.target.value);
                        if (error) setError("");
                    }}
                    className={`input-field ${error ? "input-error" : ""}`} 
                />
                {error && <p className="error-message">{error}</p>}
            </div>
            <div className="button-group">
                <button
                    onClick={handleJoinSinkingFund}
                    className="btn btn-primary"
                    disabled={!sinkingFundId.trim()}
                >
                    Join Existing Sinking Fund
                </button>
                <button
                    onClick={handleCreateNewOrganization}
                    className="btn btn-secondary"
                >
                    Create New Sinking Fund Organization
                </button>
            </div>
        </div>
    );
};

export default RoleSelectorPage;