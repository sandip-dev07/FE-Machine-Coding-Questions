import { useState } from "react";
import QuestionHeader from "../../components/question-header";

export default function Paginatioin({ totalPages = 20 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let pages = [];

    // Case 1: Beginning range (show first 5 pages)
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, "...", totalPages];
    }
    // Case 2: Ending range (show last 5 pages)
    else if (currentPage >= totalPages - 2) {
      pages = [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    // Case 3: Middle range
    else {
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }

    return pages;
  };

  return (
    <div>
      <QuestionHeader />

      <section className="container mx-auto flex items-center  justify-center h-[90vh]">
        <div className="mb-4 space-y-2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={currentPage === 1}
          >
            ← Prev
          </button>
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                currentPage === page
                  ? "bg-zinc-800 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={typeof page === "string"}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNext}
            className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
