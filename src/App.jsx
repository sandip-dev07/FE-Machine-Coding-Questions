import { Routes, Route, Link } from "react-router-dom";
import { IoHome, IoCode } from "react-icons/io5";
import Home from "@/pages/home/page";
import SearchWithDebounce from "@/pages/search-with-debounce/page";
import QuestionHeader from "@/components/question-header";
import Paginatioin from "./pages/pagination/page";
import StarRating from "./pages/star-rating/page";

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Machine Coding Question Routes */}
          <Route
            path="/search-with-debounce"
            element={<SearchWithDebounce />}
          />

          {/* Placeholder routes for other questions - you can implement these later */}
          <Route path="/pagination" element={<Paginatioin />} />
          <Route
            path="/otp-input"
            element={<PlaceholderPage title="OTP Input" />}
          />
          <Route path="/star-rating" element={<StarRating />} />
          <Route
            path="/progress-bar"
            element={<PlaceholderPage title="Progress Bar" />}
          />
          <Route
            path="/nested-checkbox"
            element={<PlaceholderPage title="Nested Checkbox" />}
          />
          <Route
            path="/tabs-accordions"
            element={<PlaceholderPage title="Tabs and Accordions" />}
          />
          <Route
            path="/tabs-form"
            element={<PlaceholderPage title="Tabs Form Component" />}
          />
          <Route
            path="/file-explorer"
            element={<PlaceholderPage title="File Explorer" />}
          />
          <Route
            path="/toast-notifications"
            element={<PlaceholderPage title="Toast Notifications" />}
          />
          <Route
            path="/drag-drop"
            element={<PlaceholderPage title="Drag and Drop" />}
          />
          <Route
            path="/infinite-scroll"
            element={<PlaceholderPage title="Infinite Scroll" />}
          />
          <Route
            path="/timer-stopwatch"
            element={<PlaceholderPage title="Timer / Stopwatch" />}
          />
          <Route
            path="/shopping-cart"
            element={<PlaceholderPage title="Shopping Cart" />}
          />
          <Route
            path="/autocomplete-chip"
            element={<PlaceholderPage title="Autocomplete with Chip Input" />}
          />
          <Route
            path="/carousel-slider"
            element={<PlaceholderPage title="Carousel / Slider" />}
          />
          <Route
            path="/todo-app"
            element={<PlaceholderPage title="Todo App" />}
          />
          <Route
            path="/data-visualization"
            element={<PlaceholderPage title="Data Visualization" />}
          />
          <Route
            path="/nested-comments"
            element={<PlaceholderPage title="Nested Comments" />}
          />
          <Route
            path="/modal-dialogs"
            element={<PlaceholderPage title="Modal Dialogs" />}
          />
          <Route
            path="/memory-game"
            element={<PlaceholderPage title="Memory Game" />}
          />
          <Route
            path="/crypto-converter"
            element={<PlaceholderPage title="Crypto Converter" />}
          />
          <Route
            path="/google-calendar-clone"
            element={<PlaceholderPage title="Google Calendar Clone" />}
          />
          <Route
            path="/search-autocomplete"
            element={<PlaceholderPage title="Search Autocomplete" />}
          />
          <Route
            path="/breadcrumb-navigation"
            element={<PlaceholderPage title="Breadcrumb Navigation" />}
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

// Placeholder Component for unimplemented questions
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <QuestionHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="mb-6">
            <IoCode className="h-16 w-16 text-gray-300 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bricolage-grotesque-font">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            This solution is coming soon! Check back later or contribute to
            implement it.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <IoHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <QuestionHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 bricolage-grotesque-font">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <IoHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
