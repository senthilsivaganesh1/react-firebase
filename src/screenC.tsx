import { useHistory, useParams } from "react-router-dom";

export function ScreenC() {
    const {userId} = useParams<{userId:string}>();
    const history = useHistory();
    return (
    <>
    <label>{userId}</label>    
    <label>this is Screen C</label>
    <button onClick={()=>history.push("/a")}  >go to a page</button>
    <button onClick={()=>history.goBack()} > back button</button>
    </>
    )
}