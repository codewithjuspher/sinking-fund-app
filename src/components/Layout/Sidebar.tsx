import React, { useState } from "react";
import { menuItems } from "@/config/menuConfig";
import MenuItem from "./MenuItem";
import styles from "@/styles/sidebar.module.css";

const Sidebar: React.FC = () => {
    const [activeParent, setActiveParent] = useState<string | null>("Dashboard");

    const toggleDropdown = (parentName: string) => {
        setActiveParent((prev) => (prev === parentName ? null : parentName));
    };

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            children={item.children}
                            activeParent={activeParent}
                            toggleDropdown={toggleDropdown}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;