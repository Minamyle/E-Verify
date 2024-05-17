import { Children } from "react";
import Button from "../components/Button";
import RegisterationCard from "../components/RegisterationCard";
import videoImage from "../../public/svg/videoImage.svg";
import hero3 from "../../public/svg/vector3.svg";
import guyImage from "../../public/svg/guyImage.svg";
import hero from "../../public/svg/vedioBg.svg";
import naira from "../../public/svg/naira.svg";
import spread from "../../public/svg/money.svg";
import dollar from "../../public/svg/dollar.svg";
import cap from "../../public/svg/cap.svg";
import man from "../../public/svg/callman.svg";
import yellow from "../../public/svg/shapeyellow.svg";
import woman from "../../public/svg/ladycheeks.svg";
import police from "../../public/svg/police.svg";
import herolady from "../../public/svg/herolady.svg";
import bank from "../../public/svg/bank.svg";
import id from "../../public/svg/id.svg";
import medical from "../../public/svg/medical.svg";
import education from "../../public/svg/education.svg";
import and from "../../public/svg/and.svg";
import gaurantor from "../../public/svg/gaurantor.svg";
import blue1 from "../../public/svg/blue.svg";
import yellow1 from "../../public/svg/yellow.svg";
import red1 from "../../public/svg/red2.svg";

