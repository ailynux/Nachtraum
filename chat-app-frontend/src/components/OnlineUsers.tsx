// src/components/OnlineUsers.tsx

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

    connectionRef.current = connection; // Store the connection in the ref

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
    <div className="text-gray-900 dark:text-gray-100">
      Online Users: {userCount}
    </div>
  );
};

export default OnlineUsers;
