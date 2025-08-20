import { useLocation, Link } from "react-router-dom";
import { IoHome, IoChevronForward } from "react-icons/io5";
import { questions } from "@/constants/questions";
import { div } from "motion/react-client";

export default function QuestionHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the current question based on the path
  const currentQuestion = questions.find((q) => q.view === currentPath);

  // Don't show header on home page
  if (currentPath === "/") {
    return null;
  }

  // If no question found, show a generic header
  if (!currentQuestion) {
    return (
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="container mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-700 transition-colors">
              <IoHome className="w-4 h-4" />
            </Link>
            <IoChevronForward className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Page Not Found</span>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-5xl mx-auto py-6 px-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-gray-500 bricolage-grotesque-font">
        <Link
          to="/"
          className="flex items-center hover:text-gray-700 transition-colors"
        >
          <IoHome className="w-4 h-4 mr-1" />
          Home
        </Link>
        <IoChevronForward className="w-4 h-4" />
        <span className="text-gray-900 font-medium line-clamp-1">
          {currentQuestion.question}
        </span>
      </nav>
      {currentQuestion.source && (
        <div className="w-full flex justify-end">
          <a
            href={currentQuestion.source}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 rounded-[9px] text-xs border border-gray-200 font-medium transition-all flex items-center gap-1 bg-black text-zinc-50 mt-6 w-fit`}
          >
            {/* <IoCodeSharp /> */}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="hidden sm:inline">Source Code</span>
          </a>
        </div>
      )}
    </div>
  );
}
