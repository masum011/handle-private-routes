import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BigSpinner from "./components/common/BigSpinner";
import About from "./pages/About";
import PrivateRoute from "./privateRutes/PrivateRoute";
import Card from "./pages/Card";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PrivateRoute isPrivate={false}>
        <Login />
      </PrivateRoute>
    ),
    // children: [
    //   {
    //     path: "/",
    //     element:<Dashboard/>,
    //   },
    //   {
    //     path: "/about",
    //     element:<About/>,
    //   },
    // ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute isPrivate={true}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <PrivateRoute isPrivate={true}>
        <About />
      </PrivateRoute>
    ),
  },
  {
    path: "/card-details",
    element: (
      <PrivateRoute isPrivate={true}>
       <Card/>
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
}
export default App;
