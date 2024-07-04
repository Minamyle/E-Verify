import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { LuCalendarPlus } from "react-icons/lu";
import { PiCalendarBold } from "react-icons/pi";

import { BsArrowBarDown } from "react-icons/bs";
import { useState } from "react";
const Sidebar = () => {
  const links = [
    {
      icon: <BsFillGrid1X2Fill />,
      title: "Dashboard",
    },
    {
      icon: <IoIosPerson />,
      title: "Review",
    },
    {
      icon: <LuCalendarPlus />,
      title: "History Log",
    },
    {
      icon: <PiCalendarBold />,
      title: "Last most stat",
    },
  ];

  const [showMenu, setShowMenu] = useState(true)
  return (
    <div className={`h-[100vh] inter bg-red-500 fixed left-0 top-0 ${showMenu ? 'w-56 px-4' : 'w-16 px-1'} inter flex flex-col justify-between py-12  text-white`}>
      <div className={`flex gap-3 items-center ${!showMenu && 'justify-center'}`} onClick={() => setShowMenu(!showMenu)}>
        <BsArrowBarDown className="rotate-90 text-2xl" />
       {
        showMenu && ' back'
       }
      </div>

      <div>
        {links.map((link, i) => (
          <div
            key={i}
            className={`flex gap-4 items-center  py-2 ${showMenu ? 'py-4 lg:pl-6 px-4' : 'py-4 justify-center'} rounded-md  ${
              i == 0 ? "bg-white/60" : ""
            }`}
          >
            {link.icon}
            <h1 className={`${showMenu ? 'flex' : 'hidden'}`}>{link.title}</h1>
          </div>
        ))}
      </div>

      <div />
      <div className={`flex gap-3 items-center border-t-2 pt-8 ${!showMenu && 'justify-center'}`}>
        <BsArrowBarDown className={`text-2xl -rotate-90 items-center `} />
        {
        showMenu && ' Log out'
       }
      </div>

      <div />
    </div>
  );
};

export default Sidebar;









// import React from 'react';
// import { AiFillDashboard } from "react-icons/ai";
// import { IoIosCard } from "react-icons/io";
// import { MdOutlinePayments } from "react-icons/md";
// import { MdOutlineAccountBalance } from "react-icons/md";
// import { HiBanknotes } from "react-icons/hi2";
// import { FaPeopleArrows } from "react-icons/fa6";
// import { IoSettingsOutline } from "react-icons/io5";
// import { SiWebmoney } from "react-icons/si";
// const Sidebar = () => {
//   return (
//     <div className=' h-screen bg-red-500  shadow-lg '>
//       <div className=' flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
//         <div className='flex flex-col gap-10 px-4 mt-4'>
//           <div className='flex items-center justify-center gap-2'>
//             <SiWebmoney className='text-indigo-900 dark:text-white text-xl md:text-4xl'/>
//             <div className=' hidden md:flex font-bold '>FinaApp</div>
//           </div>
//           <div className='flex flex-col gap-5 text-md sm:text-xs md:text-sm lg:text-lg'>
//             <div className='flex items-center  gap-2'>
//               <div><AiFillDashboard/></div>
//               <div className='hidden sm:flex hover:text-slate-100 cursor-pointer '>Dashboard</div>
//             </div>
//             <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
//               <div><IoIosCard/></div>
//               <div className='hidden sm:flex'>Cards</div>
//             </div>
//             <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
//               <div><MdOutlinePayments/></div>
//               <div className='hidden sm:flex'>Payments</div>
//             </div>
//             <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
//               <div><MdOutlineAccountBalance/></div>
//               <div className='hidden sm:flex'>Accounts</div>
//             </div>
//             <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
//               <div><HiBanknotes/></div>
//               <div className='hidden sm:flex'>Loans</div>
//             </div>
//             <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
//               <div><FaPeopleArrows/></div>
//               <div className='hidden sm:flex'>Beneficiary</div>
//             </div>
//           </div>
//         </div>
//         <div className='flex items-center text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-2 hover:text-slate-100 cursor-pointer'>
//           <div><IoSettingsOutline/></div>
//           <div className='hidden sm:flex'>Settings</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
