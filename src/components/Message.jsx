import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import moment from "moment";

const Message = ({ messageData }) => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageData]);

  const msgOwner =
    currentUser.uid === messageData.senderId ? currentUser : data.user;

  return (
    <div
      ref={ref}
      className={`message ${msgOwner === currentUser && "ownMessage"}`}
    >
      <div className="messageContent">
        {messageData.text && <p>{messageData.text}</p>}
        {messageData.imgURL && <img src={messageData.imgURL} alt="" />}
      </div>
      <div className="messageInfo">
        {/* <img src={msgOwner.photoURL} alt="" /> */}
        <span>{moment(messageData.date.toDate()).fromNow()}</span>
      </div>
    </div>
  );
};

export default Message;
