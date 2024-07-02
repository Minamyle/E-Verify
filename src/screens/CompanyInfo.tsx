const CompanyInfo = () => {
  return (
    <div className="px-[5%] pb-32 inter pt-24">
      <div className="flex justify-between gap-16">
        <div className="w-8/12 h-[30rem] flex gap-10">
          {/* <div> */}
          <div className="border w-[35%] flex flex-col justify-evenly items-center h-[100%]">
            <h1 className="font-[500]">Company Verification Photo</h1>
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
              className="max-w-72"
            />
          </div>
          <div className="border fw-fit min-w-[35rem] flex h-[100%] justify-evenly flex-col gap-6 px-12 py-4">
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white left-6 text-[14px] px-2">
                Company Name
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white left-6 text-[14px] px-2">
                Company email
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white left-6 text-[14px] px-2">
                Company Contact
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white left-6 text-[14px] px-2">
                Company Size
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="w-3/12">
          <button>Dashboard</button>
        </div>
      </div>

      <div className="flex gap-12 mt-20">
        <div className="max-w-[24.5rem] border-2 border-gray-500 rounded-md p-4">
          <p className="text-[11px] mb-6">Address</p>
          <h1 className="text-gray-600">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos State
            Nigeria.
          </h1>
        </div>
        <div className="max-w-[24.5rem] border-2 border-gray-500 rounded-md p-4">
          <p className="text-[11px] mb-6">Address</p>
          <h1 className="text-gray-600">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos State
            Nigeria.
          </h1>
        </div>
      </div>

      <div className="max-w-[60rem] border border-black rounded-md mt-20 max-h-[15rem] overflow-hidden relative">
        <div className="absolute bottom-0 w-[100%] px-6 py-1 h-[2rem] bg-gray-400">
          <p className="text-white text-[14px]">Locate Company</p>
        </div>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          className="w-full h-[100%]"
        />
      </div>

      <div className="mt-20 max-w-[70rem]">
        <h1>Company Admin</h1>
        <div className=" grid grid-cols-2 mt-6 gap-4">
          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white left-6 text-[14px] px-2">
              Company User
            </span>
            <input
              className="border bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-2"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white left-6 text-[14px] px-2">
              user phone no
            </span>
            <input
              className="border bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-2"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white left-6 text-[14px] px-2">
              User email
            </span>
            <input
              className="border bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-2"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%]">
            {/* <span className='absolute bg-white left-6 text-[14px] px-2'>Company Name</span> */}
            <input
              className="border bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-2"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-[80rem]">
        <h1>Approved Workers</h1>

        <div className="flex flex-row gap-4 text-[12px] mt-4">
          <h1 className="w-[15rem] text-center">Name</h1>
          <h1 className="w-[15rem] text-center">Position</h1>
          <h1 className="w-[15rem] text-center">Contact</h1>
          <h1 className="w-[15rem] text-center">Date Started</h1>
          <h1 className="w-[15rem] text-center">Date Ended</h1>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <h1 className="w-[15rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[15rem] text-center">Receptionist</h1>
              <h1 className="w-[15rem] text-center">08062634232</h1>
              <h1 className="w-[15rem] text-center">4th Jan 1012</h1>
              <h1 className="w-[15rem] text-center">3rd may 2992</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[15rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[15rem] text-center">Receptionist</h1>
              <h1 className="w-[15rem] text-center">08062634232</h1>
              <h1 className="w-[15rem] text-center">4th Jan 1012</h1>
              <h1 className="w-[15rem] text-center">3rd may 2992</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[15rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[15rem] text-center">Receptionist</h1>
              <h1 className="w-[15rem] text-center">08062634232</h1>
              <h1 className="w-[15rem] text-center">4th Jan 1012</h1>
              <h1 className="w-[15rem] text-center">3rd may 2992</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[15rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[15rem] text-center">Receptionist</h1>
              <h1 className="w-[15rem] text-center">08062634232</h1>
              <h1 className="w-[15rem] text-center">4th Jan 1012</h1>
              <h1 className="w-[15rem] text-center">3rd may 2992</h1>
            </div>
          </div>
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
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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

export default CompanyInfo;
