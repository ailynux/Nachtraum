// components/MessageBubble.tsx

import React from "react";

interface MessageBubbleProps {
  user: string;
  text: string;
  color: string;
  shape: string;
  avatarImage?: string | null; // Optional avatarImage prop
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ user, text, color, shape, avatarImage }) => {
  console.log('avatarImage in MessageBubble:', avatarImage); // Should now log the correct value

  return (
    <div className="flex items-start mb-5 p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-gray-100 dark:bg-gray-800">
      {/* Avatar Section */}
      <div className="mr-4">
        {avatarImage ? (
          <img
            src={avatarImage}
            alt={`${user}'s avatar`}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
            onError={(e) => {
              console.error('Failed to load avatar image:', e);
              (e.target as HTMLImageElement).src = ''; // Fallback if image fails to load
            }}
          />
        ) : (
          <div className="text-4xl opacity-85 hover:opacity-100 hover:scale-110 transition-transform">
            {shape}
          </div>
        )}
      </div>

      {/* Message Content */}
      <div className="flex flex-col">
        <span className="font-bold text-lg" style={{ color }}>
          {user}
        </span>
        <span className="mt-2 text-gray-900 dark:text-gray-100">
          {text}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
