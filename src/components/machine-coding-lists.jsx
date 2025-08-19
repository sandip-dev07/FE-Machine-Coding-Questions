import { IoIosCheckmarkCircle } from "react-icons/io";
import { questions } from "@/constants/questions";
import { IoCodeSharp } from "react-icons/io5";
import { motion } from "motion/react";

export default function MachineCodingLists() {
  return (
    <motion.div
      className="max-w-4xl mx-auto pt-8 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-6 bricolage-grotesque-font"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {questions.length} Questions
      </motion.h2>

      <div className="grid gap-4">
        {questions.map((item) => (
          <motion.div
            key={item.id}
            className="p-4 py-[18px] rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(0,0,0,0.07)] cursor-pointer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.span
                  className={`border border-gray-200 p-1 rounded-full bg-gradient-to-b from-white to-gray-200/40 ${
                    item.status ? "text-green-500" : "text-gray-300"
                  }`}
                >
                  <IoIosCheckmarkCircle
                    className={item.status ? "opacity-100" : "opacity-0"}
                    size={20}
                  />
                </motion.span>
                <h3 className="font-medium text-base text-gray-800 line-clamp-1">
                  {item.question}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {/* <motion.a
                  href={item.view}
                  className={`px-3 py-1.5 rounded-[9px] text-xs border border-gray-200 font-medium transition-all flex items-center gap-1 bg-gray-50 text-gray-700 hover:bg-gray-100`}
                >
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
                  <span className="hidden sm:inline">View</span>
                </motion.a> */}
                {item.source && (
                  <motion.a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-[9px] text-xs border border-gray-700 font-medium transition-all flex items-center gap-1 bg-zinc-700 text-white hover:bg-zinc-800`}
                  >
                    <IoCodeSharp />
                    <span className="hidden sm:inline">Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
