import React, { useState } from "react";
import { dbService } from "fbase";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nweet = ({ nweetObj, isOwner, id}) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("정말로 지우시겠습니까?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="수정하기"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="확인" />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </>
      ) : (
        <>
          { (isOwner && nweetObj.where === id) && (
            <div class="box">
            <div>{nweetObj.text}</div>
            <div>
            <button onClick={onDeleteClick}><FontAwesomeIcon icon={faTrashCan} /></button>
            <button onClick={toggleEditing}><FontAwesomeIcon icon={faPenToSquare} /></button>
            </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;