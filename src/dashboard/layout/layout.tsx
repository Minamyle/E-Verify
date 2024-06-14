
import Sidebar from "./sidebar";

const AdminLayout = ({ children }: { children: any }) => {
  return (
    <div className="flex bg-white w-[100vw] overflow-x-hidden">
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
