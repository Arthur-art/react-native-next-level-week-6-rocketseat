import React, { createContext, ReactNode, useState } from "react";

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

export function AuthProvider({ children }: AuthContextProps) {

    return (
        <AuthContext.Provider value={{
            user: {
                id: "1",
                username: "Arthur",
                firstname: "Teixeira",
                avatar: null,
                email: "arthurteixeira.guts@gmail.com",
                token: "string",
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}