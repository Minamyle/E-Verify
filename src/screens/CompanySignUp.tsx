import RegisterationCard from "../components/RegisterationCard";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const CompanySignUp = () => {
  return (
    <div className="w-[100vw] h-[100vh] px-[1rem] lg:px-0 lg:pl-[7.5%] flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        <div className="w-[100%] lg:w-6/12 lg:px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
          <div className="flex items-center gap-12">
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
              className="w-12"
            />
            <h1 className="text-xl">Company Logo</h1>
          </div>

          <div className="mt-16 w-[100%] flex flex-col gap-5">
          <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Company name
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>


            <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Company Email
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Organzation
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>


            <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Company Size
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Password
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Re-type Password
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
            <Link to="/company-detail" className="max-w-[30rem] text-center border bg-red-400 text-white py-2 mt-6 rounded-xl">
              Sign up
            </Link>
          </div>

          <div className="mt-16 max-w-[27.5rem] w-[100%] flex flex-col justify-center items-center">
            <p className="mb-2">or</p>

            <div className="flex gap-6 items-center">
              <TiSocialFacebook className="border bg-red-400 text-white text-4xl rounded-full p-1" />
              <FaTwitter className="border bg-red-400 text-white text-4xl rounded-full p-2" />
              <RiGoogleLine className="border bg-red-400 text-white text-4xl rounded-full p-1" />
            </div>

            <h1 className="mt-6">
              Already have an account?{" "}
              <Link to="/company-detail" className="text-blue-400">Sign in</Link>
            </h1>
          </div>
        </div>
      </RegisterationCard>
    </div>
  );
};

export default CompanySignUp;
