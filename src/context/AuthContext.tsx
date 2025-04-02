import { auth } from "@/shared/firebase/auth";
import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean; // Track loading state
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    user: null,
    loading: true, // Default to loading on initial render
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // To ensure app doesn't flash login state

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false); // Stop loading once state is determined
        });

        return () => unsubscribe(); // Cleanup listener on component unmount
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};