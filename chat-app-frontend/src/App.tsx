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
  avatarImage: string | null; // New field to store avatar image URL or null
}

// Define the User interface to include avatarImage
interface User {
  name: string;
  color: string;
  shape: string;
  avatarImage: string | null; // New field to store avatar image URL or null
}

const App: React.FC = () => {
  // State variables
  const [user, setUser] = useState<User>({ name: "", color: "#007acc", shape: "😀", avatarImage: null }); // Add avatarImage here
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Function to send a message
  const sendMessage = (text: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: user.name || "Anonymous",
        color: user.color,
        text,
        shape: user.shape,
        avatarImage: user.avatarImage, // Include avatarImage in the message
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
    // Apply or remove the 'dark' class on the root element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div id="top" className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
          <div className="max-w-4xl mx-auto px-4">
            {/* Online Users Count */}
            <div className="flex justify-start text-lg mb-6">
              <OnlineUsers />
            </div>

            {/* User Avatar Section */}
            <div className="flex justify-center mb-6">
              <UserAvatar user={user} setUser={setUser} /> {/* Pass updated user */}
            </div>

            {/* Chat Section */}
            <div className="rounded-lg p-6 mb-6 h-[500px] overflow-y-auto shadow-lg bg-white dark:bg-gray-700">
              <Chat messages={messages} />
              {isTyping && (
                <p className="text-gray-600 dark:text-gray-400 mt-2">
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
      <footer className="bg-white dark:bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Nachtraum. Created by Ailyn Diaz.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
