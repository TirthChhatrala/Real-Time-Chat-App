// Path: client/src/App.jsx

import React from "react";
import ChatBox from "./components/ChatBox";

export default function App() {
  return (
    <div className="main-container">
      <ChatBox username="User 1" socketRoom="user1" />
      <ChatBox username="User 2" socketRoom="user2" />
    </div>
  );
}
