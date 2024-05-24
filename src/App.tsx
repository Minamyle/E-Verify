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
    <Route path="/register" element={<RegisterScreen />} />,
    <Route path="/register/company" element={<CompanySignUp />} />,
    <Route path="/address" element={<Address />} />,
    <Route path="/verifypage" element={<VerifyPage />} />,
    <Route path="/about-us" element={<AboutUs />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/fag" element={<FAQ />} />,
    <Route path="/companyinfo" element={<CompanyInfo />} />,
  ];
  const router = createBrowserRouter(createRoutesFromElements(routes));
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
