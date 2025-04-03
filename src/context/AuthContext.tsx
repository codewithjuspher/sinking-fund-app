import { auth } from "@/shared/firebase/auth";
import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    user: null,
    loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};