import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INamesState } from "./NamesReducer";
import { AppState } from "./ReducerSetup";

export default function ReducerUIExample() {
    // const [names, setNames] = useState<string[]>([]);
    const namesReducer:INamesState = useSelector( (state:AppState)=>state.NamesReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
      async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json:{name:string}[] = await response.json();
            const payload = {names: json.map(x=>x.name)};
            dispatch({type:"names", payload:payload});            
        }
        if(namesReducer.names.length===0)
        api();
    });
    return (
        <>
        {/* {names.map((x,i) => renderName(x))} */}
        {namesReducer.names.map((x,i) => renderName(x))}
        </>
    );

    function renderName(name:string) {
        return <div>{name}</div>
    }
}