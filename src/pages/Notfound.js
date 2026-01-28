import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-teal-500 to-cyan-400 text-white px-4 relative overflow-hidden">
      {/* شماره 404 */}
      <motion.h1
        className="text-[10rem] font-extrabold drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>

      {/* متن */}
      <motion.p
        className="text-2xl md:text-3xl font-semibold mt-4 text-center drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        صفحه‌ای که دنبال آن هستید پیدا نشد!
      </motion.p>

      {/* دکمه بازگشت */}
      <motion.button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        بازگشت به صفحه اصلی
      </motion.button>

      {/* اشکال شناور برای حس نوآوری */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-teal-400 rounded-full opacity-30 animate-pulse mix-blend-multiply -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full opacity-20 animate-pulse mix-blend-multiply -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}
