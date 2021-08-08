

// component - ajax call--> data --> string[]--> dispatch string[](action obj) to reducer
export interface INamesState {
    names: string[];
}
export interface INamesAction {
    payload: INamesState;
    type: string;
}

export const NamesReducer = (state: string[] | null, action: INamesAction ): INamesState => {
    switch (action.type) {
        case "names":
        return {...state, names:action.payload.names }  
           
    }
    return {names:[]};
}