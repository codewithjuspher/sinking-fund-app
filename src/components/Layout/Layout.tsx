import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const layoutStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const mainStyles: React.CSSProperties = {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={layoutStyles}>
            <main style={mainStyles}>
                {children}
            </main>
        </div>
    );
};

export default Layout;