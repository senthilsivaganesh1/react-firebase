import firebase from "firebase/app";
import { useContext } from "react";
import { signOut, Status } from "./auth";
import { userContext } from './UserProvider'
import { useHistory } from "react-router-dom";
import { Fab, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    
    root: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "column"
    }
  

});

export function Profile() {
    const user: firebase.User | null = useContext(userContext);
    const style = useStyles();
    const history = useHistory();
    const onSignOut = async () => {
        const message = await signOut();
        if (message.status === Status.Success) {
            history.push('/');
        }
    }
    if (user?.uid) {
        return (
            <div className={style.root}>
                <Typography variant="h4" >
                    Welcome to the Profile page
                </Typography>
              

                <div>
                    {user.displayName}
                </div>
                <div>
                    {user.email}
                </div>
                <div>
                    {user.uid}
                </div>
                <Fab color="primary" onClick={() => onSignOut()}> signOut </Fab>
                {/* <Button variant="contained" color="primary" component="span">
          Upload
        </Button> */}
                {/* <button className={"item"} onClick={()=>signOut()}>signOut</button> */}
            </div>
        )
    }
    else {
        return <div> User doesnot exist</div>
    }
}

