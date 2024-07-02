import { useState } from "react";
import RegisterationCard from "../components/RegisterationCard";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import axios from "axios";

const CompanySignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect, etc.)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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

          <form
            onSubmit={handleLogin}
            className="mt-16 w-[100%] flex flex-col gap-5"
          >
            <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Company email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="max-w-[27.5rem] border bg-red-400 text-white py-2 mt-6 rounded-xl"
            >
              Sign In
            </button>
          </form>

          <div className="mt-16 max-w-[27.5rem] w-[100%] flex flex-col justify-center items-center">
            <p className="mb-2">or</p>

            <div className="flex gap-6 items-center">
              <TiSocialFacebook className="border bg-red-400 text-white text-4xl rounded-full p-1" />
              <FaTwitter className="border bg-red-400 text-white text-4xl rounded-full p-2" />
              <RiGoogleLine className="border bg-red-400 text-white text-4xl rounded-full p-1" />
            </div>

            <h1 className="mt-6">
              Do not have an account?{" "}
              <a href="/register/company" className="text-blue-400">
                Sign Up
              </a>
            </h1>
          </div>
        </div>
      </RegisterationCard>
    </div>
  );
};

export default CompanySignIn;
