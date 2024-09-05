import "../styles/Business.css";
import lender1 from "../assets/lender-1.png";
import lender2 from "../assets/lender-2.png";
import lender3 from "../assets/lender-3.png";

const Business = () => {
  return (
    <section>
      <div className="px-10 py-10 sm:mx-10 w-full md:w-auto" id="gradient-div2">
        <h3 className="md:text-2xl text-md font-semibold text-gray-700 mb-8">
          For Businesses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background1 flex items-center justify-center p-4">
              <img src={lender1} alt="Credit access" className="custom-img" />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                Credit access
              </h4>
              <p className="md:text-base text-sm">
                View all business metrics across channels Detailed cost
                breakdown by channel SKU level P&L Profit on Ad spends
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background1 flex items-center justify-center p-4">
              <img
                src={lender2}
                alt="Free business insights & reconciliation"
                className="custom-img"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                Free business insights & reconciliation
              </h4>
              <p className="md:text-base text-sm">
                A natural language interface to converse with your data for
                specific queries, rapid decisions and new ideas.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col h-full">
            <div className="img-background1 flex items-center justify-center p-4">
              <img
                src={lender3}
                alt="Moneyflo GPT - Your AI assistant"
                className="custom-img"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h4 className="md:text-md text-base font-bold text-gray-800 mb-2 ">
                Moneyflo GPT - Your AI assistant
              </h4>
              <p className="md:text-base text-sm">
                Automated order matching Real-time cashflow tracking Detect
                discrepancies for revenue protection Forecast future cashflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
