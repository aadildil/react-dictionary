import { ADD_WORD, REMOVE_WORD, CLEAR_WORDS } from "./actionTypes";

export const addWord = (data) => {
  return {
    type: ADD_WORD,
    payload: data,
  };
};
export const removeWord = (data) => {
  return {
    type: REMOVE_WORD,
    payload: data,
  };
};

export const clearWords = () => {
  return {
    type: CLEAR_WORDS,
  };
};
