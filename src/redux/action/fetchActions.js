import { FETCH_DATA_REQUEST,FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS } from "./actionTypes.js";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { addWord } from "./wordActions.js";

export const  fetchDataRequest=()=>{

    return (
        {
            type:FETCH_DATA_REQUEST
        }
    )
}

export const fetchDataFailure=(error)=>{

    return (
        {
            type:FETCH_DATA_FAILURE,
            payload:error
        }
    )
}

export const fetchDataSuccess=(data)=>{
    
    return (
        {
            type:FETCH_DATA_SUCCESS,
            payload:{
                data:data,
                
            }
        }
    )
}


export const fetchData=(word)=>{

   return (dispatch)=>{
    dispatch(fetchDataRequest())
   setTimeout(()=>{
    axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {

      const id = uuidv4();
      let dataObj={
          data:res.data[0],
          id:id
      }

      dispatch(fetchDataSuccess(dataObj));
      dispatch(addWord(dataObj));
    })
  .catch(error=>dispatch(fetchDataFailure(error.message)))
   },1500)
   }
   
   
}
