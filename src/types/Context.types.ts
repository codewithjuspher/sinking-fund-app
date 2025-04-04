import { User } from "firebase/auth";

export interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
}

export interface UserInterface {
    name: string | null;
    email: string;
    profileImage: string;
    sinkingFundId?: string | null;
}

export interface UserContextProps {
    user: UserInterface | null;
    setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
}
