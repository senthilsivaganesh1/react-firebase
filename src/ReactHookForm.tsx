import {useForm} from "react-hook-form";
import { signUp } from "./auth";

interface IForm {
    name: string,
    email: string,
    password: string
}
export default function ReactHookForm() {
    const {handleSubmit,register,reset, formState:{errors}} = useForm<IForm>();
    return(
        <>
           <form  onSubmit={handleSubmit(submitCallBack)}>
            <input className={"item"} type="textbox" {...register("name", {
                minLength:{value:4,message:"minLenght error"},
                maxLength:{value:8,message:"maxLenght error"},
            })}/>    
            {renderError(errors.name?.message)}        

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

function submitCallBack(form: IForm) {
    const message = signUp(form.name, form.email, form.password);
    alert(message);
}