export interface IHotel {
    name: string,
    featured_image: string,
    cuisines: string,
    id: string
}

export enum Status {
    NotStarted, 
    Loading,
    Success,
    Failure
}

export interface IStatusizedHotel {
    hotels: IHotel[];
    status:Status;
}

export interface IHotelAction {
    payload: IStatusizedHotel
    type: string;
}

export const HotelReducer = (_state: IStatusizedHotel, action:IHotelAction) => {
    switch (action.type) {
        case "getHotels": return action.payload;         
    }

    return { status:Status.NotStarted, hotels:[]}
}

