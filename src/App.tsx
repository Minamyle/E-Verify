import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CompanySignUp from "./screens/CompanySignUp";
import Address from "./screens/Address";
import VerifyPage from "./screens/VerifyPage";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import FAQ from "./screens/FAQ";
import CompanyInfo from "./screens/CompanyInfo";
import Verification from "./screens/Verification";
import WorkExperience from "./screens/WorkExperience";
import AdminLayout from "./dashboard/layout/layout";
import Home from "./screens/dashboard/Home";
const App = () => {
  const routes = [
    <Route
      path="/"
      element={
        <Layout>
          <HomeScreen />
        </Layout>
      }
    />,
    <Route
      path="/dashboard"
      element={
        <AdminLayout>
          <Home />
        </AdminLayout>
      }
    />,
    <Route path="/register" element={<RegisterScreen />} />,
    <Route path="/register/company" element={<CompanySignUp />} />,
    <Route path="/address" element={<Address />} />,
    <Route path="/verifypage" element={<VerifyPage />} />,
    <Route path="/about-us" element={<AboutUs />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/fag" element={<FAQ />} />,
    <Route path="/companyinfo" element={<CompanyInfo />} />,
    <Route path="/verification" element={<Layout>
      <Verification />
    </Layout>} />,
    <Route path="/work-experience" element={<Layout>
      <WorkExperience />
    </Layout>} />,
  ];
  const router = createBrowserRouter(createRoutesFromElements(routes));
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
