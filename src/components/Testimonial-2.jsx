import testimonialImage2 from "../assets/woman.png";
import yogabar from "../assets/yogabar.png";
import "../styles/Testimonial.css";

const Testimonial2 = () => {
  return (
    <section className="relative my-6 md:my-10 flex justify-center items-center gradient-div px-4 md:px-0">
      <div className="relative flex flex-col md:flex-row items-center p-4 md:p-6 lg:p-10 max-w-5xl mx-4">
        <div className="absolute top-4 md:top-6 right-4 md:right-6 p-2 md:p-4 hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" // Adjusted size for responsiveness
            height="24" // Adjusted size for responsiveness
            viewBox="0 0 58 48"
            fill="none"
          >
            <g opacity="0.5" clipPath="url(#clip0_315_106)">
              <path
                d="M0.240166 13.7897C6.00414 14.6292 12.1284 16.5478 12.1284 22.7831L12.1284 23.3826L-2.07563e-06 23.3826L2.07563e-06 47.125L26.5383 47.125L26.5383 26.0207C26.5383 7.43451 15.4907 0.719439 0.240164 -2.09961e-08L0.240166 13.7897ZM58 47.125L58 26.0206C58 7.4345 46.9523 0.719436 31.7018 -2.77146e-06L31.7018 13.7897C37.4658 14.6292 43.59 16.5478 43.59 22.7831L43.59 23.3826L31.4617 23.3826L31.4617 47.125L58 47.125Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_315_106">
                <rect
                  width="32" // Adjusted size for responsiveness
                  height="24" // Adjusted size for responsiveness
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-shrink-0 mb-4 md:mb-6 md:mr-4 lg:mr-6">
          <img
            src={testimonialImage2}
            alt="Person"
            className="rounded-lg w-full h-auto object-cover md:w-[17.875rem] md:h-[19.875rem]"
          />
        </div>
        <div className="text-white text-center md:text-left">
          <p className="font-medium text-base md:text-lg mb-4">
            MoneyFlo has been an outstanding partner and an indispensable tool
            for me when seeking to understand the marketplace reconciliation
            cycle - return % - commission structures. It is the most essential
            tool I use as a seller to monitor the overall profitability of my
            business.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-6 items-center">
            <div>
              <p className="font-bold text-base md:text-lg">
                Suhasini Sampath, Founder
              </p>
            </div>
            <img
              src={yogabar}
              className="w-16 h-12 md:w-[3.25rem] md:h-[2.75rem]"
              alt="Company logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
