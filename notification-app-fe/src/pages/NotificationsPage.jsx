import { useState } from "react";
import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { NotificationFilter } from "../components/NotificationFilter";
import { useNotifications } from "../hooks/useNotifications";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [title, setTitle] = useState('');

  const [ message, setMessage ] = useState('');

  const unreadCount = 2;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim || !message.trim()){
      alert('Please enter all fields');
      return;
    }
    const notification = {
      id: Date.now(),
      title,
      message,
      time: new Date().toLocalString(),
    };
    setNotifications([notification, ...notifications]);
    setTitle('');
    setMessage(''); 
  };

  return (
    <div className="Notification-container">
      <h1>Notificatio Management System</h1>
      <form onSubmit={handleSubmit} className="notification-form">
        <input
        type="text"
        placeholder="Notification Title"
        value={title}
        onCharge={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          Add Notification
        </button>
      </form>
      <div className="notification-list">
        {
          notifications.length === 0 ?(
            <p>No notifications available. </p>
          ) : (
            notifications.map((item) => (
              <div key={item.id} className="notificatio-card">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
              <small>{item.time}</small>
              </div>
            ))
          )}
      </div>

    </div>
  );
}