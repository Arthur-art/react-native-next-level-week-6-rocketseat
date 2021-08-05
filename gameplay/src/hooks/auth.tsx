import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import * as AuthSession from "expo-auth-session"
import { CDN_IMAGE, CLIENT_ID, RESPONSE_TYPE, ESCOPO, REDIRECT_URI } from "../config"
import { api } from "../services/api";

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
    signIn: () => Promise<void>
}

type AuthContextProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)
    const { baseURL } = api.defaults

    async function signIn() {
        try {
            setLoading(true)
            const authUrl = `${baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${ESCOPO}`

            AuthSession
                .startAsync({ authUrl })

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
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