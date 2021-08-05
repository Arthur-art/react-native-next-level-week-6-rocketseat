import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import * as AuthSession from "expo-auth-session"

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
    const [loading, setLoading] = useState(false)

    function signIn() {
        try {
            setLoading(true)
            const authUrl = "https://discord.com/api/oauth2/authorize?client_id=872851343663042630&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds"

            AuthSession
                .startAsync({ authUrl })

        } catch (error) {

        }
    }

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