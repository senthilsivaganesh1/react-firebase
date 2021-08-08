import { useState } from "react";
import UseEffectChild from "./UseEffectChild";

export default function UseEffectParent() {
    const[name, setName] = useState("geeks");
    return(
        <>
        <label>use effect parent</label>
        <input type="textbox" value={name}
        onChange={(event)=>setName(event.target.value)}/>
        <UseEffectChild name={name} />
        </>
    )
}