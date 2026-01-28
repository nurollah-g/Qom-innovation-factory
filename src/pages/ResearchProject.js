import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const socialTopics = [
  {
    idx: 1,
    title:
      "بررسی وضعیت افزایش امنیت اجتماعی در فضاهای شهری قم و ارائه راهکارهای مناسب",
    url: "/research/1",
  },
  {
    idx: 2,
    title:
      "بررسی وضعیت موجود مشاغل مرتبط با خدمات خودرو (تعمیرگاه ها) و ارائه راهکارهای مناسب جهت ساماندهی",
    url: "/research/2",
  },
  {
    idx: 3,
    title: "ارائه بسته های حمایتی طرح جوانی جمعیت (شهروندان کلانشهر قم)",
    url: "/research/3",
  },
  {
    idx: 4,
    title: "تعریف جامع مفهوم هویت شهری قم، شرح و بسط",
    url: "/research/4",
  },
  {
    idx: 5,
    title:
      "تعیین شاخص‌های سنجش تعلق خاطر شهروندان به شهر و ارائه راهکارهای مناسب جهت افزایش تعلق خاطر و بالا بردن تمایل شهروندان قمی به مشارکت در امور شهری",
    url: "/research/5",
  },
  {
    idx: 6,
    title:
      "تهیه برنامه عملیاتی توسعه گردشگری مذهبی شهر قم با تأکید بر استفاده از ظرفیت‌های استفاده نشده و ارائه راهکار جهت تأمین کمبودها در ملزومات و پیش‌نیازهای توسعه گردشگری مذهبی",
    url: "/research/6",
  },
  {
    idx: 7,
    title:
      "شناسایی ظرفیت‌های مغفول‌مانده مذهبی شهر قم با تمرکز بر حرم حضرت معصومه (س) و مسجد مقدس جمکران و پیشنهادهای مناسب جهت به‌کارگیری این ظرفیت‌ها در مدیریت شهری",
    url: "/research/7",
  },
  {
    idx: 8,
    title:
      "شناسایی ظرفیت شهر قم در توسعه زیست بوم نوآوری، بررسی تاثیر فعال‌سازی ظرفیت این زیست بوم بر ابعاد مختلف شهری و ارائه راهکارهای مناسب در این زمینه",
    url: "/research/8",
  },
  {
    idx: 9,
    title: "بررسی شیوه‌های جمع‌آوری تاریخ شفاهی و ارائه کاربردی آن",
    url: "/research/9",
  },
  {
    idx: 10,
    title: "بررسی نقش و وظایف مدیریت شهری قم در شکل‌گیری تمدن اسلامی",
    url: "/research/10",
  },
  {
    idx: 11,
    title:
      "بررسی راهکارهای ارتقاء مشارکت فرهنگی اجتماعی نهادها و مراکز فعال فرهنگی",
    url: "/research/11",
  },
  {
    idx: 12,
    title: "بررسی راهکارهای ارتقاء امید و نشاط در شهر قم",
    url: "/research/12",
  },
  {
    idx: 13,
    title: "مصرف رسانه ای شهروندان قم",
    url: "/research/13",
  },
  {
    idx: 14,
    title:
      "ارائه راهکارهای بهبود رفتار ترافیکی شهروندان، افزایش ایمنی معابر و کاهش سوانح رانندگی شهر قم",
    url: "/research/14",
  },
  {
    idx: 15,
    title:
      "ارائه راهکارهای توانمندسازی محلات شهر قم و گسترش مشارکت شهروندان با استفاده از ظرفیت سراهای محله",
    url: "/research/15",
  },
];

function ResponsiveTable({ rows, columns }) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className="min-w-full border-collapse table-auto text-sm"
        dir="rtl"
      >
        <thead>
          <tr className="bg-slate-100 sticky top-0">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-3 py-2 font-medium border-b border-slate-200 whitespace-nowrap
                  ${col.key === "idx" ? "text-center" : "text-right"}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="hover:bg-slate-50 even:bg-white odd:bg-slate-50"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-3 py-3 border-b border-slate-100 align-middle leading-relaxed
                    ${col.key === "idx" ? "text-center" : "text-right"}`}
                >
                  {col.key === "title" ? (
                    <a
                      href={r.url}
                      className="text-blue-600 hover:underline block"
                    >
                      {r[col.key]}
                    </a>
                  ) : (
                    r[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto" dir="rtl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-1 text-right">
          فهرست موضوعات پژوهشی فرهنگی و اجتماعی
        </h1>
      </header>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-right">
          مسائل اجتماعی و فرهنگی شهری قم
        </h2>

        <div className="bg-white p-4 rounded-lg border border-slate-100">
          <ResponsiveTable
            rows={socialTopics}
            columns={[
              { key: "idx", label: "ردیف" },
              { key: "title", label: "عنوان" },
            ]}
          />
        </div>
      </section>

      <style>{`
        @media print {
          body { color: #000 }
          .no-print { display: none }
          table thead { background: #f6f6f6 }
        }
      `}</style>
    </div>
  );
}

const ResearchProject = () => {
  return (
    <div>
      <Navbar />
      <FormsPage />
      <Footer />
    </div>
  );
};

export default ResearchProject;
