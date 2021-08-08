import {useForm} from "react-hook-form";
import { login } from "./auth";

interface IForm {
    name: string,
    email: string,
    password: string,
}
export  function Login() {
    const {handleSubmit,register,reset, formState:{errors}} = useForm<IForm>();
    return(
        <>
           <form  onSubmit={handleSubmit(submitCallBack)}>          

            <input className={"item"} type="email" {...register("email", {
                pattern: {value: /.+@.*\..*/, message:"email pattern is wrong"}
            })}/>               

            {renderError(errors.email?.message)}  

            <input className={"item"} type="password" {...register("password", {
                minLength:{value:4,message:"minLenght error"},
                maxLength:{value:8,message:"maxLenght error"},
            })}/>               
            <button className={"item"} type="submit">    Submit           </button>            
        </form>
        <button className={"item"} onClick={()=>reset()}>reset</button>
        {/* <button className={"item"} onClick={()=>reset()}>reset</button> */}
        </>
    )
}

function renderError(message?: string) {
    if (message) return <span>{message}</span>;
}

async function submitCallBack(form: IForm) {
    const message = await login(form.email, form.password);
    alert(message);
}