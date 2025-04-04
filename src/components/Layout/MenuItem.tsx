import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuItemProps } from "@/types";
import styles from "@/styles/sidebar.module.css";
import { motion } from "framer-motion";

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

    const isParentActive =
        activeParent === name ||
        path === activePage ||
        children?.some(child => child.path === activePage);

    const isSubmenuActive = (submenuPath: string | undefined) => submenuPath === activePage;

    /**
     * Handle parent menu click (toggle dropdown and navigate).
     */
    const handleParentClick = () => {
        if (isParentActive) {
            toggleDropdown?.(null);
        } else {
            toggleDropdown?.(name);
            if (path) {
                navigate(`/sinking-fund/${sinkingId}?page=${path}`);
            }
        }
    };
    /**
     * Handle submenu click (navigate and keep parent dropdown open).
     */
    const handleSubmenuClick = (submenuPath?: string) => {
        if (submenuPath) {
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
                {name}
            </div>

            {/* Submenu */}
            {Array.isArray(children) && children.length > 0 && isParentActive && (
                <motion.ul
                    className={styles.subMenuList}
                    role="menu"
                    aria-expanded={isParentActive}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isParentActive ? 1 : 0, height: isParentActive ? "auto" : 0 }}
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