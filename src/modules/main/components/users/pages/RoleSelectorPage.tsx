import { Button, Input } from "@/components";
import { registeredOrganizations } from "@/modules/main/components/users/data/mockData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleSelectorPage.css";

const RoleSelectorPage: React.FC = () => {
    const [sinkingFundId, setSinkingFundId] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    /**
     * Validates the sinkingFundId and checks if it exists in registered organizations.
     */
    const isValidOrganization = (id: string): boolean => {
        return registeredOrganizations.some((org) => org.id === id.trim());
    };

    /**
     * Handles the event of joining an existing sinking fund.
     */
    const handleJoinSinkingFund = () => {
        setError("");

        const trimmedId = sinkingFundId.trim();

        if (!trimmedId) {
            setError("Please provide a valid Sinking Fund ID.");
            return;
        }

        if (isValidOrganization(trimmedId)) {
            navigate(`/sinking-fund/${trimmedId}`);
        } else {
            setError("The provided Sinking Fund Link does not exist.");
        }
    };

    /**
     * Handles the event of creating a new sinking fund organization.
     */
    const handleCreateNewOrganization = () => {
        setError("");
        navigate("/create-sinking-fund");
    };

    /**
     * Handles input changes and error clearance.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSinkingFundId(e.target.value);
        if (error) setError("");
    };

    return (
        <div className="role-selector-container">
            <h1 className="role-selector-title">Choose Your Sinking Fund Path</h1>

            <div className="input-group">
                <Input
                    label="Sinking Fund Link"
                    type="text"
                    value={sinkingFundId}
                    onChange={handleInputChange}
                    placeholder="Enter your Invitation Link"
                    className={`input-field ${error ? "input-error" : ""}`}
                />
                {error && <p className="error-message">{error}</p>}
            </div>

            <div className="button-group">
                <Button
                    onClick={handleJoinSinkingFund}
                    type="button"
                    disabled={!sinkingFundId.trim()}
                    className="btn btn-primary px-4 py-2 rounded-lg"
                >
                    Join Existing Sinking Fund
                </Button>
                <Button
                    onClick={handleCreateNewOrganization}
                    type="button"
                    className="btn btn-secondary px-4 py-2 rounded-lg"
                >
                    Create New Sinking Fund Organization
                </Button>
            </div>
        </div>
    );
};

export default RoleSelectorPage;