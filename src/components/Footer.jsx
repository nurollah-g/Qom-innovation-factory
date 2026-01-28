// components/Footer.jsx
import React from "react";

import { Instagram, Linkedin, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12  border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10 text-center md:text-right">
        {/* اطلاعات بیشتر از ما */}
        <div className="space-y-4">
          <h4 className="font-bold mb-3 title text-xl">اطلاعات بیشتر از ما</h4>
          <span className="text text-sm text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
            ما باور داریم که نوآوری فقط در خلأ اتفاق نمی‌افتد؛ بلکه در کنار
            آدم‌هایی شکل می‌گیرد که دغدغه دارند، تجربه می‌آورند و رؤیاهایشان را
            با دیگران شریک می‌شوند...
          </span>
        </div>

        {/* درباره ما */}
        <div className="space-y-4">
          <h4 className="font-bold mb-3 title text-xl">درباره ما</h4>
          <ul className="space-y-2 text-gray-600 text text-base">
            <li>درباره</li>
            <li>خدمات</li>
            <li>حریم خصوصی</li>
          </ul>
        </div>

        {/* همراه ما باشید */}
        <div className="space-y-4">
          <h4 className="font-bold mb-3 title text-lg">همراه ما باشید!</h4>
          <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-700 hover:text-pink-500" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a href="#" aria-label="Telegram">
              <Send className="w-6 h-6 text-gray-700 hover:text-sky-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* نقشه */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="w-full max-w-md mx-auto md:mx-0 shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 text-right">
              <h3 className="text-sm font-semibold text-gray-700 text">
                موقعیت مکانی ما در قم
              </h3>
            </div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=50.85%2C34.62%2C50.90%2C34.66&layer=mapnik&marker=34.6416%2C50.8755"
              className="w-full h-[14rem]"
              allowFullScreen
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
