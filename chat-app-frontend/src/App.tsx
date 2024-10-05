import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import MessageInput from "./components/MessageInput";
import UserAvatar from "./components/UserAvatar";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import OnlineUsers from "./components/OnlineUsers";
import './App.css'; // Ensure this file includes Tailwind directives

// Define the Message interface
interface Message {
  user: string;
  color: string;
  text: string;
  shape: string;
  avatarImage: string | null; // Optional avatar image
  timestamp: string; // You can add timestamps for messages
}

// Define the User interface to include avatarImage
interface User {
  name: string;
  color: string;
  shape: string;
  avatarImage: string | null; // Optional avatar image
}

const App: React.FC = () => {
  // State variables
  const [user, setUser] = useState<User>({ name: "", color: "#ff0000", shape: "😀", avatarImage: null }); // Red for user color
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Function to send a message
  const sendMessage = (text: string) => {
    const timestamp = new Date().toLocaleTimeString(); // Add timestamp to messages
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: user.name || "Anonymous",
        color: user.color,
        text,
        shape: user.shape,
        avatarImage: user.avatarImage,
        timestamp, // Include timestamp
      },
    ]);
    setIsTyping(false);
  };

  // Function to handle typing status
  const handleTyping = () => {
    setIsTyping(true);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Effect to apply the theme class to the root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div id="top" className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-red-500' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <AboutSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Chat Application */}
        <section id="chat" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Online Users Count */}
            <div className={`flex justify-start text-lg mb-6 ${theme === 'dark' ? 'text-red-400' : 'text-gray-700'}`}>
              <OnlineUsers />
            </div>

            {/* User Avatar Section */}
            <div className="flex justify-center mb-6">
              <UserAvatar user={user} setUser={setUser} />
            </div>

            {/* Chat Section */}
            <div className={`rounded-lg p-6 mb-6 h-[500px] overflow-y-auto shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-red-400' : 'bg-white text-gray-800'}`}>
              <Chat messages={messages} />
              {isTyping && (
                <p className={`${theme === 'dark' ? 'text-red-400' : 'text-gray-700'} mt-2`}>
                  Someone is typing...
                </p>
              )}
            </div>

            {/* Message Input Section */}
            <div>
              <MessageInput onSend={sendMessage} onTyping={handleTyping} theme={theme} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-gray-800 text-red-500' : 'bg-gray-100 text-gray-700'} py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Nachtraum. Created by Ailyn Diaz.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
