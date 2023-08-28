import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import JobDescription from "./pages/JobDescription";
import SearchResults from "./pages/SearchResults";
import Pipeline from "./pages/Pipeline";

// import SimpleLayout from './layouts/simple';
// //
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
// import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <JobDescription />, index: true },
        { path: "search-results", element: <SearchResults /> },
        { path: "pipeline", element: <Pipeline /> },
        // { path: "products", element: <ProductsPage /> },
      ],
    },
    // {
    //   path: "login",
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: "*",
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
