import Layout from "../Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Findjob from "../../pages/Findjob";
import Postjob from "../../pages/Postjob";
import Savejob from "../../pages/Savejob";
const Route = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Findjob />,
        },
        {
          path: "postjob",
          element: <Postjob />,
        },
        {
          path: "savejob",
          element: <Savejob />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Route;
