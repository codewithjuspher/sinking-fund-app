import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import placeholderProfileImage from "@/assets/images/place-holder.jpg";

interface User {
    name: string;
    email: string;
    profileImage: string;
    sinkingFundId?: string | null;
}

interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(
            auth,
            (firebaseUser) => {
                try {
                    if (firebaseUser) {
                        const userDetails: User = {
                            name: firebaseUser.displayName || "Guest",
                            email: firebaseUser.email || "No Email",
                            profileImage: firebaseUser.photoURL?.trim() || placeholderProfileImage, 
                            sinkingFundId: null, 
                        };
                        setUser(userDetails);
                    } else {
                        setUser(null);
                    }
                } catch (error) {
                    console.error("Error handling Firebase user data:", error);
                    setUser(null);
                }
            },
            (error) => {
                console.error("Error with Firebase Authentication:", error);
            }
        );

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};