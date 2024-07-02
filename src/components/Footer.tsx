import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className="bg-red-500 px-[5%] munito py-20 flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="text-white text-2xl font-[500]">Logo</h1>
          <div className="text-white flex flex-row gap-5 mt-4">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className=" flex flex-col justify-end items-end">
          <h1 className="text-white">SUBSCRIBE TO OUR NEWSLETTER</h1>

          <div className="flex bg-white p-1  max-w-[25rem] border">
            <input
              className="min-w-[17.5rem] px-2"
              placeholder="Enter your email"
            />
            <button className="bg-red-500 px-4 text-white">Send</button>
          </div>
        </div>
      </div>
      <div className="grid text-gray-300 grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        <div>
          <ul>
            <li>Company</li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li><Link to="/address">Jobs</Link></li>
            

            <li><Link to="/worker-verification">Worker Verification</Link></li>
            

            <li><Link to="/worker-search">Worker Search</Link></li>
            

            <li><Link to="/companyinfo">Company Info</Link></li>
            

            <li> <Link to="/work-experience">Work Experience</Link></li>
           
          </ul>
        </div>
        <div>
          <ul>
            <li>NBC App</li>
            <li>Peacock</li>
            <li>Advertise</li>
            <li>Closed Captoning</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Advertise</li>
            <li>Link TV Provider</li>
            <li>FAQ</li>
            <li>Casting</li>
            <li>Contcct Us</li>
            <li>Local Schedule</li>
            <li>Tickets and NBC Studio Tour</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Parental Guildeliness</li>
            <li>TV Ratings</li>
            <li>Video Viewing Policy</li>
            <li>Solar Panel</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
