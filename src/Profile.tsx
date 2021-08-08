import firebase from "firebase/app";
import { useContext } from "react";
import { signOut } from "./auth";
import {userContext} from './UserProvider'

export function Profile() {
    const user: firebase.User | null = useContext(userContext);
    if(user?.uid) {
        return (
            <>
                <div>
                    {user.displayName}
                </div>
                <div>
                    {user.email}
                </div>
                <div>
                {user.uid}
                </div>
                <button className={"item"} onClick={()=>signOut()}>signOut</button>
            </>
        )
    }
    else {
        return <div> User doesnot exist</div>
    }
}

