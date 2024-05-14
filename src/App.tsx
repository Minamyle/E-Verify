import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './layout/Layout'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import CompanySignUp from './screens/CompanySignUp'
import Address from './screens/Address'
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
      path="/register"
      element={
        <RegisterScreen />
      }
    />,
    <Route
      path="/register/company"
      element={
        <CompanySignUp />
      }
    />,
    <Route
      path="/address"
      element={
        <Address />
      }
    />,
  ]
  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
