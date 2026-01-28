import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import axios from "axios";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import {
  DollarSign,
  GraduationCap,
  Link as LinkIcon,
  Wrench,
  Handshake,
} from "lucide-react";

const services = [
  { icon: <Wrench />, title: "حل مسائل و مشکلات مدیریت شهری" },
  { icon: <LinkIcon />, title: "شبکه سازی بین کارآفرینان و سرمایه گذاران" },
  { icon: <DollarSign />, title: "جذب سرمایه استارتاپ های مدیریت شهری" },
  { icon: <GraduationCap />, title: "خدمات آموزشی" },
  { icon: <Handshake />, title: "خدمات مشاوره (منتورشیپ)" },
];

AOS.init({
  duration: 1000,
  once: true,
});

function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center py-[70px] justify-center w-full px-4">
        <motion.div
          className="flex flex-col md:flex-row-reverse rounded-xl shadow-lg overflow-hidden max-w-5xl w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - Images */}
          <motion.div
            className="flex flex-col md:flex-row w-full md:w-1/2 h-64 md:h-80 bg-gray-100"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden w-full md:w-1/3 h-32 md:h-auto">
              <img
                src="./images/conference-room.webp"
                alt="Keyhan Innovation Factory Left"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden w-full md:w-2/3 h-32 md:h-auto">
              <img
                src="/images/cafeteria-space.webp"
                alt="Keyhan Innovation Factory Right"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Text + CTA Buttons */}
          <motion.div
            className="w-full md:w-1/2 p-6 md:p-8 bg-[#e5e5e5] flex flex-col justify-center"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="p-2 md:p-4 text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[#008B82] mb-4">
                کارخانه نوآوری شهرداری قم
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base mb-6">
                مرکز نوآوری یک نهاد یا مکان است که به منظور حمایت از فرایندهای
                نوآوری و کارآفرینی طراحی شده است. این مراکز معمولاً به ارائه
                زیرساخت‌ها، منابع و شبکه‌هایی برای تسهیل همکاری میان کارآفرینان،
                محققان و صنایع مختلف می‌پردازند.
              </p>

              <div className="flex flex-col md:flex-row gap-3 justify-start items-end">
                <Link
                  to="/Notifications" // مسیر مقصد
                  className="bg-[#008B82] text-white px-6 py-2 rounded-lg hover:bg-[#00746d] transition shadow inline-block text-center"
                >
                  دیدن رویدادها
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const companies = [
  {
    name: "امین",
    category: "اینترنت اشیا",
    logo: "/thumbnails/amin.png",
    website: "https://www.aminidc.com",
  },
  {
    name: "رمزارز نیوز",
    category: "ارز دیجیتال",
    logo: "/thumbnails/ramz.png",
    website: "https://ramzarz.news",
  },
  {
    name: "سلامت کده طاها",
    category: "بهداشت",
    logo: "/thumbnails/taha.png",
    website: "https://salamatkadetaha.com",
  },
  {
    name: "آکادمی پیروز",
    category: "سرمایه‌گذاری",
    logo: "/thumbnails/pirouz.png",
    website: "https://pirooziacademy.com",
  },
  {
    name: "مهین",
    category: "فناوری اطلاعات",
    logo: "/thumbnails/mehin.png",
    website: "https://mohaymen.ir",
  },
  {
    name: "ققنوس",
    category: "طراحی سایت",
    logo: "/thumbnails/ghoghnoos.png",
    website: "https://phoenixads.ir",
  },
  {
    name: "صدران",
    category: "شتاب دهنده",
    logo: "/thumbnails/sadra.png",
    website: "https://www.sadrun.ir",
  },
  {
    name: "لیارا",
    category: "اینترنت اشیا",
    logo: "/thumbnails/liara.png",
    website: "https://liara.ir",
  },
  {
    name: "ایتا",
    category: "شبکه اجتماعی",
    logo: "/thumbnails/eitalogo.png",
    website: "https://eitaa.com",
  },
];

