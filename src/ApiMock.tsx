import { useEffect, useState } from "react";
import {getNameApi} from './ApiRequest';

export default function ApiMock() {
    const [name, setName] = useState<string>("");
    useEffect(()=>{
        async function getName() {
            const apiName = await getNameApi();
            setName(apiName);
        }
        getName();

    },[]);
    return <label data-testid="output">{name}</label>
}