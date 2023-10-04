import React, { useEffect, useState } from "react";
import {
  addWord,
  removeWord,
  clearWords,
} from "../redux/action/wordActions.js";
import { fetchData } from "../redux/action/fetchActions.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const History = () => {
  const wordData = useSelector((state) => state.words);
  const dispatch = useDispatch();
  

  return (
    <div className="history-container">
      <div className="word-list">
      {wordData.map(
        (item, index) => item.data && <div className="word-item" key={item.data.word}>
           <Link
       to={`/search/${item.data.word}`}>
      
        <p>{item.data.word}</p>
      </Link>
      <button onClick={()=>{
        dispatch(removeWord(item))
      }} >remove</button>
        </div>
      )}
      </div>
      <button onClick={()=>dispatch(clearWords())} >clear search history</button>
    </div>
  );
};
export default History;
