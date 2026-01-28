import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Server,
  Globe,
  Home,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 900,
  once: true,
});

const points = [
  {
    id: "3.1",
    title: "مهد غنی فرهنگ شیعی",
    icon: <BookOpen className="w-7 h-7 text-[#008B82]" />,
    text: "قم به عنوان ام‌القرای جهان تشیع با بهره‌مندی از غنی‌ترین مبانی نظری و فکری و دسترسی آسان به طلاب خارجی، ظرفیت فرهنگی و مذهبی بی‌نظیری دارد.",
  },
  {
    id: "3.2",
    title: "دسترسی به نیروی انسانی متخصص",
    icon: <Users className="w-7 h-7 text-[#008B82]" />,
    text: "وجود دانشگاه‌ها و متخصصان حوزه‌های فناوری اطلاعات و هوش مصنوعی، قم را به یکی از قطب‌های علمی کشور تبدیل کرده است.",
  },
  {
    id: "3.3",
    title: "بلوغ سرمایه‌گذاری فناوری در قم",
    icon: <Award className="w-7 h-7 text-[#008B82]" />,
    text: "سرمایه‌گذاری‌های گسترده در مراکز فرهنگی و دینی مانند نور، اسرا و جامعه المصطفی، بستر مناسبی برای اقتصاد دیجیتال در قم ایجاد کرده است.",
  },
  {
    id: "3.4",
    title: "نزدیکی به تهران — فرصت نه تهدید",
    icon: <MapPin className="w-7 h-7 text-[#008B82]" />,
    text: "نزدیکی به تهران و هزینه‌های پایین‌تر باعث شده بسیاری از شرکت‌ها مانند باسلام و ایتا بخشی از فعالیت خود را به قم منتقل کنند.",
  },
  {
    id: "3.5",
    title: "زیرساخت قوی ارتباطی",
    icon: <Server className="w-7 h-7 text-[#008B82]" />,
    text: "توسعه فیبر نوری توسط شهرداری و شرکت‌های مخابراتی قم را از نظر زیرساخت ارتباطی در کشور ممتاز کرده است.",
  },
  {
    id: "3.6",
    title: "دسترسی بین‌المللی",
    icon: <Globe className="w-7 h-7 text-[#008B82]" />,
    text: "وجود مراکز بین‌المللی مانند جامعه‌المصطفی باعث شده قم دسترسی بی‌نظیری به شبکه جهانی طلاب خارجی داشته باشد.",
  },
  {
    id: "3.7",
    title: "ظرفیت بالای مدیریت شهری",
    icon: <Home className="w-7 h-7 text-[#008B82]" />,
    text: "قم با ساختار شهری متمرکز و جمعیت بالای شهری، بستری ایده‌آل برای اجرای پروژه‌های نوآوری شهری در سطح ملی است.",
  },
];

const founders = [
  {
    name: "میثم سلطانی",
    role: "مدیرعامل و عضو هیئت‌مدیره",
    img: "/images/unknown.jpg",
    bio: "کارشناس ارشد کارآفرینی و متخصص در توسعه زیست‌بوم نوآوری شهری با سابقه فعالیت در پروژه‌های هوشمندسازی شهرداری قم.",
  },
  {
    name: "دکتر محسن سلطانی",
    role: "رئیس هیئت‌مدیره",
    img: "/images/unknown.jpg",
    bio: "دکترای مدیریت فناوری اطلاعات و استاد دانشگاه، فعال در حوزه سیاست‌گذاری و طراحی نظام‌های نوآوری ملی.",
  },
  {
    name: "دکتر رضا احسن",
    role: "عضو هیئت‌مدیره",
    img: "/images/drahasan.jpg",
    bio: "پژوهشگر حوزه اقتصاد دیجیتال و توسعه شهری، با تمرکز بر ارتباط بین فناوری، فرهنگ و مدیریت شهری پایدار.",
  },
];

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" min-h-screen" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-l from-[#e5f9f7] to-[#ffffff]">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#008B82] mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          درباره کارخانه نوآوری شهرداری قم
        </motion.h1>
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          این صفحه تبیین‌کننده‌ی دلایل انتخاب قم به عنوان مرکز نوآوری شهری است و
          چشم‌انداز تیم مؤسس کارخانه نوآوری را معرفی می‌کند.
        </motion.p>
      </section>

      {/* Why Qom Section */}
      <section
        className="max-width bg-cover bg-center"
        style={{ backgroundImage: "url('/images/history-bg.webp')" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#008B82] text-center mb-10">
            چرا قم؟
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-[#f0fdfb] py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#008B82] text-center mb-12">
          تیم مؤسس / شورای هیئت‌مدیره
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {founders.map((person, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#008B82]/20"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-sm text-[#008B82] mb-2">{person.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#008B82] text-center mb-12">
          فضاهای کاری و جلسات کارخانه
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
          {/* تصویر اول */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/images/conference-room.webp"
              alt="اتاق جلسات"
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* تصویر دوم */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/images/cafeteria-space.webp"
              alt="فضای غذاخوری"
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/images/hallway.webp"
              alt="فضای کلی"
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/images/workspace.webp"
              alt="فضای کاری"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
