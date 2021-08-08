import { useHistory } from "react-router-dom"

export function ScreenA(){
    const history = useHistory();
    return(
        <>
        <label>it is screenA page</label>
        <button onClick={()=>history.push("/c/comingfromA")}> go to c page</button>
        <button onClick={()=>history.goBack()}> back button</button>
        </>
    )
}