import { TiStarFullOutline } from "react-icons/ti";
import BarChartComponent from "../../components/charts/bar-chart";
import PieChartComponent from "../../components/charts/pie-chart";

import { FaRegHeart } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
const tabs = [
  {
    title: "Rating",
    num: "4.53/5.00",
    description: " than last month",
    stat: "-12.76%",
  },
  {
    title: "Job Posted",
    num: "40,100",
    description: " than last month",
    stat: "+343%",
  },
  {
    title: "Candidate approved",
    num: "2345",
    description: " than last month",
    stat: "-12.76",
  },
];
const Home = () => {
  return (
    <div className="w-[100%] pl-[264px] bg-blue-100 nunito p-[2rem] px-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Overview</h1>

        <div className="gap-3 items-center flex">
          <img
            src="https://t4.ftcdn.net/jpg/01/82/22/03/360_F_182220324_QiTjkB3IPwx1zfNltFA4ww3dKQyYvVWB.jpg"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="font-bold">Micheal Adele</h1>
            <p className="text-[12px]">michealadele@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[2rem] mt-16">
        <div className="w-7/12 ">
          <div className="w-[100%] grid grid-cols-3 gap-[1.5rem]">
            {tabs.map((tab, i) => (
              <div key={i} className="bg-red-100 p-5 rounded-xl">
                <h1 className="text-md text-red-500 font-[500]">{tab.title}</h1>

                <h1 className="mt-2 text-2xl font-bold text-red-500">
                  {tab.num}
                </h1>
                <div className=" mt-2 flex items-center gap-1">
                  <div
                    className={`${
                      i == 1 ? "bg-green-400" : "bg-red-700"
                    } text-white h-fit px-2 text-xl rounded-full py-2`}
                  >
                    <TiStarFullOutline />
                  </div>

                  <p className="text-[14px] text-red-500">
                    <span className="text-bold">{tab.stat}</span>{" "}
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-96 bg-white mt-16 p-4 rounded-xl">
            <h1 className="mb-16 text-xl font-bold">Profile Search Company</h1>
            <BarChartComponent />
          </div>
        </div>
        <div className="w-4/12 bg-white rounded-xl flex flex-col justify-between px-6">
          <PieChartComponent />

          <div className="grid grid-cols-2 gap-12 gap-y-8">
            <div className="flex items-center gap-4">
              <div
                className={`bg-green-400 text-white h-fit px-2 text-2xl rounded-full py-2`}
              >
                <FaRegHeart />
              </div>

              <h1 className="text-xl font-[700]">Approved</h1>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`bg-red-600 text-white h-fit px-2 text-2xl rounded-full py-2`}
              >
                <BiSolidMessageAltDetail />
              </div>

              <h1 className="text-xl font-[700]">Selected</h1>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`bg-red-600 text-white h-fit px-2 text-2xl rounded-full py-2`}
              >
                <GiShare />
              </div>

              <h1 className="text-xl font-[700]">Resign</h1>
            </div>
          </div>
          <div />
        </div>
      </div>

      <div className="w-fit p-5 rounded-xl bg-red-200 mt-20">
        <h1 className="text-red-500">No. of Workers</h1>
        <h1 className="my-2 text-3xl font-bold text-red-500">40,100</h1>
        <div className=" mt-2 flex items-center gap-1">
          <div
            className={`bg-green-400 text-white h-fit px-2 text-xl rounded-full py-2`}
          >
            <TiStarFullOutline />
          </div>

          <p className="text-[14px] text-red-500">
            <span className="text-bold">+21.5%</span>than last month
          </p>
        </div>
      </div>





      <div className="mt-20">
        <h1>History log</h1>

        <div className="flex flex-row gap-4 text-[12px] mt-4">
          <h1 className="w-[17.5rem] text-center">Name</h1>
          <h1 className="w-[17.5rem] text-center">Admin</h1>
          <h1 className="w-[17.5rem] text-center">Time</h1>
          <h1 className="w-[17.5rem] text-center">Date</h1>
          <h1 className="w-[17.5rem] text-center">Status</h1>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <button className="border ml-16 px-8 text-[14px] rounded-md w-fit py-2 bg-gray-300">
            May
          </button>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
          </div>

          <button className="border mt-8 ml-16 px-8 text-[14px] rounded-md w-fit py-2 bg-gray-300">
            June
          </button>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[17.5rem] text-center">Accepted</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
