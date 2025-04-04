export interface MenuItemProps {
    name: string;
    path?: string;
    children?: MenuItemProps[];
    activeParent?: string | null;
    toggleDropdown?: (parentName: string | null) => void;
    sinkingId: string;
}

export interface HeaderProps {
    organizationName: string;
    userName: string;
    userEmail: string;
    userProfileImage: string;
    onLogout: () => void;
}

export interface LayoutProps {
    children: React.ReactNode;
}