import "../styles/Lenders.css";
import lender1 from "../assets/lender-1.png";
import lender2 from "../assets/lender-2.png";
import lender3 from "../assets/lender-3.png";

const Lenders = () => {
  return (
    <section className="py-16">
      <h2 className="md:text-5xl text-3xl font-bold text-gray-800 mb-10 text-center">
        We Make It Easy
      </h2>
      <div className="px-10 py-10 sm:mx-10 w-full md:w-auto" id="gradient-div1">
        <h3 className="md:text-2xl text-md font-semibold text-gray-700 mb-8">
          For Lenders
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background flex items-center justify-center p-4">
              <img
                src={lender1}
                alt="Enhanced Risk Assessment"
                className="custom-img"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                Enhanced Risk Assessment
              </h4>
              <p className="md:text-base text-sm">
                Get a 360° view of financial health with real-time alerts for
                smart lending decisions and risk management.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background flex items-center justify-center p-4">
              <img
                src={lender2}
                alt="One Platform, Complete Picture"
                className="custom-img"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                One Platform, Complete Picture
              </h4>
              <p className="md:text-base text-sm">
                Multi-source data provides a comprehensive borrower profile,
                increasing disbursals while reducing risks vs single-channel
                assessments.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background flex items-center justify-center p-4">
              <img
                src={lender3}
                alt="Operational Efficiency"
                className="custom-img"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                Operational Efficiency
              </h4>
              <p className="md:text-base text-sm">
                Streamline underwriting with standardized profiles and
                plug-‘n’-play functionality, reducing time, resources, &
                friction in data collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lenders;
