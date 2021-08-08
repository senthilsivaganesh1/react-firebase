import { combineReducers, createStore } from "redux";
import { HotelReducer } from "./HotelReducer";
import { NamesReducer } from "./NamesReducer";

export const rootReducer = combineReducers({
    NamesReducer:NamesReducer,
    HotelReducer:HotelReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () =>{
    return createStore(rootReducer, {});
};



