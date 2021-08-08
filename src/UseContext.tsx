import { createContext, useState } from "react"
import UseContextChild from "./UseContextChild";

export const UserNameContext = createContext({userName:""});
export default function UseContextParent() {
    const [userName, setUserName] = useState("");
    return (
        <>
        <input type="textbox" onChange={
            (event) => setUserName(event.target.value)
        }/>
        <UserNameContext.Provider value={{userName: userName}}>
        <UseContextChild/>
        </UserNameContext.Provider>
        </>
    );
}