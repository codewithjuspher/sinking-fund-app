export interface MenuItemProps {
    name: string;
    path?: string;
    children?: { name: string; path: string; sinkingId: string }[];
    activeParent?: string | null;
    activeChild: string | null;
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