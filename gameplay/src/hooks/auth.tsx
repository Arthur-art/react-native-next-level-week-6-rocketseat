import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

type User = {
    id: string;
    username: string;
    firstname: string;
    avatar: string | null;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
}

type AuthContextProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<User>({} as User)
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    useAuth,
    AuthProvider
}