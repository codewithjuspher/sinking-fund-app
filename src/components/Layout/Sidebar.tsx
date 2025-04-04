import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { MenuItem } from "@/components";
import { MENU_ITEMS } from "@/config";
import styles from "@/styles/sidebar.module.css";

const Sidebar: React.FC<{ sinkingId: string }> = ({ sinkingId }) => {
    const [activeParent, setActiveParent] = useState<string | null>("");
    const navigate = useNavigate();
    const location = useLocation();

    /**
     * Ensure the initial page and active menu state are synchronized.
     */
    const initializeActiveMenu = useCallback(() => {
        const params = new URLSearchParams(location.search);
        const currentPage = params.get("page");

        if (!currentPage) {
            navigate(`/sinking-fund/${sinkingId}?page=dashboard`, { replace: true });
            setActiveParent("dashboard");
        } else {
            const activeMenu = currentPage.split("/")[0];
            setActiveParent(activeMenu); 
        }
    }, [location.search, navigate, sinkingId]);

    useEffect(() => {
        initializeActiveMenu();
    }, [initializeActiveMenu]);

    /**
     * Toggle active menu parent for dropdown functionality.
     */
    const toggleDropdown = (parentName: string | null) => {
        setActiveParent((prev) => (prev === parentName ? null : parentName));
    };

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.menuList}>
                    {MENU_ITEMS(sinkingId).map((item) => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            path={item.path}
                            children={item.children}
                            activeParent={activeParent}
                            toggleDropdown={toggleDropdown}
                            sinkingId={sinkingId}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;