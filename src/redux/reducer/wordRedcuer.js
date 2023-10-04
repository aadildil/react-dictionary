import { ADD_WORD, REMOVE_WORD, CLEAR_WORDS } from "../action/actionTypes";




let initialState = [];

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      {
        // let newArr=state.map((item)=>item.data.word);
        // if(newArr.includes(action.payload.data.word))
        // return state;

        let newArr=state.filter((item)=>item.data.word!==action.payload.data.word);
        return [...newArr,action.payload]
       
        
       // return [...state, action.payload];
      }
    case REMOVE_WORD:
      {
        let newArr=state.filter((item)=>item.data.word!==action.payload.data.word);
        return newArr

      }
    case CLEAR_WORDS:
      return initialState;

    default:
      return state;
  }
};
export default wordReducer;