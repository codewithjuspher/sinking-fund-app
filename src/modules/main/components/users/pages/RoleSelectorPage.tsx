import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { registeredOrganizations } from "@/modules/main/components/users/data/mockData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleSelectorPage.css";

const RoleSelectorPage: React.FC = () => {
    const [sinkingFundId, setSinkingFundId] = useState<string>("");
    const [error, setError] = useState<string>(""); 
    const navigate = useNavigate();

    const isValidOrganization = (id: string): boolean => {
        return registeredOrganizations.some((org) => org.id === id);
    };

    const handleJoinSinkingFund = async () => {
        setError("");

        if (!sinkingFundId.trim()) {
            setError("Please provide a valid Sinking Fund ID.");
            return;
        }

        if (isValidOrganization(sinkingFundId.trim())) {
            navigate(`/organization/${sinkingFundId.trim()}`);
        } else {
            setError("The provided Sinking Fund Link does not exist.");
        }
    };

    const handleCreateNewOrganization = () => {
        setError("");
        navigate("/create-organization")
    };

    return (
        <div className="role-selector-container">
            <h1 className="role-selector-title">Choose Your Sinking Fund Path</h1>

            <div className="input-group">
                <Input
                    label="Sinking Fund Link"
                    type="text"
                    value={sinkingFundId}
                    onChange={(e) => {
                        setSinkingFundId(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder=""
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