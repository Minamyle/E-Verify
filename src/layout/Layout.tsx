import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
