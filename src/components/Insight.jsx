import "../styles/Insight.css";
import india from "../assets/india.png";

const Insight = () => {
  return (
    <section className="m-10 py-16 relative">
      <div className=" mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800">
          <span id="paragraph">Boost</span> Lending Decisions with Our Data
          Insights
        </h2>
        <div className="flex flex-col items-center mt-10 space-y-8">
          {/* First Card */}
          <div className="card flex items-center justify-between space-x-5 absolute top-[15.625rem] right-[31.25rem] z-10 ">
            <div className="flex items-center justify-center card-icon-div mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="card-icon"
              >
                <path
                  d="M40 22H24M40 30H24M32 46L24 38H28C30.1217 38 32.1566 37.1571 33.6569 35.6569C35.1571 34.1566 36 32.1217 36 30C36 27.8783 35.1571 25.8434 33.6569 24.3431C32.1566 22.8429 30.1217 22 28 22M56 32C56 35.1517 55.3792 38.2726 54.1731 41.1844C52.967 44.0962 51.1992 46.742 48.9706 48.9706C46.742 51.1992 44.0962 52.967 41.1844 54.1731C38.2726 55.3792 35.1517 56 32 56C28.8483 56 25.7274 55.3792 22.8156 54.1731C19.9038 52.967 17.258 51.1992 15.0294 48.9706C12.8008 46.742 11.033 44.0962 9.82689 41.1844C8.62078 38.2726 8 35.1517 8 32C8 25.6348 10.5286 19.5303 15.0294 15.0294C19.5303 10.5286 25.6348 8 32 8C38.3652 8 44.4697 10.5286 48.9706 15.0294C53.4714 19.5303 56 25.6348 56 32Z"
                  stroke="#2A57F9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mr-5 text-left flex flex-col">
              <p className="text-gray-500 font-bold">
                <span className="text-black">
                  Lenders reduce risk through unique, enriched data
                </span>{" "}
                from multiple sources along with lead generation
              </p>
              <p className="font-bold text-sm mt-5 underline">
                Become a partner
              </p>
            </div>
          </div>
          {/* Line connecting the cards */}
          <div className="absolute right-[28rem] top-[8.125rem]">
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
                fill="url(#paint0_linear_315_143)"
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
                  id="paint0_linear_315_143"
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
          <div className="svg-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="640"
              height="527"
              viewBox="0 0 640 527"
              fill="none"
            >
              <path
                opacity="0.52"
                d="M584.5 0V10C584.5 21.0457 575.546 30 564.5 30H22.5C11.4543 30 2.5 38.9543 2.5 50V94.8454C2.5 103.57 8.15484 111.287 16.4734 113.916L335.027 214.584C343.345 217.213 349 224.93 349 233.655V300.474C349 309.84 355.5 317.952 364.641 319.993L622.049 377.481C645.361 382.687 641.576 417 617.689 417H369C357.954 417 349 425.954 349 437V526.5"
                stroke="#7FA2FF"
                strokeOpacity="0.62"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="absolute right-[42.75rem] bottom-[2.813rem]">
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
                fill="url(#paint0_linear_315_143)"
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
                  id="paint0_linear_315_143"
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

          {/* Second Card */}
          <div className="card flex items-center justify-between space-x-5 absolute bottom-[7.5rem] right-[12.5rem] z-10">
            <div className="flex items-center justify-center card-icon-div mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M8 35C8 33.344 9.344 32 11 32H17C18.656 32 20 33.344 20 35V53C20 54.656 18.656 56 17 56H11C10.2044 56 9.44129 55.6839 8.87868 55.1213C8.31607 54.5587 8 53.7957 8 53V35ZM26 23C26 21.344 27.344 20 29 20H35C36.656 20 38 21.344 38 23V53C38 54.656 36.656 56 35 56H29C28.2044 56 27.4413 55.6839 26.8787 55.1213C26.3161 54.5587 26 53.7957 26 53V23ZM44 11C44 9.344 45.344 8 47 8H53C54.656 8 56 9.344 56 11V53C56 54.656 54.656 56 53 56H47C46.2044 56 45.4413 55.6839 44.8787 55.1213C44.3161 54.5587 44 53.7957 44 53V11Z"
                  stroke="#2A57F9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" text-left flex flex-col">
              <p className="mr-10 text-gray-500 font-bold">
                <span className="text-black">
                  Merchants access affordable credit, diverse options
                </span>{" "}
                , detailed financial reports, and transparent products on one
                platform.
              </p>
              <p className="font-bold text-sm mt-5 underline">Get Started</p>
            </div>
          </div>
          <div className="gradient-div10 absolute right-[0.625rem]"></div>
          <div className="absolute right-[2.5rem] z-10">
            <img src={india} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
