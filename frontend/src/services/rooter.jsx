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
import InformationPage from "../views/admin/InformationPage"
import ExperiencesPage from "../views/admin/ExperiencesPage"
import WorkPage from "../views/admin/WorkPage"
import AdminPage from "../views/admin/AdminPage"
import EditPage from "../views/admin/EditPage"
// ==============================================>


import LogInPage from "../views/LogInPage";
import SignUp from "../views/SignUp";

const rooter = createBrowserRouter([
  {
    // création de mes routes public
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cvtemplates", element: <CvTemplatesPage /> },
      { path: "/login", element: <LogInPage /> },
      { path: "/signup", element: <SignUp /> },
    ]
    // ==========================================================>
  },
  {
    // création de mes routes public
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin/information/", element: <InformationPage /> },
      { path: "/admin/edit/", element: <EditPage /> },
      { path: "/admin/personal/details", element: <DashboardPage /> },
      { path: "/admin/template/", element: <ExperiencesPage /> },
      { path: "/admin/work", element: <WorkPage /> },
      { path: "/admin/test/:createdCvId", element: <AdminPage /> },
    ]
    // ==================================================================>
  },

]);

export default rooter;
