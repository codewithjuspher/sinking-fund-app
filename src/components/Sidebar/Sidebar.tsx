import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@/components";
import { MENU_ITEMS } from "./menuConstants";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC<{ sinkingId: string }> = ({ sinkingId }) => {
    const [activeParent, setActiveParent] = useState<string | null>("dashboard");
    const [activeChild, setActiveChild] = useState<string | null>("");
    const navigate = useNavigate();
    const location = useLocation();

    /**
     * Ensure the initial page and active menu state are synchronized.
     * 
     * This function is used to:
     * - Parse the current URL search parameters to determine the active page.
     * - If no `page` parameter exists, redirect the user to the default dashboard page.
     * - Identify the active parent menu and submenu based on the URL.
     * - Update the state for `activeParent` (parent menu) and `activeChild` (submenu).
     */
    const initializeActiveMenu = useCallback(() => {
        const params = new URLSearchParams(location.search); // Parse URL search parameters
        const currentPage = params.get("page"); // Get the current 'page' value from the parameters

        if (!currentPage) {
            // Redirect to the dashboard if no 'page' parameter exists in the URL
            navigate(`/sinking-fund/${sinkingId}?page=dashboard`, { replace: true });
        } else {
            // Extract active menu and submenu names from the current page value
            const activeMenu = currentPage.split("/")[0]; // Parent menu name
            const activeSubMenu = currentPage.split("/")[1]; // Submenu name

            // Update state with the active menu and submenu
            setActiveParent(activeMenu); // Set the active parent menu
            setActiveChild(
                activeSubMenu ||
                MENU_ITEMS(sinkingId) // Search the menu items
                    .find((item) => item.name === activeMenu)?.children?.[0]?.name || // Default to first child
                "" // Empty string if no submenu exists
            );
        }
    }, [location.search, navigate, sinkingId]); // Dependencies to re-run this function when needed

    /**
     * Run the menu initialization logic on mount and when dependencies change.
     * 
     * Ensures that the active menu and submenu states are properly set when the
     * component is mounted or the URL changes.
     */
    useEffect(() => {
        initializeActiveMenu(); // Synchronize active menu states
    }, [initializeActiveMenu]);

    /**
     * Toggle active menu parent and set the first child as active.
     * 
     * This function handles toggling dropdown behavior for parent menus:
     * - If the clicked parent menu is already active, reset `activeParent` and `activeChild` to close the dropdown.
     * - If the clicked parent menu is inactive, set it as active and determine the first child menu path.
     * - Navigate to the appropriate path (either the parent menu's page or the first child's page).
     * 
     * @param parentName Name of the parent menu to toggle
     */
    const toggleDropdown = (parentName: string | null) => {
        if (activeParent === parentName) {
            // Close dropdown: Reset parent and child states
            setActiveParent(null);
            setActiveChild(null);
        } else {
            // Open dropdown: Set the parent as active and determine the first child
            setActiveParent(parentName);
            const firstChild = MENU_ITEMS(sinkingId)
                .find((item) => item.name === parentName)?.children?.[0]?.name || null; // Find the first child

            setActiveChild(firstChild); // Update the active child state

            // Navigate to the child's page if it exists, or the parent's page otherwise
            if (firstChild) {
                navigate(`/sinking-fund/${sinkingId}?page=${parentName}/${firstChild}`);
            } else {
                navigate(`/sinking-fund/${sinkingId}?page=${parentName}`);
            }
        }
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
                            activeChild={activeChild}
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