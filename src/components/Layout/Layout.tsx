import { LayoutProps } from "@/types";
import React from "react";

/**
 * Layout Component
 * 
 * Purpose:
 * - Provides a basic layout wrapper for the application.
 * - Accepts `children` as content to be rendered inside the `<main>` element.
 * 
 * Props:
 * - `children`: React nodes (elements, components, or content) passed into the layout.
 */

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            {/* Main content wrapper */}
            <main>{children}</main>
        </div>
    );
};

export default Layout;