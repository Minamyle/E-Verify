import RegisterationCard from "../components/RegisterationCard";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
const CompanySignUp = () => {
  return (
    <div className="w-[100vw] h-[100vh] pl-[7.5%] flex flex-row items-center nunito justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        <div className="w-6/12 px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
          <div className="flex items-center gap-12">
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
              className="w-12"
            />
            <h1 className="text-xl">Company Logo</h1>
          </div>

          <div className="mt-16 w-[100%] flex flex-col gap-5">
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Commpany name"
            />
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Commpany email"
            />
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Organization"
            />
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Commpany size"
            />
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Password"
            />
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="re-type pssword"
            />
            <button className="max-w-[27.5rem] border bg-red-400 text-white py-2 mt-6 rounded-xl">
              Sign up
            </button>
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
              <span className="text-blue-400">Sign in</span>
            </h1>
          </div>
        </div>
      </RegisterationCard>
    </div>
  );
};

export default CompanySignUp;
