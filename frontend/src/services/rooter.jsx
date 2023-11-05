import { createBrowserRouter } from "react-router-dom";

// ===============================================>
// Import des pages nécessaire concernant ma partie public
import PublicLayout from '../layout/PublicLayout'
import HomePage from "../views/public/HomePage";
import AboutPage from "../views/public/AboutPage";
import ContactPage from "../views/public/ContactPage";
import CvTemplatesPage from "../views/public/CvTemplates";
// ==========================================================>
// -----------------------------------------------------------------------
// ==========================================================>
// Import des pages nécessaire concernant ma partie Admin
import AdminLayout from "../layout/AdminLayout";
import DashboardPage from "../views/admin/DashboardPage"
import ExperiencesPage from "../views/admin/ExperiencesPage"
import WorkPage from "../views/admin/WorkPage"
// ==============================================>


import LogInPage from "../views/LogInPage";
import SignUp from "../views/SignUp";

const rooter = createBrowserRouter([
  {
    // création de mes routes public
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/public", element: <HomePage /> },
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
      { path: "/cvtemplates", element: <CvTemplatesPage />},
      { path: "/login", element: <LogInPage />},
      { path: "/signup", element: <SignUp />},
    ]
    // ==========================================================>
  },
  {
    // création de mes routes public
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin/dashboard", element: <DashboardPage /> },
      { path: "/admin/experiences", element: <ExperiencesPage />},
      { path: "/admin/work", element: <WorkPage />},
    ]
    // ==================================================================>
  },
  
]);

export default rooter;
