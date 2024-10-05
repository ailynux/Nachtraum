import React from "react";

interface MessageBubbleProps {
  user: string;
  text: string;
  color: string;
  shape: string;
  avatarImage?: string | null;
  timestamp: string; // Timestamp for the message
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  user,
  text,
  color,
  shape,
  avatarImage,
  timestamp,
}) => {
  return (
    <div className="flex items-start mb-5 p-5 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Avatar Section */}
      <div className="mr-4">
        {avatarImage ? (
          <img
            src={avatarImage}
            alt={`${user}'s avatar`}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
            onError={(e) => {
              console.error('Failed to load avatar image:', e);
              (e.target as HTMLImageElement).src = ''; // Fallback if image fails to load
            }}
          />
        ) : (
          <div className="text-4xl opacity-85 hover:opacity-100 hover:scale-110 transition-transform text-gray-600 dark:text-gray-400">
            {shape}
          </div>
        )}
      </div>

      {/* Message Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-lg" style={{ color }}>
            {user}
          </span>
          {/* Timestamp moved to the right */}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-6">
            {timestamp}
          </span>
        </div>
        <span className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed">
          {text}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
