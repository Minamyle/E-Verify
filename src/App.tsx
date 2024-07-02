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
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import FAQ from "./screens/FAQ";
import CompanyInfo from "./screens/CompanyInfo";
import Verification from "./screens/Verification";
import WorkExperience from "./screens/WorkExperience";
import AdminLayout from "./dashboard/layout/layout";
import Home from "./screens/dashboard/Home";
import WorkerSearch from "./screens/worker/worker-search";
import CompanyPostJobafterInterview from "./screens/CompanyPostJobafterInterview";
import WorkerSignIn from "./screens/WorkerSignIn";
import CompanySignIn from "./screens/CompanySignIn";
import WorkerSignUp from "./screens/WorkerSignUp";
import WorkExp from "./screens/WorkExp";
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
    <Route path="/worker-verification" element={<Layout>
      <Verification />
    </Layout>} />,
    <Route path="/worker-search" element={<Layout>
      <WorkerSearch />
    </Layout>} />,
    <Route path="/about-us" element={<AboutUs />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/faq" element={<FAQ />} />,
    <Route
      path="/CompanyPostJobafterInterview"
      element={<CompanyPostJobafterInterview />}
    />,
    <Route path="/WorkerSignIn" element={<WorkerSignIn />} />,
    <Route path="/WorkerSignUp" element={<WorkerSignUp />} />,
    <Route path="/WorkExp" element={<WorkExp />} />,
    <Route path="/CompanySignIn" element={<CompanySignIn />} />,

    <Route path="/companyinfo" element={
      <Layout>
    <CompanyInfo />
    </Layout>} />,
    <Route path="/verification" element={<Layout>
      <Verification />
    </Layout>} />,
    <Route path="/work-experience" element={<Layout>
      <WorkExperience />
    </Layout>} />,
    // <Route path="/worker-info" element={<Layout>
    //   <WorkerInfo />
    // </Layout> } />
    // <Route
    //   path="/verification"
    //   element={
    //     <Layout>
    //       <Verification />
    //     </Layout>
    //   }
    // />,
    <Route
      path="/work-experience"
      element={
        <Layout>
          <WorkExperience />
        </Layout>
      }
    />,
  ];
  const router = createBrowserRouter(createRoutesFromElements(routes));
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
