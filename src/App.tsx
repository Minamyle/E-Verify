import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './layout/Layout'
import HomeScreen from './screens/HomeScreen'
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
  ]
  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
