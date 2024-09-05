import { useState, useRef, useEffect } from "react";
import "../styles/FAQ.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("lenders");
  const [openQuestion, setOpenQuestion] = useState("q1");

  const contentRef = useRef([]);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const getHeight = (index) => {
    return contentRef.current[index]?.scrollHeight || "0px";
  };

  useEffect(() => {
    if (openQuestion !== null && contentRef.current[openQuestion]) {
      contentRef.current[openQuestion].style.height = `${getHeight(
        openQuestion
      )}px`;
    }
  }, [openQuestion]);

  return (
    <div className="m-6 md:m-10 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
            Frequently asked questions
          </h1>
          <p className="font-bold mb-4">Have more questions?</p>
          <Link to="/contact">
            <button
              className="bg-black text-white px-4 py-2 md:px-6 md:py-2 rounded-lg flex items-center"
              id="report-button"
            >
              Contact Us
              <span className="ml-2">
                <MdOutlineArrowOutward />
              </span>
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          {/* Tabs */}
          <div className="flex border-b mb-4 md:mb-8">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "lenders"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("lenders")}
            >
              For Lenders
            </button>
            <button
              className={`px-4 py-2 font-semibold ml-4 ${
                activeTab === "businesses"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("businesses")}
            >
              For Businesses
            </button>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => {
              const questionId = `q${index + 1}`;
              const questions = [
                "What is MoneyFlo? And how is it different?",
                "How does MoneyFlo make access to capital transparent?",
                "What are the main advantages of MoneyFlo?",
                "Who are the Founders?",
                "What is the pricing?",
              ];

              return (
                <div key={questionId} className="border-b-2">
                  <button
                    className="w-full text-left text-base md:text-lg font-semibold py-2 flex items-center justify-between"
                    onClick={() => toggleQuestion(questionId)}
                  >
                    {questions[index]}
                    <span
                      className={`transition-transform duration-300 ease-in-out transform ${
                        openQuestion === questionId ? "rotate-45" : ""
                      }`}
                    >
                      {openQuestion === questionId ? <FaXmark /> : <FiPlus />}
                    </span>
                  </button>
                  <div
                    ref={(el) => (contentRef.current[questionId] = el)}
                    className={`transition-height overflow-hidden ${
                      openQuestion === questionId ? "height-auto" : ""
                    }`}
                    style={{
                      height:
                        openQuestion === questionId
                          ? `${getHeight(questionId)}px`
                          : "0px",
                    }}
                  >
                    <p className="text-gray-600 mt-2 mb-4">
                      {
                        [
                          "MoneyFlo assists multi-channel consumer brands in achieving profitable growth, recovering revenue, and automating processes by integrating fragmented data from various sources.",
                          "MoneyFlo provides tools to simplify access to capital, offering clarity and transparency throughout the lending process.",
                          "MoneyFlo's main advantages include faster capital recovery, automated workflows, and integrated data analysis for better decision-making.",
                          "MoneyFlo was founded by a team of industry experts with extensive backgrounds in finance and technology.",
                          "Pricing depends on the size of your business and the services you require. Contact us for more details.",
                        ][index]
                      }
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
