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
import RequestWorker from "./screens/worker/gurantor/request-gurantor";
import AddGurantor from "./screens/worker/gurantor/add-gurantor";
import AddToCart from "./screens/worker/cart/add-cart";
import AddExperience from "./screens/experience/add-experience";
import AddEducation from "./screens/worker/education/add-education";
import AddExperienceAutoFill from "./screens/experience/add-expperience-autofill";
import Resignation from "./screens/experience/resignation";
import HistoryLog from "./screens/worker/history-log";
import WorkerInfo from "./screens/worker-info";
import RequestGurantorOtp from "./screens/worker/gurantor/request-gurantor-otp";
import AddAddress from "./screens/worker/add-address";
import JobApplication from "./screens/application/job-application";
import Comment from "./screens/dashboard/comment";
import DashboardLog from "./screens/dashboard/log";
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
    <Route
      path="/dashboard-comment"
      element={
        <AdminLayout>
          <Comment />
        </AdminLayout>
      }
    />,

    <Route
      path="/dashboard-log"
      element={
        <AdminLayout>
          <DashboardLog />
        </AdminLayout>
      }
    />,
    <Route path="/register" element={<RegisterScreen />} />,
    <Route path="/register/company" element={<CompanySignUp />} />,
    <Route path="/address" element={<Address />} />,
    <Route path="/worker-verification" element={<Layout>
      <Verification />
    </Layout>} />,
    <Route path="/history" element={<Layout>
      <HistoryLog />
    </Layout>} />,
    <Route path="/worker-request" element={<Layout>
      <RequestWorker />
    </Layout>} />,
    <Route path="/add-worker" element={<Layout>
      <AddGurantor />
    </Layout>} />,

<Route path="/add-experience" element={<Layout>
  <AddExperience />
</Layout>} />,
<Route path="/job-application" element={<Layout>
  <JobApplication />
</Layout>} />,

<Route path="/add-experience-autofill" element={<Layout>
  <AddExperienceAutoFill />
</Layout>} />,

<Route path="/resignation" element={<Layout>
  <Resignation />
</Layout>} />,
<Route path="/add-education" element={<Layout>
  <AddEducation />
</Layout>} />,
<Route path="/add-cart" element={<Layout>
  <AddToCart />
</Layout>} />,


// not done yet
<Route path="/add-address" element={<Layout>
  <AddAddress />
</Layout>} />,
    <Route path="/worker-search" element={<Layout>
      <WorkerSearch />
    </Layout>} />,
    <Route path="/about-us" element={<AboutUs />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/faq" element={<FAQ />} />,



    //amina didnt mke this mobile responsive
    <Route
      path="/CompanyPostJobafterInterview"
      element={
        <Layout><CompanyPostJobafterInterview />
        </Layout>}
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
    <Route path="/worker-info" element={<Layout>
      <WorkerInfo />
    </Layout> } />,
    <Route path="/gurantor-otp" element={<Layout>
      <RequestGurantorOtp />
    </Layout> } />,
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
