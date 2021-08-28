import { Dispatch } from "react";
import { IHotelAction, Status } from "./HotelReducer";

export const getNameApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(response.ok){
        const json = await response.json();
        console.log("success")
        return json[0].name;
    }
    console.log("error")
    return "error";
}

export const getHotels = async (dispatch: Dispatch<IHotelAction>): Promise<void> => {
    const response = await fetch("https://postgress-geeks.herokuapp.com/graphql?query=%7B%0A%20%20hotelSelect%7B%0A%20%20%20%20name%2C%0A%20%20%20%20featured_image%2C%0A%20%20%20%20cuisines%2C%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A");
    if(response.ok) {
        const json = await response.json();
        const statusizedHotel = {
            status: Status.Success,
            hotels: json.data.hotelSelect
        };
        dispatch({type:"getHotels", payload: statusizedHotel});
    } else {
        dispatch({
            type:"getHotels",
            payload: { status:Status.Failure, hotels:[]  },
        });
    }
};