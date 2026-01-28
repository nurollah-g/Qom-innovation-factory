import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";

import Footer from "../components/Footer";
import {
  Handshake,
  DollarSign,
  GraduationCap,
  Wrench,
  Link,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
});

const services = [
  {
    icon: <Handshake className="text-[#008B82]" size={42} />,
    title: "خدمات مشاوره (منتورشیپ)",
    desc: "ارائه مشاوره در حوزه‌های فنی، کسب‌وکار، مالی، حقوقی، جذب سرمایه و بازاریابی برای رشد تیم‌ها و شرکت‌های نوپا.",
    terms:
      "ارائه خدمات به اعضای مرکز و تیم‌های مستقر در کارخانه. هزینه‌ها مطابق قرارداد تعیین می‌شود.",
  },
  {
    icon: <DollarSign className="text-[#008B82]" size={42} />,
    title: "جذب سرمایه",
    desc: "تسهیل ارتباط بین تیم‌های نوآور و سرمایه‌گذاران خطرپذیر، شرکت‌های طرف قرارداد شهرداری و صندوق‌های حمایتی.",
    terms:
      "فرآیند ارزیابی و پذیرش بر اساس طرح کسب‌وکار انجام می‌شود. تعرفه مطابق قرارداد.",
  },
  {
    icon: <GraduationCap className="text-[#008B82]" size={42} />,
    title: "خدمات آموزشی",
    desc: "برگزاری کارگاه‌ها، دوره‌ها و بوت‌کمپ‌های تخصصی با هدف توسعه مهارت‌های کارآفرینی، مدیریتی و فناورانه.",
    terms:
      "شرکت در رویدادها برای عموم آزاد است. هزینه‌ها بسته به نوع برنامه متغیر است.",
  },
  {
    icon: <Wrench className="text-[#008B82]" size={42} />,
    title: "حل مسائل مدیریت شهری",
    desc: "ایجاد ارتباط بین ایده‌پردازان و سازمان‌های شهرداری برای ارائه راهکارهای نوآورانه جهت حل چالش‌های شهری.",
    terms:
      "پذیرش طرح‌ها از طریق سامانه مرکز انجام می‌شود. هزینه بر اساس نوع پروژه تعیین می‌گردد.",
  },
  {
    icon: <Link className="text-[#008B82]" size={42} />,
    title: "شبکه‌سازی و همکاری‌های مشترک",
    desc: "برگزاری نشست‌ها و رویدادها برای ایجاد ارتباط میان کارآفرینان، شرکت‌ها، پژوهشگران و سرمایه‌گذاران.",
    terms:
      "شرکت در برنامه‌های شبکه‌سازی برای اعضای مرکز رایگان است. سایرین با هماهنگی قبلی.",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        className="bg-gradient-to-l from-gray-100 to-white py-20 px-6 text-right"
        dir="rtl"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-[#008B82] mb-6">
            خدمات مرکز نوآوری شهرداری قم
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            مرکز نوآوری شهرداری قم با هدف تسهیل مسیر رشد و شکوفایی ایده‌ها،
            مجموعه‌ای از خدمات تخصصی را در اختیار تیم‌ها، شرکت‌ها و پژوهشگران
            قرار می‌دهد. در ادامه، می‌توانید جزئیات هر خدمت و شرایط استفاده از
            آن را مشاهده کنید.
          </p>
        </motion.div>
      </section>

      {/* ✅ Services Section */}
      <section className="bg-gray-100 py-16">
        <div
          className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          dir="rtl"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* آیکون و عنوان */}
              <div className="flex flex-col items-center text-center mb-4">
                {service.icon}
                <h3 className="text-lg font-bold text-[#008B82] mt-3">
                  {service.title}
                </h3>
              </div>

              {/* توضیح */}
              <p className="text-gray-700 text-sm text-justify leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* شرایط استفاده */}
              <div className="bg-[#f1fdfa] border-r-4 border-[#008B82] p-3 rounded-md">
                <h4 className="text-sm font-semibold text-[#008B82] mb-1">
                  شرایط استفاده / هزینه:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.terms}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
