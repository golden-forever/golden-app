import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import {
  JobDescription,
  SearchResults,
  Pipeline,
  CreateJob,
  RedirectPage,
} from "./pages";

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
        { element: <RedirectPage />, index: true },
        { path: "job/:jobID", element: <JobDescription /> },
        { path: "job/new-job", element: <CreateJob /> },
        { path: "search-results", element: <SearchResults /> },
        { path: "pipeline", element: <Pipeline /> },
        // { path: "products", element: <ProductsPage /> },
      ],
    },
    { path: "*", element: <RedirectPage /> },
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
