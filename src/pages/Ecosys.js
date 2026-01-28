import React, { useRef, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const centers = [
  {
    title: "مرکز رشد واحدهای فناوری دانشگاه قم",
    chip: "حوزه: حمایت از شرکت‌های فناوری",
    meta: [
      "دانشگاه: قم",
      "خدمات: فضای استقرار، مشاوره تخصصی، آموزش کارآفرینی، تسهیل ثبت شرکت و تجاری‌سازی",
      "آدرس: قم، بلوار الغدیر، دانشگاه قم",
      "تماس: ۰۲۵-۳۲۱۰۳۳۸۲",
      "وب‌سایت: techhub.qom.ac.ir",
    ],
    link: "https://techhub.qom.ac.ir",
  },
  {
    title: "مرکز نوآوری دانشگاه صنعتی قم",
    chip: "حوزه: صنایع پیشرفته",
    meta: [
      "دانشگاه: صنعتی قم",
      "خدمات: فضای کار تیمی، حمایت پیش‌شتاب‌دهی، مشاوره تخصصی، ارتباط با صنعت",
      "آدرس: قم، بلوار جمهوری اسلامی، دانشگاه صنعتی قم",
      "وب‌سایت: qut.ac.ir",
    ],
    link: "https://qut.ac.ir",
  },
  {
    title: "مراکز رشد پارک علم و فناوری قم",
    chip: "چند مرکز تخصصی",
    meta: [
      "مرکزها: مرکز رشد علوم انسانی و اسلامی؛ مرکز رشد واحدهای فناور (فنی و مهندسی)؛ مرکز رشد مشترک کشاورزی؛ پردیس فناوری سلامت",
      "خدمات: مشاوره تخصصی، فضای استقرار، ارتباط با سرمایه‌گذار، تسهیل صدور مجوزها، معافیت‌های مالیاتی و گمرکی",
      "آدرس: قم، پردیسان، ابتدای بلوار مولوی، پارک علم و فناوری استان قم",
      "وب‌سایت: qomstp.ir",
    ],
    link: "https://qomstp.ir",
  },
  {
    title: "مرکز رشد مشترک «بتا»",
    chip: "همکاری: دانشگاه صنعتی قم + پارک علم و فناوری قم",
    meta: [
      "ماهیت: مرکز رشد مشترک برای تجاری‌سازی دستاوردهای تحقیقاتی و فناوری‌های نوین",
      "خدمات: حمایت از ایده‌های فناورانه دانشگاهی، فضای کار تیمی، تسهیل ورود به بازار",
      "مخاطب: دانشجویان، پژوهشگران و شرکت‌های نوپا",
      "وب‌سایت: qut.ac.ir",
    ],
    link: "https://qut.ac.ir",
  },
  {
    title: "مرکز رشد واحدهای فناوری دانشگاه آزاد قم",
    chip: "حوزه: حمایت از شرکت‌های دانش‌بنیان و فناور",
    meta: [
      "دانشگاه: آزاد اسلامی واحد قم",
      "خدمات: فضای استقرار، منتورینگ، حمایت تجاری‌سازی، ارائه خدمات آزمایشگاهی و شبکه‌سازی",
      "آدرس: قم، بلوار امین، دانشگاه آزاد اسلامی واحد قم",
      "تماس: ۰۲۵-۳۷۸۳۴۰۰۰",
      "وب‌سایت: qiau.ac.ir",
    ],
    link: "https://qom.iau.ir/fa",
  },
];

function CentersGrid() {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-12" dir="rtl">
      <header className="flex flex-col md:flex-row md:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            مراکز رشد دانشگاه‌های قم
          </h1>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {centers.map((c, i) => (
          <article
            key={i}
            className="flex flex-col justify-between bg-white rounded-2xl shadow-md p-6 border border-gray-200 min-h-[280px]"
          >
            {/* عنوان و چیپ زیر عنوان */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base text-gray-800">
                {c.title}
              </h3>
              <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full whitespace-nowrap w-fit">
                {c.chip}
              </span>

              {/* متن کارت */}
              <div className="text-sm text-gray-600 mt-2 flex-grow">
                {c.meta.map((m, j) => (
                  <div key={j}>{m}</div>
                ))}
              </div>
            </div>

            {/* دکمه‌ها */}
            <div className="mt-4 flex gap-2">
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                وب‌سایت
              </a>
              <button
                onClick={() => copyText(c)}
                className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                کپی اطلاعات
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className=" mt-10 bg-white rounded-xl p-4 shadow-sm">
        <h2 className="font-semibold text-base cursor-pointer">
          ارتباط این مراکز با کارخانه نوآوری شهرداری قم
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          این مراکز رشد مهد پرورش ایده‌ها و تیم‌های نوآور دانشگاهی هستند.
          کارخانه نوآوری می‌تواند از ظرفیت‌های آن‌ها برای جذب تیم‌های آماده ورود
          به بازار، همکاری در برگزاری رویدادهای استارتاپی، استفاده از امکانات
          آزمایشگاهی و منتورینگ دانشگاه‌ها و انتقال تیم‌های خروجی به کارخانه
          نوآوری استفاده کند.
        </p>
      </section>
    </div>
  );
}

function copyText(center) {
  const text = center.title + "\n" + center.meta.join("\n");
  navigator.clipboard
    .writeText(text)
    .then(() => alert("اطلاعات کپی شد ✅"))
    .catch(() => alert("کپی نشد ❌"));
}

function ExcelTableViewer() {
  const [rows, setRows] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const tableRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("800px");

  const DEFAULT_VISIBLE = 10; // تعداد ردیف‌های پیش‌فرض

  useEffect(() => {
    const fetchExcel = async () => {
      const response = await fetch("/data.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const filtered = jsonData.filter((row) => row.length > 0);
      setRows(filtered);
    };
    fetchExcel();
  }, []);

  const visibleRows = showAll
    ? rows.slice(1)
    : rows
        .slice(1)
        .filter((row) => row.length > 0)
        .slice(0, DEFAULT_VISIBLE);

  useEffect(() => {
    if (tableRef.current) {
      setMaxHeight(showAll ? `${tableRef.current.scrollHeight}px` : "800px");
    }
  }, [showAll, rows]);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto" dir="rtl">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">
        سازمان‌های مردم‌نهاد
      </h2>

      {rows.length > 0 ? (
        <>
          {/* نمایش برای دسکتاپ */}
          <div
            className="hidden md:block transition-all duration-700 ease-in-out overflow-hidden"
            style={{ maxHeight }}
            ref={tableRef}
          >
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full text-sm text-right text-gray-700 border border-gray-200">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    {rows[0].map((header, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-2 sm:px-6 sm:py-3 border border-indigo-500 text-right"
                      >
                        {header || `ستون ${idx + 1}`}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-b ${
                        rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-indigo-50`}
                    >
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-4 py-2 sm:px-6 sm:py-3 border text-gray-800 text-sm align-top whitespace-normal leading-relaxed"
                        >
                          {cell || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* نمایش برای موبایل */}
          <div className="grid gap-4 md:hidden">
            {visibleRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                {row.map((cell, colIndex) => (
                  <div key={colIndex} className="mb-2">
                    <p className="text-xs text-gray-500 font-medium">
                      {rows[0][colIndex] || `ستون ${colIndex + 1}`}:
                    </p>
                    <p className="text-sm text-gray-800 break-words leading-relaxed">
                      {cell || "-"}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* دکمه نمایش بیشتر/کمتر */}
          {rows.length > DEFAULT_VISIBLE && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition text-sm sm:text-base"
              >
                {showAll ? "نمایش کمتر" : "موارد بیشتر"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-right">در حال بارگذاری داده‌ها...</p>
      )}
    </div>
  );
}

const Ecosys = () => {
  return (
    <div>
      <Navbar />
      <CentersGrid />
      <ExcelTableViewer />
      <Footer />
    </div>
  );
};

export default Ecosys;
