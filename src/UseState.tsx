import { useState } from "react";

export default function UseState(){
    const[count,setCount]=useState(0);
    return(
        <>
        <label>{count}</label>
        <button onClick={()=>setCount(count+1)}>Increment by one</button>
        </>
    )
}