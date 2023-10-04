import React, { useEffect, useState } from "react";
import { addWord } from "../redux/action/wordActions.js";
import { fetchData } from "../redux/action/fetchActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {





  const { loading, data, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const {word}=useParams();
 
 useEffect(()=>{
  if(word)
  dispatch(fetchData(word))
 },[word])


  function renderNoun(wordData) {
    let nouns = [];

    if (wordData.meanings) {
      nouns = wordData.meanings.filter(
        (meaning) => meaning.partOfSpeech == "noun"
      );
    }
    if (nouns.length > 0) {
      return (
        <div className="paras">
          <h3 className="title" >Noun</h3>
          {nouns[0].definitions.map((item,index) => (
            <p key={index}>{item.definition}</p>
          ))}
        </div>
      );
    }
  }

  function renderVerb(wordData) {
    let verbs = [];

    if (wordData.meanings) {
      verbs = wordData.meanings.filter(
        (meaning) => meaning.partOfSpeech == "verb"
      );
    }
    if (verbs.length > 0) {
      return (
        <div className="paras">
          <h3 className="title" >Verb</h3>
          {verbs[0].definitions.map((item,index) => (
            <p key={index}>{item.definition}</p>
          ))}
        </div>
      );
    }
  }









  return (
    <div>
       
      <div className="search-container">
        <input
          type="text"
          placeholder="search word"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(fetchData(text));
            setText("");
          }}
        >
          search
        </button>
      </div>

      {loading&&<span className="loader"></span>}
      {error && <p>Error: {error}</p>}
      {data.data ? (
        <div className="main">
          <h1>{data.data.data.word}</h1>
          {data.data.data.phonetics && (
            <div>
              {data.data.data.phonetics.map((item, index) => (
                <div key={index}>
                  <p>{item.text}</p>
                  {item.audio ? <audio src={item.audio} controls /> : null}
                </div>
              ))}
            </div>
          )}

          {renderNoun(data.data.data)}
          {renderVerb(data.data.data)}
        </div>
      ) : null}
     
    </div>
  );
};
export default Search;
