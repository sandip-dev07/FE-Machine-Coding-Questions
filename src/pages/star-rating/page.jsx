import React, { useState } from "react";
import QuestionHeader from "../../components/question-header";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  return (
    <div>
      <QuestionHeader />

      <section className="container mx-auto flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {Array.from({ length: totalStars }, (_, index) => (
              <div
                className={`cursor-pointer text-5xl transition-all duration-200 hover:scale-110 ${
                  index + 1 <= rating
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-200"
                }`}
                key={index}
                onClick={() => handleClick(index + 1)}
              >
                ★
              </div>
            ))}
          </div>
          <div className="text-lg text-gray-600">
            {rating > 0
              ? `You rated ${rating} star${rating > 1 ? "s" : ""}`
              : "Click on a star to rate"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StarRating;
