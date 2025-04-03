import React from "react";
import SSOProvider from "@/modules/main/components/users/components/SSOProvider";
import Card from "@/components/UI/Card";
import "../styles/LoginPage.css"

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <Card>
                <SSOProvider />
            </Card>
        </div>
    );
};

export default LoginPage;