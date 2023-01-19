import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";
import MyInput from "components/MyInput";
import MyData from "components/MyData";
import { useParams } from "react-router-dom";
import Description from "components/Description";
import "css/Home.css";
import { Link } from "react-router-dom";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = ({ userObj }) => {
  const { id }= useParams();
  const [nweets, setNweets] = useState([]);
  // 다음 페이지 넘어가기
  const nextId= (parseInt(id) + 1).toString();
  const backId= (parseInt(id) - 1).toString();

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, [id]); //id가 바뀔 때마다 다시 불러줘 ~
  return (
    <div class="detail card">
      <div>
        {MyData
        .filter((data)=> data.id === id)
        .map((dat)=> <Description dat={dat}/>)}
      </div>
      <MyInput userObj={userObj} id={id}/>
      <div class="box-wrap">
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
            id={id}
          />
        ))}
      </div>
      <div class="page">
      <>
      {backId === "0" ? 
      null : 
      <Link to ={`/detail/${backId}`}>
        <FontAwesomeIcon icon={faAngleLeft} className="page-arrow"/>
      </Link>}
      </>
      <>
      {nextId === "10" ? 
      null : 
      <Link to ={`/detail/${nextId}`}>
        <FontAwesomeIcon icon={faAngleRight} className="page-arrow"/>
      </Link>}
      </>
      </div>
    </div>
  );
};
export default Home;