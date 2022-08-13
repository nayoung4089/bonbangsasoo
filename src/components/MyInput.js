import { dbService } from "fbase";
import React, { useState } from "react";

const MyInput = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
          text: nweet,
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
        <>
        <form onSubmit={onSubmit}>
            <input
              value={nweet}
              onChange={onChange}
              type="text"
              placeholder="What's on your mind?"
              maxLength={120}
            />
            <input type="submit" value="Nweet" />
        </form>
        </>
    )
};
export default MyInput;