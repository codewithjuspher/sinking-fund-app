import { Button } from "@/components";
import "@/styles/components/header.css";
import { HeaderProps } from "@/types";
import React from "react";

const Header: React.FC<HeaderProps> = ({
    organizationName,
    userName,
    userEmail,
    userProfileImage,
    onLogout,
}) => {
    const profileImage = userProfileImage;
    return (
        <header className="header-container">
            <div className="header-organization">{organizationName}</div>
            <div className="header-user-info">
                <div className="header-user-text">
                    <p className="user-name">{userName}</p>
                    <p className="user-email">{userEmail}</p>
                </div>
                <img
                    src={profileImage}
                    alt={`${userName}'s profile`}
                    className="user-profile-picture"
                    loading="lazy"
                />
                <Button onClick={onLogout} className="btn-logout" type="button">
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;