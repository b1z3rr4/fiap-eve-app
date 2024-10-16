import { auth } from "@/application/libs/firebase";
import { useHistory } from "@/application/libs/history";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
import { IError } from "@/application/interfaces/IError";

type ContextProps = {
  currentUser: User | null;
  logout: () => void;
  login: (username: string, password: string) => void;
};

const initialAuthContext: ContextProps = {
  currentUser: null,
  logout: () => {},
  login: (username: string, password: string) => ({ username, password }),
};

const CACHE_KEY = "user_session";
const SESSION_EXPIRATION_MS = 3600 * 1000;

const getSessionCache = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return false;

    const { user, expiration } = JSON.parse(cached);

    if (new Date().getTime() > expiration) {
        localStorage.removeItem(CACHE_KEY);
        return false;
    }

    return user as User;
}

const setSessionCache = (user: User) => {
    const expiration = new Date().getTime() + SESSION_EXPIRATION_MS;
    localStorage.setItem(CACHE_KEY, JSON.stringify({ user, expiration }));
}

const clearSessionCache = () => {
    localStorage.removeItem(CACHE_KEY);
}

export const AuthContext = createContext(initialAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const { navigate } = useHistory();
    const { notifyError, notifySuccess } = useToast();

    useEffect(() => {
        const cachedUser = getSessionCache();

        if (cachedUser) {
            setCurrentUser(cachedUser)
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setSessionCache(user);
            } else {
              clearSessionCache();
            }

            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, [])


    async function login(email: string, password: string) {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            setCurrentUser(user);
            setSessionCache(user);
            notifySuccess("Login bem-sucedido!");
            navigate("/home");
        } catch (error) {
            notifyError((error as IError).message);
        }
    }

    async function logout() {
        try {
            await signOut(auth);

            clearSessionCache();
            setCurrentUser(null);
            notifySuccess("Logout realizado com sucesso!");
            navigate("/login")
        } catch (error) {
            notifyError((error as IError).message);
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
