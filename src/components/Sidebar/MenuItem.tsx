import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { MenuItemProps } from "@/types";
import styles from "./Sidebar.module.css";

const MenuItem: React.FC<MenuItemProps> = ({
    name,
    path,
    children,
    activeParent,
    toggleDropdown,
    sinkingId,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const activePage = useMemo(() => params.get("page"), [location.search]);

    // Determines whether the parent menu is active.
    // A parent is considered active if:
    // - It matches the currently active parent (`activeParent === name`)
    // - Its path matches the currently active page (`path === activePage`)
    // - Any of its children has a path that matches the active page (`children?.some(...)`)
    const isParentActive =
        activeParent === name ||
        path === activePage ||
        children?.some((child) => child.path === activePage);

    // Checks if a submenu (child menu item) is active.
    // A submenu is active if its `submenuPath` matches the currently active page (`activePage`).
    const isSubmenuActive = (submenuPath: string | undefined) =>
        submenuPath === activePage;

    // Handles clicks on a parent menu item.
    // If the parent is already active:
    // - Close the dropdown by resetting `activeParent` through `toggleDropdown`.
    // Otherwise:
    // - Open the dropdown for the clicked parent using `toggleDropdown`.
    // - If the parent has children, navigate to the first child's path.
    // - If no children exist, navigate to the parent's path.
    const handleParentClick = () => {
        if (isParentActive) {
            // Close the dropdown by resetting the active state.
            toggleDropdown?.(null);
        } else {
            // Open the dropdown and set the active parent.
            toggleDropdown?.(name);

            if (children && children.length > 0) {
                // Navigate to the first child's path.
                const firstChild = children[0].path;
                navigate(`/sinking-fund/${sinkingId}?page=${firstChild}`);
            } else if (path) {
                // Navigate to the parent's path if no children are available.
                navigate(`/sinking-fund/${sinkingId}?page=${path}`);
            }
        }
    };

    // Handles clicks on submenu (child) items.
    // If a submenu path is provided:
    // - Set the parent as active through `toggleDropdown`.
    // - Navigate to the submenu's path.
    const handleSubmenuClick = (submenuPath?: string) => {
        if (submenuPath) {
            // Keep the parent dropdown active and navigate to the submenu.
            toggleDropdown?.(name);
            navigate(`/sinking-fund/${sinkingId}?page=${submenuPath}`);
        }
    };

    return (
        <li className={`${styles.menuItem} ${isParentActive ? styles.active : ""}`}>
            {/* Parent Menu */}
            <div
                onClick={handleParentClick}
                className={`${styles.menuLink} ${isParentActive ? styles.active : ""}`}
            >
                <span className={styles.menuText}>{name}</span>
                {Array.isArray(children) && children.length > 0 && (
                    <span className={styles.icon}>
                        {isParentActive ? (
                            // Render active icon with a specific class or color
                            <FontAwesomeIcon
                                icon={faChevronUp}
                                className={`${styles.iconChevron} ${styles.iconActive}`} // Add a class for active icon
                            />
                        ) : (
                            // Render inactive icon
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={styles.iconChevron}
                            />
                        )}
                    </span>
                )}
            </div>

            {/* Submenu */}
            {Array.isArray(children) && children.length > 0 && isParentActive && (
                <motion.ul
                    className={styles.subMenuList}
                    role="menu"
                    aria-expanded={isParentActive}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isParentActive ? 1 : 0,
                        height: isParentActive ? "auto" : 0,
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                >
                    {children.map((child) => (
                        <li
                            key={child.name}
                            className={`${styles.subMenuItem} ${isSubmenuActive(child.path) ? styles.active : ""
                                }`}
                        >
                            <div
                                onClick={() => handleSubmenuClick(child.path)}
                                className={`${styles.subMenuLink} ${isSubmenuActive(child.path) ? styles.active : ""
                                    }`}
                            >
                                {child.name}
                            </div>
                        </li>
                    ))}
                </motion.ul>
            )}
        </li>
    );
};

export default MenuItem;