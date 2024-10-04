// components/UserAvatar.tsx

import React, { useCallback, useRef, memo, useState } from "react";

interface User {
  name: string;
  color: string;
  shape: string;
  avatarImage: string | null;
}

interface UserAvatarProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const shapeOptions = ['😀', '💻', '🎮', '🌟'] as const;

const UserAvatar: React.FC<UserAvatarProps> = memo(({ user, setUser }) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCustomAvatar, setIsCustomAvatar] = useState(false); // Track custom avatar mode

  // Update user's name
  const updateName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
    },
    [setUser]
  );

  // Update user's color
  const updateColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prevUser) => ({ ...prevUser, color: e.target.value }));
    },
    [setUser]
  );

  // Update user's shape/emoji
  const updateShape = useCallback(
    (shape: string) => {
      setIsCustomAvatar(false); // Disable custom avatar if shape is chosen
      setUser((prevUser) => ({ ...prevUser, shape, avatarImage: null }));
    },
    [setUser]
  );

  // Trigger the color picker
  const triggerColorPicker = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  // Handle avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file); // Create preview URL
      
      console.log('Selected File:', file);
      console.log('Generated Image URL:', imageUrl);
      
      setUser((prevUser) => ({
        ...prevUser,
        avatarImage: imageUrl,  // Ensure avatarImage is updated here
        shape: '',  // Clear shape when a custom avatar is uploaded
      }));
      setIsCustomAvatar(true); // Track that custom avatar is in use
    }
  };
  
  

  // Trigger the file upload
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center space-x-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
      {/* Name Input Section */}
      <div className="flex flex-col">
        <label htmlFor="user-name" className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Your Name
        </label>
        <input
          id="user-name"
          type="text"
          className="text-gray-900 px-4 py-3 rounded-lg w-64 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
          value={user.name}
          onChange={updateName}
          placeholder="Enter your name"
        />
      </div>

      {/* Custom Color Picker Section */}
      <div className="relative flex flex-col items-center">
        <label htmlFor="user-color" className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Pick Your Color
        </label>
        <button
          className="w-14 h-14 rounded-full border-4 border-gray-300 hover:border-blue-400 transition-transform hover:scale-110 focus:ring-2 focus:ring-blue-300"
          style={{ backgroundColor: user.color }}
          onClick={triggerColorPicker}
          aria-label="Pick a color"
        />
        <input
          id="user-color"
          type="color"
          ref={colorInputRef}
          value={user.color}
          onChange={updateColor}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Shape (Emoji) or Custom Avatar Selection */}
      <div className="flex flex-col items-center">
        <label className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Choose or Upload Avatar
        </label>
        <div className="flex space-x-6">
          {/* Emoji Shape Options */}
          {shapeOptions.map((shape) => (
            <button
              key={shape}
              onClick={() => updateShape(shape)}
              className={`w-14 h-14 text-3xl transition-transform duration-300 ease-in-out rounded-full cursor-pointer border-4 ${
                user.shape === shape
                  ? 'border-blue-500 shadow-blue-300 shadow-lg'
                  : 'border-gray-300 hover:border-blue-400'
              } hover:scale-110`}
            >
              {shape}
            </button>
          ))}

          {/* Custom Avatar Upload Button */}
          <button
            onClick={triggerFileInput}
            className={`w-14 h-14 text-2xl bg-gray-200 dark:bg-gray-700 rounded-full border-4 ${
              isCustomAvatar ? 'border-blue-500 shadow-blue-300 shadow-lg' : 'border-gray-300 hover:border-blue-400'
            } transition-transform hover:scale-110`}
            aria-label="Upload your avatar"
          >
            📁
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Live Avatar Preview */}
      <div className="flex flex-col items-center mt-6">
        <label className="text-lg font-bold text-gray-900 dark:text-white mb-2">Avatar Preview</label>
        <div className={`w-20 h-20 rounded-full border-4`} style={{ borderColor: user.color }}>
          {isCustomAvatar && user.avatarImage ? (
            <img
              src={user.avatarImage}
              alt="Custom Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="text-4xl flex justify-center items-center h-full" style={{ color: user.color }}>
              {user.shape}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default UserAvatar;
