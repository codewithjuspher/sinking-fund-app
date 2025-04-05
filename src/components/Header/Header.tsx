import { Button } from "@/components";
import "./Header.css";
import { HeaderProps } from "@/types";
import React from "react";

/**
 * Header Component
 * 
 * Props:
 * - `organizationName`: The name of the organization to display in the header.
 * - `userName`: The name of the logged-in user.
 * - `userEmail`: The email address of the logged-in user.
 * - `userProfileImage`: The URL of the user's profile picture.
 * - `onLogout`: Callback function executed when the logout button is clicked.
 */

const Header: React.FC<HeaderProps> = ({
    organizationName,
    userName,
    userEmail,
    userProfileImage, 
    onLogout, 
}) => {
    // Assign the profile image URL to a variable for easier reuse
    const profileImage = userProfileImage;

    return (
        <header className="header-container">
            {/* Organization Name */}
            <div className="header-organization">{organizationName}</div>

            {/* User Information Section */}
            <div className="header-user-info">
                {/* User Name and Email */}
                <div className="header-user-text">
                    <p className="user-name">{userName}</p>
                    <p className="user-email">{userEmail}</p>
                </div>

                {/* User Profile Picture */}
                <img
                    src={profileImage} 
                    alt={`${userName}'s profile`}
                    className="user-profile-picture"
                    loading="lazy" // Improves performance by deferring loading of offscreen images
                />

                {/* Logout Button */}
                <Button
                    onClick={onLogout} // Triggers the logout functionality
                    className="btn-logout"
                    type="button"
                >
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;