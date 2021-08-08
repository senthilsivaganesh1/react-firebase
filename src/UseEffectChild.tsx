import { useEffect, useState } from "react";

interface IProps {
    name: string;
}

export default function UseEffectChild(props: IProps) {
    const[message, setMessage] = useState("");
    useEffect(()=>{
        console.log("props changed");
        setMessage(`hello ${props.name}`);
    },[props.name]);
    return (
        <>
        <label>UseEffectChild</label>
        <div>{message}</div>
        </>
    )
}