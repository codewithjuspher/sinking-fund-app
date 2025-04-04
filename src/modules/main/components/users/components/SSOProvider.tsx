import placeholderProfileImage from "@/assets/images/place-holder.jpg";
import sinkingLogo from "@/assets/images/sinking-fund-logo.png";
import Button from "@/components/UI/Button";
import { useUser } from "@/context/UserContext";
import { registeredUsers } from "@/modules/main/components/users/data/mockData";
import { signInWithGoogle } from "@/modules/main/components/users/services/authService";
import { UserInterface } from "@/types";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SSOProvider.css";

const SSOProvider: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);

  /**
   * Handles Google Sign-In process.
   */
  const handleGoogleSignIn = async (): Promise<void> => {
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      validateUser(user);

      const email = user.email ?? "No Email";
      const registeredUser = findRegisteredUser(email);

      const userDetails: UserInterface = {
        name: user.displayName ?? "Guest",
        email: email,
        profileImage: user.photoURL ?? placeholderProfileImage,
        sinkingFundId: registeredUser?.sinkingFundId || null,
      };

      setUser(userDetails);
      navigateToDashboard(registeredUser);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Validates the user object returned by Google.
   */
  const validateUser = (user: any): void => {
    if (!user.email || !user.displayName || !user.photoURL) {
      throw new Error("Incomplete user details returned from Google.");
    }
  };

  /**
   * Finds a registered user by email.
   */
  const findRegisteredUser = (email: string): { sinkingFundId?: string } | undefined => {
    return registeredUsers.find((u) => u.email === email);
  };

  /**
   * Navigates to the appropriate dashboard based on user status.
   */
  const navigateToDashboard = (registeredUser: { sinkingFundId?: string } | undefined): void => {
    if (registeredUser?.sinkingFundId) {
      navigate(`/sinking-fund/${registeredUser.sinkingFundId}`);
    } else {
      navigate("/sinking-fund");
    }
  };

  /**
   * Handles error during Google Sign-In.
   */
  const handleError = (error: unknown): void => {
    if (error instanceof Error) {
      console.error("Google Sign-In Error:", error);
      alert(`Failed to sign in: ${error.message}`);
    } else {
      console.error("Unknown error occurred during Google Sign-In");
      alert("An unknown error occurred during sign-in.");
    }
  };

  return (
    <div className="sso-provider-container">
      <img
        src={sinkingLogo}
        alt="Sinking Fund Portal Logo"
        className="sso-provider-image"
      />
      <h1 className="sso-provider-title">Sinking Fund Portal</h1>
      <Button
        type="button"
        onClick={handleGoogleSignIn}
        loading={loading}
        ariaLabel="Continue with Google"
        className="sso-button"
      >
        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
      </Button>
      <p className="sso-note">
        Use your registered Google account to sign in and access the homepage effortlessly.
      </p>
    </div>
  );
};

export default SSOProvider;