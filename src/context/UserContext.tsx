import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import placeholderProfileImage from "@/assets/images/place-holder.jpg";
import { UserInterface, UserContextProps } from "@/types";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(
            auth,
            (firebaseUser) => {
                if (firebaseUser) {
                    const { displayName, email, photoURL } = firebaseUser;
                    const userDetails: UserInterface = {
                        name: displayName?.trim() || "Guest",
                        email: email?.trim() || "No Email",
                        profileImage: photoURL?.trim() || placeholderProfileImage,
                        sinkingFundId: null,
                    };
                    setUser(userDetails);
                } else {
                    setUser(null);
                }
            },
            (error) => {
                console.error("Firebase Authentication Error:", error);
                setUser(null);
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

// Hook to use UserContext safely
export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};