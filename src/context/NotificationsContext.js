// src/context/NotificationsContext.js
import { createContext, useState } from "react";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 2,
      title: "رویداد جدید در کارخانه نوآوری",
      message: "همایش نوآوری شهری در تاریخ ۲۵ مهر برگزار می‌شود.",
      time: "۲ ساعت پیش",
      read: false,
      type: "info",
    },
  ]);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};
