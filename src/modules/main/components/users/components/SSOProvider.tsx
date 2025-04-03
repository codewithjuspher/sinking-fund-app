import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "@/modules/main/components/users/services/authService";
import { registeredUsers } from "@/modules/main/components/users/data/mockData";
import { useUser } from "@/context/UserContext"; // Import UserContext
import Button from "@/components/UI/Button";
import "../styles/SSOProvider.css";

const SSOProvider: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
        setLoading(true);
        const user = await signInWithGoogle();

        if (!user.email || !user.displayName || !user.photoURL) {
            throw new Error("Incomplete user details returned from Google.");
        }

        const registeredUser = registeredUsers.find((u) => u.email === user.email);

        const userDetails = {
            name: user.displayName,
            email: user.email,
            profileImage: user.photoURL,
            sinkingFundId: registeredUser?.sinkingFundId || null,
        };

        setUser(userDetails);

        if (registeredUser) {
            navigate(`/organization/${registeredUser.sinkingFundId}`);
        } else {
            navigate("/path");
        }
    } catch (error) {
        if (error instanceof Error) {
            alert(`Failed to sign in. ${error.message}`);
        } else {
            alert("Failed to sign in due to an unknown error.");
        }
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="sso-provider-container">
      <h1 className="sso-provider-title">Welcome to Sinking Fund Portal</h1>
      <Button
        type="button"
        onClick={handleGoogleSignIn}
        loading={loading}
        ariaLabel="Continue with Google"
        className="sso-button"
      >
        <span className="flex items-center gap-2">Continue with Google</span>
      </Button>
    </div>
  );
};

export default SSOProvider;