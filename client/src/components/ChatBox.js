// Path: client/src/components/ChatBox.jsx

import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatBox = ({ username }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const messageRef = useRef(null);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const msgData = {
        user: username,
        message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="chatbox">
      <div className="chat-header">
        <div className="avatar">{username.split(" ")[1]}</div>
        {username}
      </div>
      <div className="chat-messages" ref={messageRef}>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`msg ${msg.user === username ? "self" : "other"}`}
          >
            <span className="user">{msg.user}</span>
            {msg.message}
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
