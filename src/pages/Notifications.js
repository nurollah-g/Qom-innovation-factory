import React, { useContext } from "react";
import { Bell, CheckCircle, Clock, XCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { NotificationsContext } from "../context/NotificationsContext";

function Notification() {
  const { notifications, setNotifications } = useContext(NotificationsContext);

  // علامت‌گذاری همه به عنوان خوانده‌شده
  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
  };

  // حذف اعلان تکی
  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        {/* عنوان و دکمه کنار هم */}
        <div className="flex flex-row flex-wrap items-center justify-between mb-6 gap-2 md:gap-3">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-700">
            <Bell className="w-6 h-6 text-teal-600" />
            اعلان‌ها
          </h1>

          <button
            onClick={markAllAsRead}
            className="flex-shrink-0 text-sm bg-teal-500 text-white px-3 py-2 rounded-lg hover:bg-teal-600 transition"
          >
            علامت‌گذاری همه به عنوان خوانده‌شده
          </button>
        </div>

        {/* لیست اعلان‌ها */}
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              📭 هیچ اعلانی وجود ندارد.
            </p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`flex flex-col md:flex-row md:items-center justify-between border rounded-xl p-4 shadow-sm transition ${
                  n.read ? "bg-gray-50" : "bg-teal-50"
                }`}
              >
                <div className="flex items-start gap-3 text-right flex-1">
                  {n.type === "success" && (
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  )}
                  {n.type === "info" && (
                    <Clock className="w-6 h-6 text-teal-500 mt-1" />
                  )}
                  {n.type === "warning" && (
                    <XCircle className="w-6 h-6 text-orange-500 mt-1" />
                  )}

                  <div>
                    <h3
                      className={`font-semibold ${
                        n.read ? "text-gray-600" : "text-teal-700"
                      }`}
                    >
                      {n.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{n.message}</p>
                    <span className="text-xs text-gray-400">{n.time}</span>
                  </div>
                </div>

                <button
                  onClick={() => removeNotification(n.id)}
                  className="text-gray-400 hover:text-red-500 transition mt-3 md:mt-0"
                  title="حذف اعلان"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const Notifications = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Notification />
      <Footer />
    </div>
  );
};

export default Notifications;
