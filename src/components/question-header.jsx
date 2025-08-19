import { useLocation, Link } from "react-router-dom";
import { IoHome, IoChevronForward } from "react-icons/io5";
import { questions } from "@/constants/questions";

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
    </div>
  );
}
