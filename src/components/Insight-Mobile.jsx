import "../styles/Insight-Mobile.css";
import india from "../assets/india.png";

const InsightMobile = () => {
  return (
    <section className="relative">
      <h2 className="text-3xl font-bold text-gray-800 text-center m-10">
        <span id="paragraph">Boost</span> Lending Decisions with Our Data
        Insights
      </h2>
      <div className="flex flex-col items-center mt-10 space-y-8  h-full">
        <div className="absolute top-[10rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="9.5"
              fill="url(#paint0_linear_315_309)"
            />
            <circle
              cx="15.5"
              cy="15.5"
              r="12.5"
              stroke="#7FA2FF"
              strokeOpacity="0.32"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_315_309"
                x1="15.5"
                y1="6"
                x2="15.5"
                y2="25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7FA2FF" />
                <stop offset="1" stopColor="#2A57F9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="svg-line-mobile absoulute -z-10 "></div>
        <div className="card-mobile flex flex-col  justify-between space-x-5  py-3  z-10 absolute top-[11rem]">
          <div className="flex  items-center justify-center card-icon-div-mobile mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M22.8571 12.5713H13.7143M22.8571 17.1427H13.7143M18.2857 26.2856L13.7143 21.7141H16C17.2124 21.7141 18.3752 21.2325 19.2325 20.3752C20.0898 19.5179 20.5714 18.3551 20.5714 17.1427C20.5714 15.9303 20.0898 14.7675 19.2325 13.9102C18.3752 13.0529 17.2124 12.5713 16 12.5713M32 18.2856C32 20.0866 31.6453 21.8699 30.956 23.5338C30.2668 25.1977 29.2566 26.7095 27.9832 27.983C26.7097 29.2565 25.1978 30.2667 23.5339 30.9559C21.87 31.6451 20.0867 31.9999 18.2857 31.9999C16.4847 31.9999 14.7014 31.6451 13.0375 30.9559C11.3736 30.2667 9.86172 29.2565 8.58823 27.983C7.31474 26.7095 6.30456 25.1977 5.61535 23.5338C4.92614 21.8699 4.57141 20.0866 4.57141 18.2856C4.57141 14.6483 6.0163 11.16 8.58823 8.58811C11.1602 6.01618 14.6484 4.57129 18.2857 4.57129C21.923 4.57129 25.4112 6.01618 27.9832 8.58811C30.5551 11.16 32 14.6483 32 18.2856Z"
                stroke="#2A57F9"
                strokeWidth="2.28571"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mr-5 text-left flex flex-col">
            <p className="text-gray-500 font-bold ">
              <span className="text-black">
                Lenders reduce risk through unique, enriched data
              </span>{" "}
              from multiple sources along with lead generation
            </p>
            <p className="font-bold text-sm mt-5 underline">Become a partner</p>
          </div>
        </div>

        <div className="card-mobile flex flex-col  justify-between space-x-5  py-3  z-10 absolute bottom-10 ">
          <div className="flex  items-center justify-center card-icon-div-mobile mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M22.8571 12.5713H13.7143M22.8571 17.1427H13.7143M18.2857 26.2856L13.7143 21.7141H16C17.2124 21.7141 18.3752 21.2325 19.2325 20.3752C20.0898 19.5179 20.5714 18.3551 20.5714 17.1427C20.5714 15.9303 20.0898 14.7675 19.2325 13.9102C18.3752 13.0529 17.2124 12.5713 16 12.5713M32 18.2856C32 20.0866 31.6453 21.8699 30.956 23.5338C30.2668 25.1977 29.2566 26.7095 27.9832 27.983C26.7097 29.2565 25.1978 30.2667 23.5339 30.9559C21.87 31.6451 20.0867 31.9999 18.2857 31.9999C16.4847 31.9999 14.7014 31.6451 13.0375 30.9559C11.3736 30.2667 9.86172 29.2565 8.58823 27.983C7.31474 26.7095 6.30456 25.1977 5.61535 23.5338C4.92614 21.8699 4.57141 20.0866 4.57141 18.2856C4.57141 14.6483 6.0163 11.16 8.58823 8.58811C11.1602 6.01618 14.6484 4.57129 18.2857 4.57129C21.923 4.57129 25.4112 6.01618 27.9832 8.58811C30.5551 11.16 32 14.6483 32 18.2856Z"
                stroke="#2A57F9"
                strokeWidth="2.28571"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mr-5 text-left flex flex-col">
            <p className="text-gray-500 font-bold ">
              <span className=" text-black">
                Merchants access affordable credit, diverse options,
              </span>{" "}
              detailed financial reports, and transparent products.
            </p>
            <p className="font-bold text-sm mt-5 underline">Get Started</p>
          </div>
        </div>
        <div className="absolute -bottom-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="9.5"
              fill="url(#paint0_linear_315_309)"
            />
            <circle
              cx="15.5"
              cy="15.5"
              r="12.5"
              stroke="#7FA2FF"
              strokeOpacity="0.32"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_315_309"
                x1="15.5"
                y1="6"
                x2="15.5"
                y2="25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7FA2FF" />
                <stop offset="1" stopColor="#2A57F9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default InsightMobile;
