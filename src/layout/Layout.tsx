import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { IoMdNotifications } from "react-icons/io";
import NotificationCard from "../components/NotificationCard";
import { useState } from "react";
const Layout = ({children}: any) => {
  const [showNotification, setShowNotification] = useState(false)
  return (
    <div className="w-[100vw] overflow-x-hidden">
        <Navbar />
        <div className="mt-20 flex justify-end max-w-[90rem] relative mx-auto items-end">
          <IoMdNotifications className="text-2xl text-gray-500 cursor-pointer" onClick={() => setShowNotification(!showNotification)}/>

         {
          showNotification &&  <NotificationCard />
         }
        </div>
        {children}
        <Footer />
    </div>
  )
}

export default Layout