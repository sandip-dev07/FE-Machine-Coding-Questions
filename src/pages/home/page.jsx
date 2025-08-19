import { IoLogoGithub } from "react-icons/io";
import MachineCodingLists from "@/components/machine-coding-lists";
import Lottie from "lottie-react";
import Bird from "@/assets/bird.json";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col px-4 py-20 space-y-8 mx-auto">
      {/* Hero Section */}
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20">
          <Lottie animationData={Bird} loop={true} />
        </div>
      </motion.div>
      <motion.section
        className="flex-1 flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 mb-6 bricolage-grotesque-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Frontend Machine Coding Questions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Real-world UI coding challenges and sharpen your frontend
            engineering skills.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link target="_blank" to="https://github.com/sandip-dev07/FE-Machine-Coding-Questions">
              <motion.button className="px-5 py-2 text-white bg-gray-900 rounded-xl text-sm shadow-md hover:bg-gray-800 transition flex items-center gap-3 cursor-pointer">
                <IoLogoGithub size={20} />
                GitHub
              </motion.button>
            </Link>
            <motion.button className="px-5 py-2 text-gray-900 border bg-zinc-50 border-gray-300 rounded-xl text-sm hover:bg-gray-100 transition cursor-pointer">
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <MachineCodingLists />
      </motion.section>
    </main>
  );
}
