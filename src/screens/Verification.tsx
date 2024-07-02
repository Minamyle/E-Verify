import { useState } from "react";

const steps = [
  "Personal detail",
  "Addressing",
  "Education",
  "Bank details",
  "Medical",
  "Certification",
  "ID Check",
  "Guarantor",
  "Work reference",
  "Police Check Up",
  "Taxation TIN",
  "E-certify",
];

const Layout = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <div className="flex w-[100%] justify-between">
      <div className="border border-slate-700 rounded-xl w-3/12 h-[30rem] overflow-hidden flex flex-col justify-evenly items-center">
        <h1 className="font-[600]">Identification Verification Photo</h1>
        <img
          src="https://guardian.ng/wp-content/uploads/2023/05/bigstock-1619644371.jpg"
          className="w-[70%] h-[20rem] rounded-full"
          alt="Identification Verification"
        />
      </div>

      <div
        className={`w-8/12 h-[30rem] border border-slate-700 rounded-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
const Verification = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const handleNext = () => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  // const handlePrev = () => {
  //     setCurrentStep(prev => Math.max(prev - 1, 0));
  // };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] grid grid-cols-2 gap-[2rem]">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Name
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Surname
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  email
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  phone no
                </span>
                <input
                  className="border  outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Age
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Race
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  gender
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Disability
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] py-[4rem] flex flex-col gap-[1rem]">
              <div className="flex gap-[1rem]">
                <div className="border-2 rounded-xl border-green-300 p-4">
                  <h1 className="text-[14px] text-green-600">Address 1</h1>
                  <p className="mt-6">
                    15, Iyala street Akindedun, off shoprite, Alausa, Ikeja
                    Lagos Statee Nigeria
                  </p>
                </div>
                <div className="border-2 rounded-xl border-red-300 p-4">
                  <h1 className="text-[14px] text-red-600">Address 1</h1>
                  <p className="mt-6">
                    15, Iyala street Akindedun, off shoprite, Alausa, Ikeja
                    Lagos Statee Nigeria
                  </p>
                </div>
              </div>
              <div className="flex mt-[2rem] gap-[1rem]">
                <div className="w-[50%] flex items-center gap-6 font-[500]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8373/8373266.png"
                    className="w-7"
                  />
                  <p>35km to company location</p>
                </div>
                <div className="w-[50%] flex items-center gap-6 font-[500]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8373/8373266.png"
                    className="w-7"
                  />
                  <p>35km to company location</p>
                </div>
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] border-red-600 grid grid-cols-2 gap-[2rem] gap-y-1">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  School
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  State
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Degree
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Nation
                </span>
                <input
                  className="border  outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Course
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex gap-3">
                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-[14px] px-2">
                    Start Year
                  </span>
                  <input
                    className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>

                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-[14px] px-2">
                    Finish Year
                  </span>
                  <input
                    className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex h-fit items-center gap-6">
                <input type="checkbox" />
                <p>I am still schooling</p>
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] h-fit border-red-600 grid grid-cols-2 gap-[2rem] gap-y-[4rem]">
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Bank
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Account no
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Account Name
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] h-fit grid grid-cols-2 gap-[2rem] gap-y-[4rem]">
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Known Meedical Conditions
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              {/* <div></div> */}
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Height (inch)
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Current Medications
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Weight (kg)
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Alergies
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Previous Surgeries
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Physician's Notes
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] h-fit grid grid-cols-2 gap-[2rem] gap-y-[4rem]">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Certificate
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Issuer
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Year's Issued
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] h-fit grid grid-cols-2 gap-[2rem] gap-y-[3rem]">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  ID Card
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Card Name
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  ID num
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Year Issued
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div></div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col inter gap-4 justify-end items-end">
            {/* <div className='w-[100%]'>
                            
                            </div> */}
            <Layout className="p-[2rem] border-red-500 h-fit ">
              <h1 className="text-start mb-4">Gurantor 1</h1>
              <div className="grid grid-cols-2 gap-[2rem] gap-y-[3rem]">
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Name
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                {/* <div></div> */}
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Occupation
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                {/* <div></div> */}
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Phone no.
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    email
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] border-green-300 h-fit grid grid-cols-2 gap-[2rem]">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  School
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  State
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex gap-3">
                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-[14px] px-2">
                    Start Year
                  </span>
                  <input
                    className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>

                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-[14px] px-2">
                    Finish Year
                  </span>
                  <input
                    className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Degree
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex  items-center gap-6">
                <input type="checkbox" />
                <p>I am still working here</p>
              </div>

              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Nation
                </span>
                <input
                  className="border  outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col col-span-2 relative w-[100%] border border-gray-600 rounded-md p-3">
                <p className="text-gray-500 text-[13px]">Job description</p>
                <h1 className="mt-3">
                  15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos
                  Statee Nigeria. street Akindedun, off shoprite, Alausa, Ikeja
                  Lagos Statee Nigeria
                </h1>
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] border-red-300 h-fit grid grid-cols-1 gap-[2rem]">
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Police Report of Conviction
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Information from the list held under Section 142 of the
                  Education Act 2002
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Protection of Children Act List Information
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Protected Veteran
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col gap-4 justify-end items-end">
            <Layout className="p-[2rem] border-red-300 h-fit grid grid-cols-1 gap-[2rem]">
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Date of Payment
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Tax Directory
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Outstanding Tax
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[50rem] py-1.5"
                  placeholder=""
                />
              </div>
            </Layout>
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      default:
        return (
          <div>
            <h2>All steps completed!</h2>
            <button
              type="button"
              onClick={() => (setCurrentStep(0), setCompletedSteps(new Set()))}
            >
              Restart
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-[90rem] inter py-20 mx-auto inter">
      <div className="flex flex-col justify-center mt-10 items-center">
        <h1 className="text-4xl font-[500]">James Johnson</h1>
        <p className="text-xl text-gray-500">48648-9743by34-43r4n4</p>
      </div>
      <div className=" h-fit mt-20 flex flex-row gap-4 flex-wrap">
        {steps.map((step, index) => (
          <span
            key={index}
            className={`py-2 px-10 rounded-xl ${
              completedSteps.has(index) || currentStep == index
                ? "bg-blue-700 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {step}
          </span>
        ))}
      </div>
      <div className="mt-20">{renderForm()}</div>
    </div>
  );
};

export default Verification;
