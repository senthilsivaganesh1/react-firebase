import firebase from "firebase/app";
import { createContext, useEffect, useState } from "react";

interface IProps {
    children: React.ReactNode;
}

export const userContext = createContext<firebase.User | null>(null);

export default function UserProvider(props: IProps) {
    const [user, setUser] = useState<firebase.User | null>(null);   
    useEffect(()=>{

        const unsubscribe = firebase.auth().onAuthStateChanged((a: firebase.User | null)=>{
            setUser(a);
        });
        return unsubscribe;
    }, []);

    return (
        <userContext.Provider value={user}>
            {props.children}
        </userContext.Provider>
    )

}