import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { LuCalendarPlus } from "react-icons/lu";
import { PiCalendarBold } from "react-icons/pi";

import { BsArrowBarDown } from "react-icons/bs";
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
  return (
    <div className="h-[100vh] bg-red-500 fixed left-0 top-0 w-56 nunito flex flex-col justify-between py-12 px-8 text-white">
      <div className="flex gap-3 items-center">
        <BsArrowBarDown className="rotate-90 text-xl" />
        back
      </div>

      <div>
        {links.map((link, i) => (
          <div
            key={i}
            className={`flex gap-4 items-center pl-6 rounded-md py-2 ${
              i == 0 ? "bg-white/60" : ""
            }`}
          >
            {link.icon}
            <h1>{link.title}</h1>
          </div>
        ))}
      </div>

      <div />
      <div className="flex gap-3 items-center border-t-2 pt-8">
        <BsArrowBarDown className="text-xl -rotate-90" />
        Log out
      </div>

      <div />
    </div>
  );
};

export default Sidebar;
