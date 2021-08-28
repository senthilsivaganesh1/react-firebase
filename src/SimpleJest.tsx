import { useState } from "react";

export default function SimpleJest() {
    const [name, setName] = useState<string>("");
    return (
        <>
            <input type="text" onChange={(e)=>setName(e.target.value)} data-testid="input" aria-label="input"/>
            <label data-testid="output">{`hello ${name}`}</label>
        </>
    )
}