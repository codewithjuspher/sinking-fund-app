import { LayoutProps } from "@/types";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div >
            <main >{children}</main>
        </div>
    );
};

export default Layout;