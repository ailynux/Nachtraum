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
    <div className="flex items-center gap-3 w-full">
      <input
        type="text"
        className={`flex-grow p-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-500 transition duration-300 ${
          theme === 'dark'
            ? 'bg-gray-800 text-white border border-gray-700 focus:ring-red-500'
            : 'bg-gray-100 text-gray-900 border border-gray-300 focus:ring-blue-400'
        }`}
        value={message}
        onChange={handleTyping}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
      />
      <button
        className={`px-5 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-4 ${
          theme === 'dark'
            ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
            : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400'
        }`}
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
