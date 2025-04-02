import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "@/modules/users/services/authService";
import { registeredUsers } from "@/modules/users/data/mockData";
import SSOButton from "./SSOButton";
import "./SSOProvider.css";

const SSOProvider: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const user = await signInWithGoogle();

      const registeredUser = registeredUsers.find(
        (u) => u.email === user.email
      );

      if (registeredUser) {
        console.log("User is registered. Redirecting to organization page...");
        navigate(`/organization/${registeredUser.sinkingFundId}`);
      } else {
        console.log("User not registered. Redirecting to role selector...");
        navigate("/path");
      }
    } catch (error) {
      alert("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sso-provider-container">
      <h1 className="sso-provider-title">Welcome to Sinking Fund Portal</h1>
      <SSOButton
        onClick={handleGoogleSignIn}
        loading={loading}
        ariaLabel="Sign in with Google"
      >
        <span className="flex items-center gap-2">
          Sign In with Google
        </span>
      </SSOButton>
    </div>
  );
};

export default SSOProvider;