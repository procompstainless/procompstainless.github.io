import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root/Root";
import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/About";
import ProductPage from "../pages/product/Product";
import ServicePage from "../pages/service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/services/:id",
        element: <ServicePage />,
      },
    ],
  },
]);

export default router;
