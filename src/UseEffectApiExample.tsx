import { useEffect, useState } from "react";

export default function UseEffectApiExample(){
    const[count, setCount] = useState("1");
    const[name, setName] = useState("");
    useEffect(()=>{
        async function api() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
            const json = await response.json();
            setName(json.title);
        }
        api();
    },[count]);
    return(
        <>
        <label>UseEffect Example</label>
        <label>{name}</label>
        <input type="textbox" value={count}
        onChange={(event)=>setCount(event.target.value)}/>
        {/* <button onClick={()=>api(count)}></button> */}
        </>
    )
}