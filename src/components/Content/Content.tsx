import React, { ReactNode } from "react";
import "./Content.css";

/**
 * Props for ContentLayout:
 * - `children`: React nodes representing the main content to be displayed.
 */
interface ContentLayoutProps {
    children: ReactNode;
}

/**
 * ContentLayout Component:
 * A wrapper layout for rendering dynamic content inside a styled container.
 * - The container's class (`content-area`) manages layout and styling.
 */
const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
    return (
        <div className="content-area">
            <div>{children}</div> {/* Renders nested content dynamically */}
        </div>
    );
};

export default ContentLayout;