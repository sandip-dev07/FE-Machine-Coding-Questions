import { useRef, useState } from "react";
import QuestionHeader from "@/components/question-header";

export default function OTPInput({ length = 5 }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (val, idx) => {
    if (isNaN(val)) return;
    const newArr = [...otp];
    const newVal = val.trim().slice(-1);
    newArr[idx] = newVal;
    setOtp(newArr);
    newVal && inputRefs.current[idx + 1]?.focus();
  };

  const handleBackspace = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx]) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  return (
    <div>
      <QuestionHeader />
      <section className="container mx-auto flex items-center justify-center h-[90vh]">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Enter OTP Code
          </h3>
          <div className="flex items-center justify-center space-x-3">
            {otp.map((val, idx) => (
              <input
                type="text"
                value={val}
                key={idx}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, idx)}
                ref={(e) => (inputRefs.current[idx] = e)}
                onKeyDown={(e) => handleBackspace(e, idx)}
                className="w-14 h-14 text-center text-2xl font-medium border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
              />
            ))}
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Enter the {length}-digit code sent to your device
          </p>
        </div>
      </section>
    </div>
  );
}
