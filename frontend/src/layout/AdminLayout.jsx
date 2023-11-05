import { Outlet } from "react-router-dom";
import AdminNav from "../components/nav/AdminNav/AdminNav";
const RootLayout = () => {
    return (
        <>

            <AdminNav />
            <h1>Portfoliomatic Admin</h1>
            <Outlet />
        </>
    );
};

export default RootLayout;