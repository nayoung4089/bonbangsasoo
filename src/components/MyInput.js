import { dbService } from "fbase";
import React, { useState } from "react";

const MyInput = ({userObj, id}) => {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
          text: nweet,
          where: id,
          createdAt: Date.now(),
          creatorId: userObj.uid,
        });
        setNweet("");
      };
      const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNweet(value);
      };
    return(
        <div class="search-wrap">
        <form onSubmit={onSubmit} className="search-wrap-form">
            <input
              value={nweet}
              onChange={onChange}
              type="text"
              placeholder="내용 추가하기"
              maxLength={120}
            />
            <input type="submit" value="저장" />
        </form>
        </div>
    )
};
export default MyInput;