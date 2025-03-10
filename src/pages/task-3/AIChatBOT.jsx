import React, { useState } from "react";
import { sendMessageToAI } from "../../utils/api";
import BackButton from "../../components/backButton";
import { useDispatch, useSelector } from "react-redux";
import { addAIMessage, addUserMessage } from "../../redux/chatSlice";

const AIChatBOT = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    dispatch(addUserMessage(input));
    setInput("");

    const aiResponse = await sendMessageToAI(input);
    dispatch(addAIMessage(aiResponse));
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="mb-3">
        <BackButton />
      </div>

      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h3 className="card-title text-center">AI Chat BOT</h3>
          <div
            className="chat-box border bg-light p-3"
            style={{ height: "400px", overflowY: "auto" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 ${
                  msg.sender === "user" ? "bg-primary text-white" : "bg-white"
                } rounded w-75 ${msg.sender === "user" ? "ms-auto" : ""}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control rounded-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              className="btn px-5 ms-2 rounded-1"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatBOT;
