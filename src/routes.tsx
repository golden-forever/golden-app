import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import AuthLayout from "./layouts/auth/AuthLayout";

import {
  JobDescription,
  SearchResults,
  Pipeline,
  CreateJob,
  RedirectPage,
  SignUp,
  Login,
  ForgotPassword,
  ChangePassword,
} from "./pages";

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
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "change-password", element: <ChangePassword /> },

        // { path: "products", element: <ProductsPage /> },
      ],
    },
    { path: "/register", element: <SignUp /> },
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
