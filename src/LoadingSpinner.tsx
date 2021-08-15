import { CircularProgress, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme)=>
createStyles({
    loadingSpinner: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:9999, 
        position:"fixed",
        left:"0",
        top:"0",
        width:"100%",
        height:"100%"
    },
})
);

export default function LoadingSpinner() {
    const classes = useStyles();
    return (
    <div className={classes.loadingSpinner}>
        <CircularProgress/>
        </div>
    )
}