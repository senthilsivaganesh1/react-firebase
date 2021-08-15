
import React from "react";
import { IHotel, IHotelAction, IStatusizedHotel, Status } from "./HotelReducer";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  Button,
  createStyles,
  fade,
  Grid,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import { useContext } from "react";
import { userContext } from "./UserProvider";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      search: {
        flexGrow: 1,
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(3),
          width: "auto",
        },
      },
      inputRoot: {
        color: "inherit",
        width: "100%"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
        },
      },
})
);


interface IHotelAppBarProps {    
    // filteredHotels: IHotel[];
    setFilteredHotels: React.Dispatch<React.SetStateAction<IHotel[]>>;
    originalHotels: IHotel[]
}
export default function HotelAppBar(props: IHotelAppBarProps) {
    const user: firebase.User | null = useContext(userContext);
    const history = useHistory();
    const classes = useStyles();
    const renderButton = (text:string, url:string)=>{
        return (
            <Button onClick={()=>history.push(url)}>{text}</Button>
        )
    }
    return (
        <AppBar position={"static"}>
            <Toolbar>
            {renderSearch(props, classes)}
            {user && renderButton("PROFILE", "/profile")}
            {!user && renderButton("LOGIN", "/login")}
            {!user && renderButton("SIGNUP", "/signup")}
            </Toolbar>
         </AppBar>   
    )
}

// function renderButton(text: string, url:string) {
//     return (
//         <button onClick={history.push(url)}>{text}</button>
//     )
// }

function renderSearch(props: IHotelAppBarProps, classes:any) {
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={
            {
              root: classes.inputRoot,
               input: classes.inputInput,
            }
          }
          inputProps={{ "aria-label": "search" }}
          onChange={(event) =>
            props.setFilteredHotels(
              props.originalHotels.filter((x) =>
                x.name.toLowerCase().includes(event.target.value.toLowerCase())
              )
            )
          }
        />
      </div>
    );
  }