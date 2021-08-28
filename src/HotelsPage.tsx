import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getHotels } from "./ApiRequest";
import HotelCard from "./HotelCard";
import { IHotel, IHotelAction, IStatusizedHotel, Status } from "./HotelReducer";
import { AppState } from "./ReducerSetup";
import LoadingSpinner from './LoadingSpinner'
// import SearchIcon from "@material-ui/icons/Search";
import HotelAppBar from "./HotelAppBar";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hotels: {
            
            margin: "20px 0 20px 20px",
            width: "98%"
        },
    })
);

export default function HotelsPage() {
    const dispatch: Dispatch<IHotelAction> = useDispatch();
    const [filteredHotels, setFilteredHotels] = useState<IHotel[]>([]);
    // const dispatch: Dispatch = useDispatch();
    const statusizedHotel: IStatusizedHotel = useSelector((state: AppState) => state.HotelReducer)
    const classes = useStyles();
    useEffect(() => {
        setFilteredHotels(statusizedHotel.hotels);
    }, [statusizedHotel.hotels]);

    useEffect(() => {
        getHotels(dispatch);
    }, [dispatch]);

    switch (statusizedHotel.status) {
        case Status.Success: return renderPage(statusizedHotel.hotels, filteredHotels, setFilteredHotels, classes.hotels);
        // case Status.Success : return <div> Loading</div>
        case Status.Failure: return <div> Failure</div>

    }
    // return <div>Loading ...</div>
    return <LoadingSpinner />
}

function renderPage(originalHotels: IHotel[], filteredHotels: IHotel[], setFilteredHotels: React.Dispatch<React.SetStateAction<IHotel[]>>, hotelsClassName: string) {
    return (
        <>
            {<HotelAppBar originalHotels={originalHotels} setFilteredHotels={setFilteredHotels}/>}
            {renderHotels(filteredHotels, hotelsClassName)}
        </>
    )
}

// function renderSearch(originalHotels: IHotel[],  setFilteredHotels: React.Dispatch<React.SetStateAction<IHotel[]>>) {
//     return (<div>
//         <div>
//             <SearchIcon />
//         </div>
//         <InputBase
//             placeholder="Search.."
//             classes={{

//             }}
//             inputProps={{ "aria-label": "search" }}
//             onChange={(event) => setFilteredHotels(originalHotels.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())))}
//         />
//     </div>
//     );
// }


function renderHotels(hotels: IHotel[], className: string) {
    if (hotels && hotels.length) {
        return (
            <Grid container justify="center" spacing={6} className={className} alignItems="stretch">
                {hotels.map((x) => renderHotel(x))}
            </Grid>
        )
    }

    return <div> No Hotels found</div>
}

function renderHotel(hotel: IHotel) {
    return (
        <Grid key={hotel.id} item xs={3}>
            <HotelCard {...hotel} />
        </Grid>
    )
}