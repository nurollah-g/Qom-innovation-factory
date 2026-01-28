import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function CompaniesTable() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/tableExport.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data.data);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(companies.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
        شرکت‌ها و واحدهای فناوری عضو
      </h2>

      {/* جدول */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-xs md:text-sm">
              <th className="py-3 px-4 border-b text-right">عنوان</th>
              <th className="py-3 px-4 border-b text-right">مدیرعامل</th>
              <th className="py-3 px-4 border-b text-right">دسته</th>
              <th className="py-3 px-4 border-b text-right">مجوز</th>
              <th className="py-3 px-4 border-b text-right">عضویت</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((company, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 text-xs md:text-sm`}
              >
                <td className="py-2 px-4 border-b">{company["عنوان"]}</td>
                <td className="py-2 px-4 border-b">{company["مدیرعامل"]}</td>
                <td className="py-2 px-4 border-b">{company["دسته"]}</td>
                <td className="py-2 px-4 border-b">
                  {company["مجوز"] && company["مجوز"].trim() !== ""
                    ? company["مجوز"]
                    : "-"}
                </td>
                <td className="py-2 px-4 border-b">{company["عضویت"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        {/* روی دسکتاپ داخل کادر */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-1 bg-gray-50  rounded-lg px-4 py-3 shadow-sm">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            قبلی
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            بعدی
          </button>
        </div>

        {/* روی موبایل ساده بدون کادر */}
        <div className="flex md:hidden flex-wrap justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 text-xs"
          >
            قبلی
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 py-1 rounded text-xs ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 text-xs"
          >
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
}

const joinedCompanies = () => {
  return (
    <div>
      <Navbar />
      <CompaniesTable />
      <Footer />
    </div>
  );
};

export default joinedCompanies;
