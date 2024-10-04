// src/components/MessageInput.tsx

import React, { useState } from "react";

interface MessageInputProps {
  onSend: (message: string) => void;
  onTyping: () => void;
  theme: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend, onTyping, theme }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    onTyping();
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        type="text"
        className={`flex-grow p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
          theme === 'dark'
            ? 'bg-gray-800 text-white border border-gray-700'
            : 'bg-gray-100 text-gray-900 border border-gray-300'
        }`}
        value={message}
        onChange={handleTyping}
        onKeyPress={handleKeyPress}
        placeholder="Type your message here..."
      />
      <button
        className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
