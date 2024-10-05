import React, { useEffect, useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";

const OnlineUsers: React.FC = () => {
  const [userCount, setUserCount] = useState(0);
  const connectionRef = useRef<signalR.HubConnection | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5286/chathub")
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connection;

    connection.on("UpdateUserCount", (count: number) => {
      setUserCount(count);
    });

    connection
      .start()
      .then(() => console.log("SignalR Connected."))
      .catch((err) => console.error("SignalR Connection Error: ", err));

    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="relative p-4 bg-gray-900 bg-opacity-80 border border-gray-700 rounded-lg shadow-lg text-center">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-300 tracking-wide">
        Online Users
      </h2>

      {/* User Count */}
      <p className="text-4xl font-bold text-gray-100 mt-2">
        {userCount}
      </p>

      {/* Status */}
      <div className="text-sm text-gray-400 mt-4">
        Connected to Nachtraum
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 bg-grid-cyberpunk opacity-10 pointer-events-none"></div>
    </div>
  );
};

export default OnlineUsers;
