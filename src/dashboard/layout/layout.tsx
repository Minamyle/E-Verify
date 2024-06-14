
import Sidebar from "./sidebar";

const AdminLayout = ({ children }: { children: any }) => {
  return (
    <div className="flex max-w-[100vw]">
      <Sidebar />
      <div className="w-56"></div>
      {children}
    </div>
  );
};

export default AdminLayout;
