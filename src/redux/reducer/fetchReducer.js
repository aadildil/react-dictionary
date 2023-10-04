import { FETCH_DATA_REQUEST,FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS } from "../action/actionTypes.js";

let initialState={
    loading:false,
    data:[],
    error:null
}

const fetchReducer=(state=initialState,action)=>{
    

    switch(action.type)
    {
        case FETCH_DATA_REQUEST:
            return {
                ...state,loading:true,data:[],error:null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,loading:false,data:[],error:action.payload
            };

        case FETCH_DATA_SUCCESS:
        return {
            ...state,loading:false,error:null,data:action.payload
        };

        default: return state;
    }
}
export default fetchReducer;