import workflow from "../assets/workflow.png";
import "../styles/Workflow.css";

const Workflow = () => {
  return (
    <section className="m-4 md:m-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Here is how the <span className="paragraph1">magic</span> is done
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-6 md:mt-10">
        <div className="flex flex-col justify-between w-full md:w-[21.25rem] space-y-6 md:space-y-14 px-4">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg md:text-xl">
              01. Sign up on Moneyflo
            </h1>
            <p className="font-medium text-sm md:text-base">
              Canopy Connect lets you design custom workflows that automate loan
              tasks, so you can spend your time on other things.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-gray-500 text-lg md:text-xl">
              02. Sync your financial data
            </h1>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-gray-500 text-lg md:text-xl">
              03. Unlock Capital
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[47.25rem] md:h-[33.75rem] gradient-div7 mt-6 md:mt-0">
          <img
            src={workflow}
            alt="Workflow"
            className="w-full md:w-[42.875rem] h-auto md:h-[22.688rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
