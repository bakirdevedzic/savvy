import Button from "../../ui/Button";
import FeatureCard from "./FeatureCard";
import { FaCheckCircle } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="h-[calc(100dvh)] flex items-center  flex-col pattern-dots pattern-blue-500 pattern-bg-white 
    pattern-size-6 pattern-opacity-10"
    >
      <div className="max-w-[1700px] flex justify-center items-center h-[70px]">
        <img
          alt="image"
          src="../../../public/logo-final-200h.png"
          className="w-[130px] h-[64px] self-start object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <div className="mt-10 text-5xl text-center font-bold mb-3 text-wrap">
            Track Your Budget Efficiently
          </div>
        </div>
        <div className="flex justify-center mt-3 mb-3">
          <Button type="base">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
        <div>
          <img
            alt="image"
            src="../../../public/mockuper-1000w.png"
            className="w-[997px] h-[464px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="text-3xl font-bold mt-5 mb-5 justify-center text-center flex">
            Powerful Features to Simplify Your Finances
          </div>
          <div className="text-lg mb-5 flex justify-center text-center max-w-[700px] items-center whitespace-pre-wrap p-3">
            Whether you&apos;re a budgeting pro or just starting out, our
            features empower you to make smarter financial decisions and reach
            your financial goals faster.
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 md:grid-cols-2 md:grid-rows-3 sm:flex sm:flex-col">
          <FeatureCard
            text="Effortlessly manage your finances with intuitive transaction tracking. "
            cardTitle="Track with Ease"
            icon={<FaCheckCircle />}
          />
          <FeatureCard
            text="Plan and forecast expenses for future months with our smart tools."
            cardTitle="Budget Like a Pro"
            icon={<RiMoneyDollarBoxFill />}
          />
          <FeatureCard
            text=" Gain clear insights with charts and graphs that visualize your spending."
            cardTitle="See It All Clearly"
            icon={<FaChartPie />}
          />
          <FeatureCard
            text="Set &amp; track personalized savings targets with ease."
            cardTitle="Effortless Goals"
            icon={<SiTarget />}
          />
          <FeatureCard
            text="Set spending limits and monitor progress throughout the month."
            cardTitle="Stay on Budget"
            icon={<FaMoneyBillTrendUp />}
          />
          <FeatureCard
            text="Easily categorize your transactions to see where your money goes."
            cardTitle="Track  by Category"
            icon={<IoFastFood />}
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center min-h-[200px] justify-items-center bg-primary-black mt-24">
        <div className="text-5xl font-bold text-white">Savvy</div>
        <div className="text-xl font-bold text-white mt-3">
          Check out code on GitHub!
        </div>
      </div>
    </div>
  );
}

export default Home;
