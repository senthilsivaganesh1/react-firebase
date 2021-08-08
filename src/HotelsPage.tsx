import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getHotels } from "./ApiRequest";
import { IStatusizedHotel, Status } from "./HotelReducer";
import { AppState } from "./ReducerSetup";

export default function HotelsPage() {
    const dispatch: Dispatch = useDispatch();
    const statusizedHotel: IStatusizedHotel = useSelector((state: AppState)=> state.HotelReducer)
    useEffect(()=>{
    getHotels(dispatch);
    },[dispatch]);

    switch(statusizedHotel.status) {
        case Status.Success : return <div> Success</div>        
        // case Status.Success : return <div> Loading</div>
        case Status.Failure : return <div> Failure</div>    

    }
    return <div>Loading</div>
}