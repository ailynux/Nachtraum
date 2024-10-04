// components/Chat.tsx

import React from "react";
import MessageBubble from "./MessageBubble";

interface Message {
  user: string;
  color: string;
  text: string;
  shape: string;
  avatarImage: string | null;
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div>
      {messages.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No messages yet. Start chatting!
        </p>
      ) : (
        messages.map((message, index) => {
          console.log('message.avatarImage in Chat:', message.avatarImage); // Debugging
          return (
            <MessageBubble
              key={index}
              user={message.user}
              text={message.text}
              color={message.color}
              shape={message.shape}
              avatarImage={message.avatarImage}
            />
          );
        })
      )}
    </div>
  );
};

export default Chat;
