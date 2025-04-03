import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/sidebar.module.css";

interface MenuItemProps {
    name: string;
    href?: string;
    children?: MenuItemProps[];
    activeParent?: string | null;
    toggleDropdown?: (parentName: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, children, activeParent, toggleDropdown }) => {
    const isActive = activeParent === name;

    return (
        <li className={styles.menuItem}>
            <div
                onClick={() => toggleDropdown?.(name)}
                className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
            >
                {name}
            </div>
            {Array.isArray(children) && children.length > 0 && isActive && (
                <motion.ul
                    className={styles.subMenuList}
                    role="menu"
                    aria-expanded={isActive}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                >
                    {children.map((child) => (
                        <li key={child.name} className={styles.subMenuItem}>
                            <a href={child.href || "#"} className={styles.subMenuLink}>
                                {child.name}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </li>
    );
};

export default MenuItem;