function CompanyGrid() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-teal-600 text-center mb-10 title text-[#008B82]">
        شرکت و استارت‌آپ‌های شهر قم
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 object-contain rounded"
            />
            <div className="text-right flex-1">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 bg-gray-200">
      <h2 className="text-center text-xl md:text-2xl font-bold text-teal-600 mb-10 title text-[#008B82]">
        خدمات کارخانه نوآوری
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex  justify-center items-center bg-white rounded gap-2 mb-1 py-8 shadow p-6 text-center hover:shadow-lg transition "
          >
            <div className="text-[#008B82] text ">{s.icon}</div>
            <p className=" font-medium text">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const topics = [
  {
    title: "اقتصاد، فرهنگ و جمعیت قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/factory.png",
    summary: "",
    fullText:
      "صنایع کوچک و متوسط در شهر قم به تولید مصالح ساختمانی، غذا و دیگر محصولات پرداخته و نقش مهمی در اقتصاد محلی ایفا می‌کنند. این صنایع در تأمین نیازهای اساسی بازار داخلی و همچنین صادرات به سایر نقاط کشور و حتی کشورهای همسایه موثر هستند. قم به عنوان یکی از مراکز مهم تجاری و صنعتی در مرکز ایران شناخته می‌شود. این شهر به عنوان مرکز حوزه‌های علمیه و محل تجمع علمای بزرگ دینی شناخته می‌شود و هر ساله هزاران طلبه  این شهر می‌آیند.",
  },
  {
    title: "رشد جمعیتی و توسعه شهری",
    icon: "https://img.icons8.com/ios-filled/50/000000/city-buildings.png",
    summary: "",
    fullText:
      "قم با سرعت زیادی در حال رشد جمعیتی است. طبق آمارها، جمعیت این شهر در چند دهه اخیر به طور چشمگیری افزایش یافته و پیش‌بینی می‌شود که در آینده نزدیک به یکی از کلان‌شهرهای مهم ایران تبدیل شود. این رشد جمعیتی باعث شده که قم در زمینه‌های مختلف شهری از جمله حمل‌ونقل، بهداشت، آموزش و زیرساخت‌ها شاهد توسعه و پیشرفت‌های قابل توجهی باشد و با توجه به روند رشد سریع، انتظار می‌رود که در آینده به یکی از مراکز پرجمعیت و مهم کشور تبدیل شود.",
  },
  {
    title: "صنعت و اقتصاد دیجیتال قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/laptop.png",
    summary: "",
    fullText:
      "قم در سال‌های اخیر به یکی از مراکز مهم برای استارتاپ‌ها و کسب‌وکارهای نوآور در ایران تبدیل شده است. به‌ویژه در زمینه‌های فناوری اطلاعات، نرم‌افزار و کسب‌وکارهای آنلاین، قم پتانسیل بالایی دارد. بسیاری از شرکت‌های نوپا در این شهر در حال رشد هستند و در حال حاضر زیرساخت‌های مناسبی برای استارتاپ‌ها فراهم شده است. این شهر با حمایت از نوآوری و فناوری، به یکی از مقاصد جذاب برای کارآفرینان و سرمایه‌گذاران تبدیل شده است.",
  },
  {
    title: "جاذبه‌های گردشگری قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/mosque.png",
    summary: "",
    fullText:
      "قم، به عنوان یک مقصد مذهبی و فرهنگی، جاذبه‌های فراوانی برای گردشگران دارد. حرم حضرت معصومه (ع) که یکی از زیارتگاه‌های مهم شیعیان است، هر ساله میزبان میلیون‌ها زائر از داخل و خارج از ایران است. همچنین، بازارهای سنتی، مساجد تاریخی و موزه‌ها از دیگر جاذبه‌های فرهنگی قم به شمار می‌آیند. علاوه بر جاذبه‌های مذهبی، قم دارای مناطق طبیعی زیبایی مانند دریاچه نمک و کوه‌های اطراف است که به گردشگران فرصتی برای لذت بردن از طبیعت فراهم می‌آورد.",
  },
  {
    title: "اقتصاد، فرهنگ و جمعیت قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/factory.png",
    summary: "",
    fullText:
      "صنایع کوچک و متوسط در شهر قم به تولید مصالح ساختمانی، غذا و دیگر محصولات پرداخته و نقش مهمی در اقتصاد محلی ایفا می‌کنند. این صنایع در تأمین نیازهای اساسی بازار داخلی و همچنین صادرات به سایر نقاط کشور و حتی کشورهای همسایه موثر هستند. قم به عنوان یکی از مراکز مهم تجاری و صنعتی در مرکز ایران شناخته می‌شود. این شهر به عنوان مرکز حوزه‌های علمیه و محل تجمع علمای بزرگ دینی شناخته می‌شود و هر ساله هزاران طلبه  این شهر می‌آیند.",
  },
  {
    title: "رشد جمعیتی و توسعه شهری",
    icon: "https://img.icons8.com/ios-filled/50/000000/city-buildings.png",
    summary: "",
    fullText:
      "قم با سرعت زیادی در حال رشد جمعیتی است. طبق آمارها، جمعیت این شهر در چند دهه اخیر به طور چشمگیری افزایش یافته و پیش‌بینی می‌شود که در آینده نزدیک به یکی از کلان‌شهرهای مهم ایران تبدیل شود. این رشد جمعیتی باعث شده که قم در زمینه‌های مختلف شهری از جمله حمل‌ونقل، بهداشت، آموزش و زیرساخت‌ها شاهد توسعه و پیشرفت‌های قابل توجهی باشد و با توجه به روند رشد سریع، انتظار می‌رود که در آینده به یکی از مراکز پرجمعیت و مهم کشور تبدیل شود.",
  },
  {
    title: "صنعت و اقتصاد دیجیتال قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/laptop.png",
    summary: "",
    fullText:
      "قم در سال‌های اخیر به یکی از مراکز مهم برای استارتاپ‌ها و کسب‌وکارهای نوآور در ایران تبدیل شده است. به‌ویژه در زمینه‌های فناوری اطلاعات، نرم‌افزار و کسب‌وکارهای آنلاین، قم پتانسیل بالایی دارد. بسیاری از شرکت‌های نوپا در این شهر در حال رشد هستند و در حال حاضر زیرساخت‌های مناسبی برای استارتاپ‌ها فراهم شده است. این شهر با حمایت از نوآوری و فناوری، به یکی از مقاصد جذاب برای کارآفرینان و سرمایه‌گذاران تبدیل شده است.",
  },
  {
    title: "جاذبه‌های گردشگری قم",
    icon: "https://img.icons8.com/ios-filled/50/000000/mosque.png",
    summary: "",
    fullText:
      "قم، به عنوان یک مقصد مذهبی و فرهنگی، جاذبه‌های فراوانی برای گردشگران دارد. حرم حضرت معصومه (ع) که یکی از زیارتگاه‌های مهم شیعیان است، هر ساله میزبان میلیون‌ها زائر از داخل و خارج از ایران است. همچنین، بازارهای سنتی، مساجد تاریخی و موزه‌ها از دیگر جاذبه‌های فرهنگی قم به شمار می‌آیند. علاوه بر جاذبه‌های مذهبی، قم دارای مناطق طبیعی زیبایی مانند دریاچه نمک و کوه‌های اطراف است که به گردشگران فرصتی برای لذت بردن از طبیعت فراهم می‌آورد.",
  },
];

function InnovationCards() {
  const colors = [
    "bg-[#E3F2FD] ",
    "bg-[#FFF3E0]",
    "bg-[#E8F5E9] ",
    "bg-[#FCE4EC] ",
    "bg-[#E3F2FD] ",
    "bg-[#FFF3E0]",
    "bg-[#E8F5E9] ",
    "bg-[#FCE4EC] ",
  ];

  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const totalBullets = 4; // تعداد بولت‌ها
    const realIndex = swiper.realIndex % totalBullets;

    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach((b, i) =>
      b.classList.toggle("swiper-pagination-bullet-active", i === realIndex)
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      <header className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-teal-600 mb-10">
          ظرفیت‌های قم برای نوآوری و استارتاپ‌ها
        </h2>
      </header>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            if (index < 4) return `<span class="${className}"></span>`;
            return "";
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        centeredSlides={true}
        loop={true}
        loopedSlides={colors.length}
        watchSlidesProgress={true}
        className="innovation-swiper min-h-[420px]"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10, // کمتر از قبل برای نزدیک شدن کارت‌ها
          },
        }}
      >
        {topics.map((topic, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`card-item rounded-2xl shadow-md border p-6 transition-all duration-300 ${
                  colors[index]
                } ${isActive ? "scale-100 z-10" : "scale-90 z-0"} `}
                style={{
                  filter: isActive ? "none" : "blur(1.5px)", // کارت وسط واضح
                  transition: "all 0.3s ease",
                  marginLeft: isActive ? "0" : "-20px", // کمی پشت کارت وسط
                  marginRight: isActive ? "0" : "-20px",
                }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <img src={topic.icon} alt="icon" className="w-12 h-12 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-gray-800 text-sm mt-3 leading-relaxed">
                  {topic.fullText}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "سلام! چطور می‌تونم کمکت کنم؟" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = React.useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        model: "openai/gpt-4o-mini",
        messages: newMessages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      });

      const reply = res.data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(
        "Server error:",
        err.response ? err.response.data : err.message
      );
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "خطا در ارتباط با سرور." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 max-h-[400px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <span>دستیار هوش مصنوعی</span>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-800 self-end"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm p-2 rounded-lg bg-gray-200 text-gray-600">
                در حال نوشتن...
              </div>
            )}
            <div ref={messagesEndRef} /> {/* 👈 برای اسکرول خودکار */}
          </div>

          <div className="p-2 border-t border-gray-200 flex">
            <input
              type="text"
              placeholder="پیام خود را بنویسید..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              ارسال
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompanyGrid />
      <Services />
      <InnovationCards />
      <AIChatAssistant />
      <Footer />
    </div>
  );
};

export default Home;