const HomeScreen = () => {
  return (
    <>
      <div className="px-32 w-[50%] pt-[7rem]">
        <img
          src="/svg/loginBg.svg"
          className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover z-0"
        />
        <div className="z-10 relative mt-[6rem] ">
          <div className="">
            <h1 className="font-bold text-5xl leading-[3rem]">
              Disclosure and Barring Service
            </h1>
            <p className="font-bold z-10 relative mt-5 mb-5">
              Request standard and enhanced personal record checks for eligible
              positions for jobs in Nigerian.
            </p>
          </div>
          <div className="gap-5 flex  ">
            <Button className=" w-[50%] rounded-3xl bg-[#39399D] text-white whitspace-nowrap p-3">
              Background Check
            </Button>
            <Button className=" w-[50%] rounded-3xl bg-[#FB4F4F] text-white whitespace-nowrap p-3">
              Professional Check
            </Button>
          </div>
        </div>
        <div className="w-6/12 relative flex z-10 flex-col items-center justify-center h-[100vh] ">
          <img
            src={naira}
            alt=""
            className="object-contain absolute top-[1.5%] w-[12.5rem] h-[12.5rem] right-[25%]"
          />
          <img
            src={spread}
            alt=""
            className="object-contain w-[50rem] mb-[70rem] ml-[60rem]  "
          />
          <img
            src={cap}
            alt=""
            className="object-contain w-[15rem] h-[100rem] absolute ml-[100rem] bottom-[5%] "
          />
          <img
            src={dollar}
            alt=""
            className="object-contain absolute top-[-10rem] w-[8.5rem]   rotate-180 ml-[100rem]"
          />
        </div>
      </div>
      <div className=" z-10 relative bg-white mt-[-20rem]">
        <h1 className="text-3xl text-center mb-5">
          <b>About</b> <i className="text-[#FB4F4F] font-bold">e-verify</i>
        </h1>
        <p className="text-center mb-5">
          We are a leading provider of criminality checks with over 20,000
          registered clients/organisations, and what's{" "}
          <p className="text-center">
            {" "}
            more our team has been screening for over 25 years.
          </p>
        </p>

        <div className="flex justify-between px-32 ">
          <div className="border-l-4 border-[#FB4F4F] bg-[#F6F3F3] rounded ml-5 w-[50%] p-5 ">
            <h1 className="text-5xl font-bold mb-5 text-[#fb4f4f]">
              Disclosure and bearing Service
            </h1>
            <p className="w-[55%] mb-5">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <Button className=" p-2 rounded-2xl bg-[#39399D] text-white whitespace-nowrap">
              register your organisation online now
            </Button>
          </div>
          <div className="border-l-4 border-[#39399D]  bg-[#F6F3F3] rounded ml-5 w-[50%] p-5">
            <h1 className="text-5xl font-bold mb-5 text-[#39399D] ">
              Professional Remarks
            </h1>
            <p className="w-[55%] mb-5">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <Button className=" p-2 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap">
              register your organisation online now
            </Button>
          </div>
        </div>

        <div className="flex mt-[5rem]">
          <div className="w-[50%]">
            <img src={man} alt="" className="w-[30rem]" />
            <div className="flex justify-between mb-5">
              <img src={yellow} alt="" className=" w-[8.5rem] mt-[-5rem]" />
              <img src={woman} alt="" className="mt-[-4rem]" />
            </div>
          </div>
          <div className="m-[8rem] text-end w-[50%]">
            <h1 className="text-5xl font-bold ">
              Looking for the <br /> Right{" "}
              <span className="text-[#fb4f4f]">Employee</span> or <br /> want to
              post a <span className="text-[#fb4f4f]">Job</span>
            </h1>
            <p className="mt-5 mb-5">
              Organisations can request standard and <br />
              enhanced criminal record checks for eligible <br /> positions in
              England and Wales.
            </p>
            <Button className=" p-3 rounded-3xl bg-[#FB4F4F] text-white whitespace-nowrap">
              Search for verified personel
            </Button>
          </div>
        </div>

        <div className="mb-5 mt-5 flex ">
          <div className="w-[50%] ml-32">
            <h1 className="text-6xl font-bold mb-3">
              Know everything about{" "}
              <span className="text-[#fb4f4f]">Applicants</span>{" "}
            </h1>
            <div className="flex gap-3 mb-3 ">
              <div>
                <img src={police} alt="" />
              </div>
              <div>
                <p>Police security check</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3 ">
              <div>
                <img src={bank} alt="" />
              </div>
              <div>
                <p>Bank details check</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3 ">
              <div>
                <img src={id} alt="" />
              </div>
              <div>
                <p>ID check</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div>
                <img src={education} alt="" />
              </div>
              <div>
                <p>Education credentials</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div>
                <img src={medical} alt="" />
              </div>
              <div>
                <p>Medical</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div>
                <img src={gaurantor} alt="" />
              </div>
              <div>
                <p>garantors and referees</p>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <div>
                <img src={and} alt="" />
              </div>
              <div>
                <p>and many more</p>
              </div>
            </div>
            <div className="border-b-4 border-[#FB4F4F] ml-[3rem] w-[35%]"></div>
          </div>
          <div className="w-[50%]">
            <img src={herolady} alt="" className="w-[50rem]" />
            <div className="ml-[30rem] w-[7rem]">
              <img src={yellow} alt="" className="rotate-180 " />
            </div>
          </div>
        </div>

        <div className="">
          <img src={videoImage} alt="" />
          <div className="flex p-[3rem] gap-5 ml-5">
            <img src={hero3} alt="" className="rotate-270" />
            <div className="ml-[5rem]">
              <h1 className="text-5xl font-bold ">Job Posting is possible</h1>
              <Button className=" p-2 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap mt-5 ml-[8rem]">
                Search for verified personel
              </Button>
              <div className="z-10 relative">
                <img
                  src={yellow1}
                  alt=""
                  className="object-contain absolute top-[-2rem] w-[12.5rem] h-[1rem] right-[5%]  "
                />
                <img
                  src={blue1}
                  alt=""
                  className="object-contain absolute top-[-6rem] w-[1.5rem] h-[12.5rem] right-[15%]  "
                />
                <img
                  src={red1}
                  alt=""
                  className="object-contain absolute top-[-9rem] w-[2rem] h-[12.5rem] right-[10%]  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col relative w-[100%]">
          <img src={guyImage} alt="" />
          <div className=" bg-white left-[50px]">
            <h1>Know more about employess more than the papers</h1>
            <Button className=" p-2 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap">
              Register Now
            </Button>
          </div>
        </div> */}
        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white left-6 text-[14px] px-2  z-0">
            <img src={guyImage} alt="" className="" />
          </span>
          <div className="border bg-[#d0cfd0] mt-[27rem] border-slate-500 h-[25vh] text-md px-6 max-w-[25rem] py-2 z-10 ml-[58rem] leading-[1rem]">
            <h1 className="text-end text-xl mb-2 font-bold">
              Know more about employess more than the papers
            </h1>
            <div className="text-end mt-5">
              <Button className=" p-1 rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap">
                Register Now
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="mt-[5rem] flex relative w-[100%]  ">
          <span className="absolute bg-white left-6 text-[14px] px-2 z-0">
            <img src={hero} alt="" />
          </span>
          <div className=" text-center justify-center border-slate-500 rounded-xl text-md px-6 max-w-[25rem] py-2 z-10 text-white  ml-[30rem] mt-[15rem] leading-[2rem]">
            <div className="text-center  ">
              <h1 className="text-3xl mb-5">
                Why Choose <i className="text-[#FB4F4F]"> E- verify </i>
              </h1>
              <p>
                Organisations can request standard and enhanced criminal record
                checks for eligible positions in England and Wales.
              </p>
              <Button className=" p-1 rounded-2xl bg-[#39399D] text-white whitespace-nowrap mt-5">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
