import {
    createBrowserRouter
   
  } from "react-router-dom";
import App from '../App'
import Login from "./login";
import Register from "./signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <><App/></>,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Register/>
    },
  
]);
export default router;