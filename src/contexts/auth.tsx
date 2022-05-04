import { useState, useContext, createContext, useEffect, Children } from 'react'

import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import FirebaseService from '../services/FirebaseService';
import Loading from '../components/Loading/Loading';

export type AuthProviderValueType = {
    signed: boolean,
    user: any
}

export const AuthContext = createContext<AuthProviderValueType>({
    signed: false,
    user: null
})

type PropsAuthType = {
    children: React.ReactNode
}

function AuthProvider(props: PropsAuthType) {
    const [user, setUser] = useState<any>()
    const [signed, setSigned] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)

    useEffect(() => {
        const auth = getAuth(FirebaseService.getDatabase());
        onAuthStateChanged(auth, user => {
            console.warn('Auth Firebase...')
            if (user) {
                setUser(user)
                setSigned(true)
            } else {
                setUser(null)
                setSigned(false)
            }
            setLoadingAuth(false)
        })
        if (false) {
            signOut(auth).then(() => {
                console.log('logouted...')
            }).catch((error) => {
                // An error happened.
            });
        }
    }, [])


    const globalVars: AuthProviderValueType = {
        signed,
        user
    }
    return (
        <AuthContext.Provider value={globalVars}>
            {loadingAuth ? (<Loading />) : (props.children)}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export function getVarContext(): AuthProviderValueType {
    return useContext<AuthProviderValueType>(AuthContext)
}