import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { IStatusizedMessage, login } from "./auth";
import { Status } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";

const useStyles = makeStyles({
    errorMessage: {
        color: "red",
    },
    root: {
        display:"flex",
        flexDirection: "column",
    },
    item: {
        margin: "20px"
    },
    buttons: {
        display: "flex"
    }

});

interface IForm {
    email: string,
    password: string,
}
export  function Login() {
    const[message,setMessage] = useState<IStatusizedMessage>({status:Status.NotStarted, message:""});
    const {handleSubmit,register,reset, formState:{errors}} = useForm<IForm>();
    const classes = useStyles();
    const history = useHistory();
    const submitCallBack = async(form: IForm) => {
        const message = await login(form.email, form.password);
        if(message.status === Status.Success) {
            reset();
            history.push('/');
        }
        setMessage(message);
    }
    return(
        <>
           {message.status===Status.Loading && <LoadingSpinner/>} 
           <div className={classes.root}>
               <Typography variant="h4" className={classes.item}>
                   Welcome to the Login page
               </Typography>          

           <form className={classes.root} onSubmit={handleSubmit(submitCallBack)}>          

            <TextField  {...register("email", {
                pattern: {value: /.+@.*\..*/, message:"email pattern is wrong"}
            })}
            className={classes.item}
            required
            id="outlined-required"
            label="Email address"
            name="email"
            variant="outlined"
            type="email"
            error={errors.email? true : false}
            helperText={errors.email?.message}
            />   

            <TextField  {...register("password", {
                minLength:{value:4,message:"minLenght error"},
                maxLength:{value:8,message:"maxLenght error"},
            })}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            className={classes.item}
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />     

           
            <div className={classes.buttons}>
               <Fab color="primary" type="submit" className={classes.item}> Submit </Fab>
               <Fab color="secondary" onClick={()=>reset()} className={classes.item}>reset</Fab>
            </div>

                        
        </form>
            {message.status === Status.Failure && 
            renderError(message.message, classes.errorMessage)}
        </div>
        
        {/* <button className={"item"} onClick={()=>reset()}>reset</button> */}
        </>
    )
}


function renderError(message?: string, className?:string) {
    if (message) return <Typography variant="h5" className={className}>{message}</Typography>;
}
