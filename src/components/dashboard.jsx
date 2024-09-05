import "../styles/Dashboard.css";
import dashboard from "../assets/dashboard.png";
import woman from "../assets/woman.mp4";

const Dashboard = () => {
  return (
    <div className="px-5 md:px-10 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-x-10 md:space-y-0">
      <div
        className="w-full md:w-[51.625rem] h-[20rem] md:h-[29rem] flex items-center justify-center"
        id="gradient-div"
      >
        <img
          src={dashboard}
          className="rounded-[1.139rem] w-[18.6rem] md:w-[48.844rem] h-[18rem] md:h-[26.25rem] bg-white"
          alt="Dashboard"
        />
      </div>
      <div className="rounded-[1.75rem] w-full md:w-[24.625rem] h-[20rem] md:h-[29rem] overflow-hidden">
        <video
          className="w-full h-full rounded-[1.75rem] object-cover"
          autoPlay
          loop
        >
          <source src={woman} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Dashboard;
