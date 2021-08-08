import { useContext } from "react";
import { UserNameContext } from "./UseContext";

export default function UseContextChild() {
    const {userName} = useContext(UserNameContext);
    return <label>{userName}</label>
}